// package: sandboxes.api.v1
// file: sandboxes/api/v1/endpoint.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Port extends jspb.Message { 
    getPort(): number;
    setPort(value: number): Port;
    getProtocol(): string;
    setProtocol(value: string): Port;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Port.AsObject;
    static toObject(includeInstance: boolean, msg: Port): Port.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Port, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Port;
    static deserializeBinaryFromReader(message: Port, reader: jspb.BinaryReader): Port;
}

export namespace Port {
    export type AsObject = {
        port: number,
        protocol: string,
    }
}

export class PortSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): PortSpec;
    getPort(): number;
    setPort(value: number): PortSpec;
    getProtocol(): string;
    setProtocol(value: string): PortSpec;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortSpec.AsObject;
    static toObject(includeInstance: boolean, msg: PortSpec): PortSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortSpec;
    static deserializeBinaryFromReader(message: PortSpec, reader: jspb.BinaryReader): PortSpec;
}

export namespace PortSpec {
    export type AsObject = {
        name: string,
        port: number,
        protocol: string,
    }
}

export class TargetPort extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): TargetPort;
    getPort(): string;
    setPort(value: string): TargetPort;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetPort.AsObject;
    static toObject(includeInstance: boolean, msg: TargetPort): TargetPort.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetPort, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetPort;
    static deserializeBinaryFromReader(message: TargetPort, reader: jspb.BinaryReader): TargetPort;
}

export namespace TargetPort {
    export type AsObject = {
        target: string,
        port: string,
    }
}

export class HTTPRouter extends jspb.Message { 
    clearRoutesList(): void;
    getRoutesList(): Array<HTTPRoutingRule>;
    setRoutesList(value: Array<HTTPRoutingRule>): HTTPRouter;
    addRoutes(value?: HTTPRoutingRule, index?: number): HTTPRoutingRule;

    hasAuthProxy(): boolean;
    clearAuthProxy(): void;
    getAuthProxy(): AuthProxy | undefined;
    setAuthProxy(value?: AuthProxy): HTTPRouter;
    getPath(): string;
    setPath(value: string): HTTPRouter;

    getRequestHeadersMap(): jspb.Map<string, string>;
    clearRequestHeadersMap(): void;

    getResponseHeadersMap(): jspb.Map<string, string>;
    clearResponseHeadersMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPRouter.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPRouter): HTTPRouter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPRouter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPRouter;
    static deserializeBinaryFromReader(message: HTTPRouter, reader: jspb.BinaryReader): HTTPRouter;
}

export namespace HTTPRouter {
    export type AsObject = {
        routesList: Array<HTTPRoutingRule.AsObject>,
        authProxy?: AuthProxy.AsObject,
        path: string,

        requestHeadersMap: Array<[string, string]>,

        responseHeadersMap: Array<[string, string]>,
    }
}

export class HTTPRoutingRule extends jspb.Message { 

    hasBackend(): boolean;
    clearBackend(): void;
    getBackend(): TargetPort | undefined;
    setBackend(value?: TargetPort): HTTPRoutingRule;

    hasPathPrefix(): boolean;
    clearPathPrefix(): void;
    getPathPrefix(): string;
    setPathPrefix(value: string): HTTPRoutingRule;

    hasHeaderRegexp(): boolean;
    clearHeaderRegexp(): void;
    getHeaderRegexp(): HTTPRoutingRule.HeaderRegexp | undefined;
    setHeaderRegexp(value?: HTTPRoutingRule.HeaderRegexp): HTTPRoutingRule;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): string;
    setPath(value: string): HTTPRoutingRule;

    getMatchCase(): HTTPRoutingRule.MatchCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPRoutingRule.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPRoutingRule): HTTPRoutingRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPRoutingRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPRoutingRule;
    static deserializeBinaryFromReader(message: HTTPRoutingRule, reader: jspb.BinaryReader): HTTPRoutingRule;
}

export namespace HTTPRoutingRule {
    export type AsObject = {
        backend?: TargetPort.AsObject,
        pathPrefix: string,
        headerRegexp?: HTTPRoutingRule.HeaderRegexp.AsObject,
        path: string,
    }


    export class HeaderRegexp extends jspb.Message { 
        getHeader(): string;
        setHeader(value: string): HeaderRegexp;
        getRegexp(): string;
        setRegexp(value: string): HeaderRegexp;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HeaderRegexp.AsObject;
        static toObject(includeInstance: boolean, msg: HeaderRegexp): HeaderRegexp.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HeaderRegexp, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HeaderRegexp;
        static deserializeBinaryFromReader(message: HeaderRegexp, reader: jspb.BinaryReader): HeaderRegexp;
    }

    export namespace HeaderRegexp {
        export type AsObject = {
            header: string,
            regexp: string,
        }
    }


    export enum MatchCase {
        MATCH_NOT_SET = 0,
        PATH_PREFIX = 2,
        HEADER_REGEXP = 3,
        PATH = 4,
    }

}

export class TCPRouter extends jspb.Message { 

    hasBackend(): boolean;
    clearBackend(): void;
    getBackend(): TargetPort | undefined;
    setBackend(value?: TargetPort): TCPRouter;
    getTlsPassthrough(): boolean;
    setTlsPassthrough(value: boolean): TCPRouter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TCPRouter.AsObject;
    static toObject(includeInstance: boolean, msg: TCPRouter): TCPRouter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TCPRouter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TCPRouter;
    static deserializeBinaryFromReader(message: TCPRouter, reader: jspb.BinaryReader): TCPRouter;
}

export namespace TCPRouter {
    export type AsObject = {
        backend?: TargetPort.AsObject,
        tlsPassthrough: boolean,
    }
}

export class Endpoint extends jspb.Message { 
    getName(): string;
    setName(value: string): Endpoint;
    getHostname(): string;
    setHostname(value: string): Endpoint;
    getType(): Endpoint.Type;
    setType(value: Endpoint.Type): Endpoint;

    hasHttp(): boolean;
    clearHttp(): void;
    getHttp(): HTTPRouter | undefined;
    setHttp(value?: HTTPRouter): Endpoint;

    hasTcp(): boolean;
    clearTcp(): void;
    getTcp(): TCPRouter | undefined;
    setTcp(value?: TCPRouter): Endpoint;

    getForwarderCase(): Endpoint.ForwarderCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Endpoint.AsObject;
    static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Endpoint;
    static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
    export type AsObject = {
        name: string,
        hostname: string,
        type: Endpoint.Type,
        http?: HTTPRouter.AsObject,
        tcp?: TCPRouter.AsObject,
    }

    export enum Type {
    DEFAULT = 0,
    INTERNAL = 1,
    }


    export enum ForwarderCase {
        FORWARDER_NOT_SET = 0,
        HTTP = 11,
        TCP = 12,
    }

}

export class AuthProxy extends jspb.Message { 
    getDisabled(): boolean;
    setDisabled(value: boolean): AuthProxy;
    getDisableDefaults(): boolean;
    setDisableDefaults(value: boolean): AuthProxy;
    clearRulesList(): void;
    getRulesList(): Array<AuthProxy.Rule>;
    setRulesList(value: Array<AuthProxy.Rule>): AuthProxy;
    addRules(value?: AuthProxy.Rule, index?: number): AuthProxy.Rule;
    getLogoutPath(): string;
    setLogoutPath(value: string): AuthProxy;
    getMode(): AuthProxy.Mode;
    setMode(value: AuthProxy.Mode): AuthProxy;

    hasPassthrough(): boolean;
    clearPassthrough(): void;
    getPassthrough(): AuthProxy.Passthrough | undefined;
    setPassthrough(value?: AuthProxy.Passthrough): AuthProxy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthProxy.AsObject;
    static toObject(includeInstance: boolean, msg: AuthProxy): AuthProxy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthProxy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthProxy;
    static deserializeBinaryFromReader(message: AuthProxy, reader: jspb.BinaryReader): AuthProxy;
}

export namespace AuthProxy {
    export type AsObject = {
        disabled: boolean,
        disableDefaults: boolean,
        rulesList: Array<AuthProxy.Rule.AsObject>,
        logoutPath: string,
        mode: AuthProxy.Mode,
        passthrough?: AuthProxy.Passthrough.AsObject,
    }


    export class Passthrough extends jspb.Message { 
        getOauthCallbackPath(): string;
        setOauthCallbackPath(value: string): Passthrough;
        clearRequiredHeadersList(): void;
        getRequiredHeadersList(): Array<HTTPRoutingRule.HeaderRegexp>;
        setRequiredHeadersList(value: Array<HTTPRoutingRule.HeaderRegexp>): Passthrough;
        addRequiredHeaders(value?: HTTPRoutingRule.HeaderRegexp, index?: number): HTTPRoutingRule.HeaderRegexp;
        getFallbackToLogin(): boolean;
        setFallbackToLogin(value: boolean): Passthrough;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Passthrough.AsObject;
        static toObject(includeInstance: boolean, msg: Passthrough): Passthrough.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Passthrough, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Passthrough;
        static deserializeBinaryFromReader(message: Passthrough, reader: jspb.BinaryReader): Passthrough;
    }

    export namespace Passthrough {
        export type AsObject = {
            oauthCallbackPath: string,
            requiredHeadersList: Array<HTTPRoutingRule.HeaderRegexp.AsObject>,
            fallbackToLogin: boolean,
        }
    }

    export class Rule extends jspb.Message { 
        getAction(): AuthProxy.Action;
        setAction(value: AuthProxy.Action): Rule;

        hasPattern(): boolean;
        clearPattern(): void;
        getPattern(): string;
        setPattern(value: string): Rule;

        hasRegexp(): boolean;
        clearRegexp(): void;
        getRegexp(): string;
        setRegexp(value: string): Rule;

        getMatcherCase(): Rule.MatcherCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Rule.AsObject;
        static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Rule;
        static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
    }

    export namespace Rule {
        export type AsObject = {
            action: AuthProxy.Action,
            pattern: string,
            regexp: string,
        }

        export enum MatcherCase {
            MATCHER_NOT_SET = 0,
            PATTERN = 2,
            REGEXP = 3,
        }

    }


    export enum Mode {
    DEFAULT = 0,
    PASSTHROUGH = 1,
    }

    export enum Action {
    NONE = 0,
    ACCEPT = 1,
    REJECT = 2,
    }

}
