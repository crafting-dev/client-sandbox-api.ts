import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

/**
 * Environment variable overriding the local configuration folder.
 */
export const ENV_CONFIG_DIR = 'SANDBOX_CONFIG_DIR';

/**
 * Environment variable overriding the target server URL.
 */
export const ENV_SERVER_URL = 'CRAFTING_SANDBOX_SERVER_URL';

/**
 * The server URL used when nothing else specifies one.
 */
export const DEFAULT_SERVER_URL = 'https://sandboxes.cloud';

/**
 * The name of the config file inside the configuration folder.
 */
export const CONFIG_FILE = 'config.toml';

/**
 * The resolved configuration of a {@link Connector}.
 */
type Configuration = {
    /**
     * The local configuration folder, where the config file and the
     * CLI authentication context are stored.
     */
    configFolder: string;

    /**
     * The URL of the target server, without a trailing slash.
     */
    serverUrl: string;
};

/**
 * The subset of connector options which affects configuration resolution.
 */
type ConfigurationOverrides = {
    /**
     * The default server URL. It is overridden by {@link ENV_SERVER_URL} and
     * by `server_url` from the config file.
     */
    server_url?: string;
};

/**
 * The default configuration folder for the current platform.
 *
 * - On Mac, `~/.crafting/sandbox`;
 * - On Linux (including WSL) and everything else, `~/.config/crafting/sandbox`.
 */
function defaultConfigFolder(): string {
    const home = os.homedir();
    if (process.platform === 'darwin') {
        return path.join(home, '.crafting', 'sandbox');
    }
    return path.join(home, '.config', 'crafting', 'sandbox');
}

/**
 * Resolve the configuration folder.
 *
 * It is taken from {@link ENV_CONFIG_DIR} when set, and falls back to
 * {@link defaultConfigFolder}.
 */
function resolveConfigFolder(): string {
    const fromEnv = process.env[ENV_CONFIG_DIR];
    if (fromEnv) {
        return fromEnv;
    }
    return defaultConfigFolder();
}

/**
 * Resolve the configuration.
 *
 * The server URL is resolved in the following order:
 * - {@link ENV_SERVER_URL};
 * - `server_url` from {@link ConfigurationOverrides};
 * - `server_url` from `$configFolder/config.toml`;
 * - {@link DEFAULT_SERVER_URL}.
 *
 * @param overrides the relevant subset of the connector options.
 * @returns the resolved {@link Configuration}.
 */
function resolveConfiguration(overrides?: ConfigurationOverrides): Configuration {
    const configFolder = resolveConfigFolder();
    const serverUrl =
        process.env[ENV_SERVER_URL] ||
        overrides?.server_url ||
        serverUrlFromConfigFile(configFolder) ||
        DEFAULT_SERVER_URL;
    return {configFolder, serverUrl: normalizeServerUrl(serverUrl)};
}

/**
 * Read `server_url` from the config file in the configuration folder.
 *
 * A missing or unreadable config file is not an error: the caller falls
 * through to the next source of the server URL.
 *
 * @param configFolder the configuration folder.
 * @returns the configured server URL, or `undefined` if unavailable.
 */
function serverUrlFromConfigFile(configFolder: string): string | undefined {
    let content: string;
    try {
        content = fs.readFileSync(path.join(configFolder, CONFIG_FILE), 'utf8');
    } catch {
        return undefined;
    }
    return parseTomlStrings(content)['server_url'];
}

/**
 * Strip the trailing slashes from a server URL so it can be concatenated
 * with an absolute path, and validate it is a URL at all.
 *
 * @param url the server URL.
 * @returns the normalized server URL.
 */
function normalizeServerUrl(url: string): string {
    const trimmed = url.trim().replace(/\/+$/, '');
    let parsed: URL;
    try {
        parsed = new URL(trimmed);
    } catch {
        throw new Error(`invalid server URL: ${url}`);
    }
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
        throw new Error(`unsupported scheme in server URL: ${url}`);
    }
    return trimmed;
}

/**
 * Extract the top-level string keys from a TOML document.
 *
 * The configuration file is only consulted for a handful of flat string
 * values, so this deliberately implements the small subset of TOML needed
 * for that: top-level `key = "value"` pairs, comments, and basic/literal
 * strings. Keys inside a `[table]` are ignored, as are non-string values.
 *
 * @param content the content of the TOML document.
 * @returns the top-level string keys and their values.
 */
function parseTomlStrings(content: string): Record<string, string> {
    const values: Record<string, string> = {};
    let inTable = false;
    for (const rawLine of content.split(/\r?\n/)) {
        const line = rawLine.trim();
        if (line === '' || line.startsWith('#')) {
            continue;
        }
        if (line.startsWith('[')) {
            // Any table or array-of-tables header ends the top-level section.
            inTable = true;
            continue;
        }
        if (inTable) {
            continue;
        }
        const separator = line.indexOf('=');
        if (separator < 0) {
            continue;
        }
        const key = line.slice(0, separator).trim().replace(/^["']|["']$/g, '');
        const value = parseTomlString(line.slice(separator + 1).trim());
        if (key !== '' && value !== undefined) {
            values[key] = value;
        }
    }
    return values;
}

/**
 * Parse a TOML value as a string.
 *
 * @param value the raw text of the value, with surrounding spaces removed.
 * @returns the string value, or `undefined` if it is not a single-line string.
 */
function parseTomlString(value: string): string | undefined {
    if (value.startsWith("'")) {
        // Literal string: no escaping inside.
        const end = value.indexOf("'", 1);
        return end < 0 ? undefined : value.slice(1, end);
    }
    if (!value.startsWith('"')) {
        return undefined;
    }
    // Basic string: honor the escape sequences which can appear in a URL.
    let out = '';
    for (let i = 1; i < value.length; i++) {
        const ch = value[i];
        if (ch === '"') {
            return out;
        }
        if (ch !== '\\') {
            out += ch;
            continue;
        }
        i++;
        switch (value[i]) {
            case 'n': out += '\n'; break;
            case 't': out += '\t'; break;
            case 'r': out += '\r'; break;
            case '"': out += '"'; break;
            case '\\': out += '\\'; break;
            default: return undefined;
        }
    }
    return undefined;
}

export {
    Configuration,
    ConfigurationOverrides,
    defaultConfigFolder,
    resolveConfigFolder,
    resolveConfiguration,
};
