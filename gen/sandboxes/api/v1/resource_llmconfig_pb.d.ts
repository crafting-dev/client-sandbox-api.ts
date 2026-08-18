// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_llmconfig.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_llm_pb from "../../../sandboxes/api/v1/llm_pb";

export class LLMConfig extends jspb.Message { 

    getProvidersMap(): jspb.Map<string, LLMConfig.Provider>;
    clearProvidersMap(): void;
    clearModelsList(): void;
    getModelsList(): Array<LLMConfig.Model>;
    setModelsList(value: Array<LLMConfig.Model>): LLMConfig;
    addModels(value?: LLMConfig.Model, index?: number): LLMConfig.Model;

    hasSessionConfig(): boolean;
    clearSessionConfig(): void;
    getSessionConfig(): LLMConfig.SessionConfig | undefined;
    setSessionConfig(value?: LLMConfig.SessionConfig): LLMConfig;

    hasSandboxConfig(): boolean;
    clearSandboxConfig(): void;
    getSandboxConfig(): LLMConfig.SandboxConfig | undefined;
    setSandboxConfig(value?: LLMConfig.SandboxConfig): LLMConfig;

    hasDiscovery(): boolean;
    clearDiscovery(): void;
    getDiscovery(): LLMConfig.Discovery | undefined;
    setDiscovery(value?: LLMConfig.Discovery): LLMConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LLMConfig.AsObject;
    static toObject(includeInstance: boolean, msg: LLMConfig): LLMConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LLMConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LLMConfig;
    static deserializeBinaryFromReader(message: LLMConfig, reader: jspb.BinaryReader): LLMConfig;
}

export namespace LLMConfig {
    export type AsObject = {

        providersMap: Array<[string, LLMConfig.Provider.AsObject]>,
        modelsList: Array<LLMConfig.Model.AsObject>,
        sessionConfig?: LLMConfig.SessionConfig.AsObject,
        sandboxConfig?: LLMConfig.SandboxConfig.AsObject,
        discovery?: LLMConfig.Discovery.AsObject,
    }


    export class Provider extends jspb.Message { 

        hasOpenai(): boolean;
        clearOpenai(): void;
        getOpenai(): LLMConfig.Provider.OpenAI | undefined;
        setOpenai(value?: LLMConfig.Provider.OpenAI): Provider;

        hasAnthropic(): boolean;
        clearAnthropic(): void;
        getAnthropic(): LLMConfig.Provider.Anthropic | undefined;
        setAnthropic(value?: LLMConfig.Provider.Anthropic): Provider;

        hasGemini(): boolean;
        clearGemini(): void;
        getGemini(): LLMConfig.Provider.Gemini | undefined;
        setGemini(value?: LLMConfig.Provider.Gemini): Provider;

        hasOllama(): boolean;
        clearOllama(): void;
        getOllama(): LLMConfig.Provider.Ollama | undefined;
        setOllama(value?: LLMConfig.Provider.Ollama): Provider;

        hasVertexAi(): boolean;
        clearVertexAi(): void;
        getVertexAi(): LLMConfig.Provider.VertexAI | undefined;
        setVertexAi(value?: LLMConfig.Provider.VertexAI): Provider;

        hasBedrock(): boolean;
        clearBedrock(): void;
        getBedrock(): LLMConfig.Provider.Bedrock | undefined;
        setBedrock(value?: LLMConfig.Provider.Bedrock): Provider;

        getProviderCase(): Provider.ProviderCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Provider.AsObject;
        static toObject(includeInstance: boolean, msg: Provider): Provider.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Provider, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Provider;
        static deserializeBinaryFromReader(message: Provider, reader: jspb.BinaryReader): Provider;
    }

    export namespace Provider {
        export type AsObject = {
            openai?: LLMConfig.Provider.OpenAI.AsObject,
            anthropic?: LLMConfig.Provider.Anthropic.AsObject,
            gemini?: LLMConfig.Provider.Gemini.AsObject,
            ollama?: LLMConfig.Provider.Ollama.AsObject,
            vertexAi?: LLMConfig.Provider.VertexAI.AsObject,
            bedrock?: LLMConfig.Provider.Bedrock.AsObject,
        }


        export class OpenAI extends jspb.Message { 
            getApiKey(): string;
            setApiKey(value: string): OpenAI;
            getBaseUrl(): string;
            setBaseUrl(value: string): OpenAI;
            clearHttpHeadersList(): void;
            getHttpHeadersList(): Array<string>;
            setHttpHeadersList(value: Array<string>): OpenAI;
            addHttpHeaders(value: string, index?: number): string;
            clearHttpQueriesList(): void;
            getHttpQueriesList(): Array<string>;
            setHttpQueriesList(value: Array<string>): OpenAI;
            addHttpQueries(value: string, index?: number): string;
            getApi(): LLMConfig.Provider.OpenAI.APISelect;
            setApi(value: LLMConfig.Provider.OpenAI.APISelect): OpenAI;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): OpenAI.AsObject;
            static toObject(includeInstance: boolean, msg: OpenAI): OpenAI.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: OpenAI, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): OpenAI;
            static deserializeBinaryFromReader(message: OpenAI, reader: jspb.BinaryReader): OpenAI;
        }

        export namespace OpenAI {
            export type AsObject = {
                apiKey: string,
                baseUrl: string,
                httpHeadersList: Array<string>,
                httpQueriesList: Array<string>,
                api: LLMConfig.Provider.OpenAI.APISelect,
            }

            export enum APISelect {
    DEFAULT = 0,
    CHAT_COMPLETIONS = 1,
            }

        }

        export class Anthropic extends jspb.Message { 
            getApiKey(): string;
            setApiKey(value: string): Anthropic;
            getBaseUrl(): string;
            setBaseUrl(value: string): Anthropic;
            clearHttpHeadersList(): void;
            getHttpHeadersList(): Array<string>;
            setHttpHeadersList(value: Array<string>): Anthropic;
            addHttpHeaders(value: string, index?: number): string;
            clearHttpQueriesList(): void;
            getHttpQueriesList(): Array<string>;
            setHttpQueriesList(value: Array<string>): Anthropic;
            addHttpQueries(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Anthropic.AsObject;
            static toObject(includeInstance: boolean, msg: Anthropic): Anthropic.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Anthropic, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Anthropic;
            static deserializeBinaryFromReader(message: Anthropic, reader: jspb.BinaryReader): Anthropic;
        }

        export namespace Anthropic {
            export type AsObject = {
                apiKey: string,
                baseUrl: string,
                httpHeadersList: Array<string>,
                httpQueriesList: Array<string>,
            }
        }

        export class Gemini extends jspb.Message { 
            getApiKey(): string;
            setApiKey(value: string): Gemini;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Gemini.AsObject;
            static toObject(includeInstance: boolean, msg: Gemini): Gemini.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Gemini, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Gemini;
            static deserializeBinaryFromReader(message: Gemini, reader: jspb.BinaryReader): Gemini;
        }

        export namespace Gemini {
            export type AsObject = {
                apiKey: string,
            }
        }

        export class VertexAI extends jspb.Message { 
            getProject(): string;
            setProject(value: string): VertexAI;
            getLocation(): string;
            setLocation(value: string): VertexAI;

            hasIdentityFederation(): boolean;
            clearIdentityFederation(): void;
            getIdentityFederation(): LLMConfig.Provider.VertexAI.IdentityFederation | undefined;
            setIdentityFederation(value?: LLMConfig.Provider.VertexAI.IdentityFederation): VertexAI;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): VertexAI.AsObject;
            static toObject(includeInstance: boolean, msg: VertexAI): VertexAI.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: VertexAI, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): VertexAI;
            static deserializeBinaryFromReader(message: VertexAI, reader: jspb.BinaryReader): VertexAI;
        }

        export namespace VertexAI {
            export type AsObject = {
                project: string,
                location: string,
                identityFederation?: LLMConfig.Provider.VertexAI.IdentityFederation.AsObject,
            }


            export class IdentityFederation extends jspb.Message { 
                getEnabled(): boolean;
                setEnabled(value: boolean): IdentityFederation;
                getAudience(): string;
                setAudience(value: string): IdentityFederation;
                getTokenUrl(): string;
                setTokenUrl(value: string): IdentityFederation;
                getServiceAccountImpersonationUrl(): string;
                setServiceAccountImpersonationUrl(value: string): IdentityFederation;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): IdentityFederation.AsObject;
                static toObject(includeInstance: boolean, msg: IdentityFederation): IdentityFederation.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: IdentityFederation, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): IdentityFederation;
                static deserializeBinaryFromReader(message: IdentityFederation, reader: jspb.BinaryReader): IdentityFederation;
            }

            export namespace IdentityFederation {
                export type AsObject = {
                    enabled: boolean,
                    audience: string,
                    tokenUrl: string,
                    serviceAccountImpersonationUrl: string,
                }
            }

        }

        export class Bedrock extends jspb.Message { 
            getRegion(): string;
            setRegion(value: string): Bedrock;

            hasIdentityFederation(): boolean;
            clearIdentityFederation(): void;
            getIdentityFederation(): LLMConfig.Provider.Bedrock.IdentityFederation | undefined;
            setIdentityFederation(value?: LLMConfig.Provider.Bedrock.IdentityFederation): Bedrock;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Bedrock.AsObject;
            static toObject(includeInstance: boolean, msg: Bedrock): Bedrock.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Bedrock, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Bedrock;
            static deserializeBinaryFromReader(message: Bedrock, reader: jspb.BinaryReader): Bedrock;
        }

        export namespace Bedrock {
            export type AsObject = {
                region: string,
                identityFederation?: LLMConfig.Provider.Bedrock.IdentityFederation.AsObject,
            }


            export class IdentityFederation extends jspb.Message { 
                getEnabled(): boolean;
                setEnabled(value: boolean): IdentityFederation;
                getRoleArn(): string;
                setRoleArn(value: string): IdentityFederation;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): IdentityFederation.AsObject;
                static toObject(includeInstance: boolean, msg: IdentityFederation): IdentityFederation.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: IdentityFederation, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): IdentityFederation;
                static deserializeBinaryFromReader(message: IdentityFederation, reader: jspb.BinaryReader): IdentityFederation;
            }

            export namespace IdentityFederation {
                export type AsObject = {
                    enabled: boolean,
                    roleArn: string,
                }
            }

        }

        export class Ollama extends jspb.Message { 
            getBaseUrl(): string;
            setBaseUrl(value: string): Ollama;
            clearHttpHeadersList(): void;
            getHttpHeadersList(): Array<string>;
            setHttpHeadersList(value: Array<string>): Ollama;
            addHttpHeaders(value: string, index?: number): string;
            clearHttpQueriesList(): void;
            getHttpQueriesList(): Array<string>;
            setHttpQueriesList(value: Array<string>): Ollama;
            addHttpQueries(value: string, index?: number): string;
            getApiKey(): string;
            setApiKey(value: string): Ollama;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Ollama.AsObject;
            static toObject(includeInstance: boolean, msg: Ollama): Ollama.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Ollama, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Ollama;
            static deserializeBinaryFromReader(message: Ollama, reader: jspb.BinaryReader): Ollama;
        }

        export namespace Ollama {
            export type AsObject = {
                baseUrl: string,
                httpHeadersList: Array<string>,
                httpQueriesList: Array<string>,
                apiKey: string,
            }
        }


        export enum ProviderCase {
            PROVIDER_NOT_SET = 0,
            OPENAI = 1,
            ANTHROPIC = 2,
            GEMINI = 3,
            OLLAMA = 4,
            VERTEX_AI = 5,
            BEDROCK = 6,
        }

    }

    export class Model extends jspb.Message { 
        getProvider(): string;
        setProvider(value: string): Model;
        getName(): string;
        setName(value: string): Model;
        clearPurposesList(): void;
        getPurposesList(): Array<LLMConfig.Model.Purpose>;
        setPurposesList(value: Array<LLMConfig.Model.Purpose>): Model;
        addPurposes(value: LLMConfig.Model.Purpose, index?: number): LLMConfig.Model.Purpose;

        hasDialect(): boolean;
        clearDialect(): void;
        getDialect(): LLMConfig.Model.Dialect | undefined;
        setDialect(value?: LLMConfig.Model.Dialect): Model;
        clearAliasesList(): void;
        getAliasesList(): Array<string>;
        setAliasesList(value: Array<string>): Model;
        addAliases(value: string, index?: number): string;

        hasProperties(): boolean;
        clearProperties(): void;
        getProperties(): LLMConfig.Model.Properties | undefined;
        setProperties(value?: LLMConfig.Model.Properties): Model;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Model.AsObject;
        static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Model;
        static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
    }

    export namespace Model {
        export type AsObject = {
            provider: string,
            name: string,
            purposesList: Array<LLMConfig.Model.Purpose>,
            dialect?: LLMConfig.Model.Dialect.AsObject,
            aliasesList: Array<string>,
            properties?: LLMConfig.Model.Properties.AsObject,
        }


        export class Dialect extends jspb.Message { 
            getSource(): string;
            setSource(value: string): Dialect;
            getModelClass(): string;
            setModelClass(value: string): Dialect;
            getSubClass(): string;
            setSubClass(value: string): Dialect;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Dialect.AsObject;
            static toObject(includeInstance: boolean, msg: Dialect): Dialect.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Dialect, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Dialect;
            static deserializeBinaryFromReader(message: Dialect, reader: jspb.BinaryReader): Dialect;
        }

        export namespace Dialect {
            export type AsObject = {
                source: string,
                modelClass: string,
                subClass: string,
            }
        }

        export class Properties extends jspb.Message { 
            getContextWindowLimit(): number;
            setContextWindowLimit(value: number): Properties;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Properties.AsObject;
            static toObject(includeInstance: boolean, msg: Properties): Properties.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Properties, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Properties;
            static deserializeBinaryFromReader(message: Properties, reader: jspb.BinaryReader): Properties;
        }

        export namespace Properties {
            export type AsObject = {
                contextWindowLimit: number,
            }
        }


        export enum Purpose {
    GENERIC = 0,
    FAST = 1,
    CODING = 2,
    CODING_FIM = 3,
    CODING_NES = 4,
        }

    }

    export class SessionConfig extends jspb.Message { 

        hasRetention(): boolean;
        clearRetention(): void;
        getRetention(): google_protobuf_duration_pb.Duration | undefined;
        setRetention(value?: google_protobuf_duration_pb.Duration): SessionConfig;

        hasAutoArchive(): boolean;
        clearAutoArchive(): void;
        getAutoArchive(): google_protobuf_duration_pb.Duration | undefined;
        setAutoArchive(value?: google_protobuf_duration_pb.Duration): SessionConfig;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SessionConfig.AsObject;
        static toObject(includeInstance: boolean, msg: SessionConfig): SessionConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SessionConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SessionConfig;
        static deserializeBinaryFromReader(message: SessionConfig, reader: jspb.BinaryReader): SessionConfig;
    }

    export namespace SessionConfig {
        export type AsObject = {
            retention?: google_protobuf_duration_pb.Duration.AsObject,
            autoArchive?: google_protobuf_duration_pb.Duration.AsObject,
        }
    }

    export class SandboxConfig extends jspb.Message { 

        hasClients(): boolean;
        clearClients(): void;
        getClients(): LLMConfig.SandboxConfig.Clients | undefined;
        setClients(value?: LLMConfig.SandboxConfig.Clients): SandboxConfig;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SandboxConfig.AsObject;
        static toObject(includeInstance: boolean, msg: SandboxConfig): SandboxConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SandboxConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SandboxConfig;
        static deserializeBinaryFromReader(message: SandboxConfig, reader: jspb.BinaryReader): SandboxConfig;
    }

    export namespace SandboxConfig {
        export type AsObject = {
            clients?: LLMConfig.SandboxConfig.Clients.AsObject,
        }


        export class Clients extends jspb.Message { 

            hasAnthropic(): boolean;
            clearAnthropic(): void;
            getAnthropic(): LLMConfig.SandboxConfig.Clients.Anthropic | undefined;
            setAnthropic(value?: LLMConfig.SandboxConfig.Clients.Anthropic): Clients;

            hasGemini(): boolean;
            clearGemini(): void;
            getGemini(): LLMConfig.SandboxConfig.Clients.Gemini | undefined;
            setGemini(value?: LLMConfig.SandboxConfig.Clients.Gemini): Clients;

            hasOpenai(): boolean;
            clearOpenai(): void;
            getOpenai(): LLMConfig.SandboxConfig.Clients.OpenAI | undefined;
            setOpenai(value?: LLMConfig.SandboxConfig.Clients.OpenAI): Clients;

            hasOllama(): boolean;
            clearOllama(): void;
            getOllama(): LLMConfig.SandboxConfig.Clients.Ollama | undefined;
            setOllama(value?: LLMConfig.SandboxConfig.Clients.Ollama): Clients;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Clients.AsObject;
            static toObject(includeInstance: boolean, msg: Clients): Clients.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Clients, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Clients;
            static deserializeBinaryFromReader(message: Clients, reader: jspb.BinaryReader): Clients;
        }

        export namespace Clients {
            export type AsObject = {
                anthropic?: LLMConfig.SandboxConfig.Clients.Anthropic.AsObject,
                gemini?: LLMConfig.SandboxConfig.Clients.Gemini.AsObject,
                openai?: LLMConfig.SandboxConfig.Clients.OpenAI.AsObject,
                ollama?: LLMConfig.SandboxConfig.Clients.Ollama.AsObject,
            }


            export class Anthropic extends jspb.Message { 
                getProvider(): string;
                setProvider(value: string): Anthropic;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Anthropic.AsObject;
                static toObject(includeInstance: boolean, msg: Anthropic): Anthropic.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Anthropic, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Anthropic;
                static deserializeBinaryFromReader(message: Anthropic, reader: jspb.BinaryReader): Anthropic;
            }

            export namespace Anthropic {
                export type AsObject = {
                    provider: string,
                }
            }

            export class Gemini extends jspb.Message { 
                getProvider(): string;
                setProvider(value: string): Gemini;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Gemini.AsObject;
                static toObject(includeInstance: boolean, msg: Gemini): Gemini.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Gemini, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Gemini;
                static deserializeBinaryFromReader(message: Gemini, reader: jspb.BinaryReader): Gemini;
            }

            export namespace Gemini {
                export type AsObject = {
                    provider: string,
                }
            }

            export class OpenAI extends jspb.Message { 
                getProvider(): string;
                setProvider(value: string): OpenAI;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): OpenAI.AsObject;
                static toObject(includeInstance: boolean, msg: OpenAI): OpenAI.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: OpenAI, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): OpenAI;
                static deserializeBinaryFromReader(message: OpenAI, reader: jspb.BinaryReader): OpenAI;
            }

            export namespace OpenAI {
                export type AsObject = {
                    provider: string,
                }
            }

            export class Ollama extends jspb.Message { 
                getProvider(): string;
                setProvider(value: string): Ollama;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Ollama.AsObject;
                static toObject(includeInstance: boolean, msg: Ollama): Ollama.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Ollama, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Ollama;
                static deserializeBinaryFromReader(message: Ollama, reader: jspb.BinaryReader): Ollama;
            }

            export namespace Ollama {
                export type AsObject = {
                    provider: string,
                }
            }

        }

    }

    export class Discovery extends jspb.Message { 
        clearGlobalMcpServersList(): void;
        getGlobalMcpServersList(): Array<LLMConfig.Discovery.MCPServer>;
        setGlobalMcpServersList(value: Array<LLMConfig.Discovery.MCPServer>): Discovery;
        addGlobalMcpServers(value?: LLMConfig.Discovery.MCPServer, index?: number): LLMConfig.Discovery.MCPServer;

        hasSandboxAgents(): boolean;
        clearSandboxAgents(): void;
        getSandboxAgents(): LLMConfig.Discovery.SandboxAgents | undefined;
        setSandboxAgents(value?: LLMConfig.Discovery.SandboxAgents): Discovery;

        getNamedMcpServersMap(): jspb.Map<string, LLMConfig.Discovery.MCPServer>;
        clearNamedMcpServersMap(): void;

        hasMcpServerPolicy(): boolean;
        clearMcpServerPolicy(): void;
        getMcpServerPolicy(): LLMConfig.Discovery.MCPServerPolicy | undefined;
        setMcpServerPolicy(value?: LLMConfig.Discovery.MCPServerPolicy): Discovery;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Discovery.AsObject;
        static toObject(includeInstance: boolean, msg: Discovery): Discovery.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Discovery, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Discovery;
        static deserializeBinaryFromReader(message: Discovery, reader: jspb.BinaryReader): Discovery;
    }

    export namespace Discovery {
        export type AsObject = {
            globalMcpServersList: Array<LLMConfig.Discovery.MCPServer.AsObject>,
            sandboxAgents?: LLMConfig.Discovery.SandboxAgents.AsObject,

            namedMcpServersMap: Array<[string, LLMConfig.Discovery.MCPServer.AsObject]>,
            mcpServerPolicy?: LLMConfig.Discovery.MCPServerPolicy.AsObject,
        }


        export class MCPServer extends jspb.Message { 

            hasSandbox(): boolean;
            clearSandbox(): void;
            getSandbox(): string;
            setSandbox(value: string): MCPServer;

            hasExternal(): boolean;
            clearExternal(): void;
            getExternal(): LLMConfig.Discovery.MCPServer.External | undefined;
            setExternal(value?: LLMConfig.Discovery.MCPServer.External): MCPServer;

            hasRef(): boolean;
            clearRef(): void;
            getRef(): string;
            setRef(value: string): MCPServer;

            hasToolCallPolicy(): boolean;
            clearToolCallPolicy(): void;
            getToolCallPolicy(): sandboxes_api_v1_llm_pb.LLM.ToolCallPolicy | undefined;
            setToolCallPolicy(value?: sandboxes_api_v1_llm_pb.LLM.ToolCallPolicy): MCPServer;

            getSourceCase(): MCPServer.SourceCase;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): MCPServer.AsObject;
            static toObject(includeInstance: boolean, msg: MCPServer): MCPServer.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: MCPServer, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): MCPServer;
            static deserializeBinaryFromReader(message: MCPServer, reader: jspb.BinaryReader): MCPServer;
        }

        export namespace MCPServer {
            export type AsObject = {
                sandbox: string,
                external?: LLMConfig.Discovery.MCPServer.External.AsObject,
                ref: string,
                toolCallPolicy?: sandboxes_api_v1_llm_pb.LLM.ToolCallPolicy.AsObject,
            }


            export class External extends jspb.Message { 
                getUrl(): string;
                setUrl(value: string): External;
                getProtocol(): sandboxes_api_v1_app_pb.AppDefinition.Customization.MCPServer.Protocol;
                setProtocol(value: sandboxes_api_v1_app_pb.AppDefinition.Customization.MCPServer.Protocol): External;

                hasAuth(): boolean;
                clearAuth(): void;
                getAuth(): sandboxes_api_v1_app_pb.AppDefinition.Customization.MCPServer.Auth | undefined;
                setAuth(value?: sandboxes_api_v1_app_pb.AppDefinition.Customization.MCPServer.Auth): External;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): External.AsObject;
                static toObject(includeInstance: boolean, msg: External): External.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: External, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): External;
                static deserializeBinaryFromReader(message: External, reader: jspb.BinaryReader): External;
            }

            export namespace External {
                export type AsObject = {
                    url: string,
                    protocol: sandboxes_api_v1_app_pb.AppDefinition.Customization.MCPServer.Protocol,
                    auth?: sandboxes_api_v1_app_pb.AppDefinition.Customization.MCPServer.Auth.AsObject,
                }
            }


            export enum SourceCase {
                SOURCE_NOT_SET = 0,
                SANDBOX = 1,
                EXTERNAL = 2,
                REF = 3,
            }

        }

        export class SandboxAgents extends jspb.Message { 
            clearTemplatesList(): void;
            getTemplatesList(): Array<LLMConfig.Discovery.SandboxAgents.TemplateFilter>;
            setTemplatesList(value: Array<LLMConfig.Discovery.SandboxAgents.TemplateFilter>): SandboxAgents;
            addTemplates(value?: LLMConfig.Discovery.SandboxAgents.TemplateFilter, index?: number): LLMConfig.Discovery.SandboxAgents.TemplateFilter;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SandboxAgents.AsObject;
            static toObject(includeInstance: boolean, msg: SandboxAgents): SandboxAgents.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: SandboxAgents, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SandboxAgents;
            static deserializeBinaryFromReader(message: SandboxAgents, reader: jspb.BinaryReader): SandboxAgents;
        }

        export namespace SandboxAgents {
            export type AsObject = {
                templatesList: Array<LLMConfig.Discovery.SandboxAgents.TemplateFilter.AsObject>,
            }


            export class TemplateFilter extends jspb.Message { 

                hasName(): boolean;
                clearName(): void;
                getName(): sandboxes_api_v1_common_pb.SimpleNameMatcher | undefined;
                setName(value?: sandboxes_api_v1_common_pb.SimpleNameMatcher): TemplateFilter;
                getAction(): LLMConfig.Discovery.SandboxAgents.TemplateFilter.Action;
                setAction(value: LLMConfig.Discovery.SandboxAgents.TemplateFilter.Action): TemplateFilter;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): TemplateFilter.AsObject;
                static toObject(includeInstance: boolean, msg: TemplateFilter): TemplateFilter.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: TemplateFilter, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): TemplateFilter;
                static deserializeBinaryFromReader(message: TemplateFilter, reader: jspb.BinaryReader): TemplateFilter;
            }

            export namespace TemplateFilter {
                export type AsObject = {
                    name?: sandboxes_api_v1_common_pb.SimpleNameMatcher.AsObject,
                    action: LLMConfig.Discovery.SandboxAgents.TemplateFilter.Action,
                }

                export enum Action {
    NONE = 0,
    ALLOW = 1,
    DENY = 2,
                }

            }

        }

        export class MCPServerPolicy extends jspb.Message { 
            getAllowCustomMcpServers(): boolean;
            setAllowCustomMcpServers(value: boolean): MCPServerPolicy;
            clearBlockedMcpServersList(): void;
            getBlockedMcpServersList(): Array<LLMConfig.Discovery.MCPServerPolicy.Matcher>;
            setBlockedMcpServersList(value: Array<LLMConfig.Discovery.MCPServerPolicy.Matcher>): MCPServerPolicy;
            addBlockedMcpServers(value?: LLMConfig.Discovery.MCPServerPolicy.Matcher, index?: number): LLMConfig.Discovery.MCPServerPolicy.Matcher;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): MCPServerPolicy.AsObject;
            static toObject(includeInstance: boolean, msg: MCPServerPolicy): MCPServerPolicy.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: MCPServerPolicy, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): MCPServerPolicy;
            static deserializeBinaryFromReader(message: MCPServerPolicy, reader: jspb.BinaryReader): MCPServerPolicy;
        }

        export namespace MCPServerPolicy {
            export type AsObject = {
                allowCustomMcpServers: boolean,
                blockedMcpServersList: Array<LLMConfig.Discovery.MCPServerPolicy.Matcher.AsObject>,
            }


            export class Matcher extends jspb.Message { 

                hasUrl(): boolean;
                clearUrl(): void;
                getUrl(): sandboxes_api_v1_common_pb.SimpleNameMatcher | undefined;
                setUrl(value?: sandboxes_api_v1_common_pb.SimpleNameMatcher): Matcher;

                getMatcherCase(): Matcher.MatcherCase;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Matcher.AsObject;
                static toObject(includeInstance: boolean, msg: Matcher): Matcher.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Matcher, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Matcher;
                static deserializeBinaryFromReader(message: Matcher, reader: jspb.BinaryReader): Matcher;
            }

            export namespace Matcher {
                export type AsObject = {
                    url?: sandboxes_api_v1_common_pb.SimpleNameMatcher.AsObject,
                }

                export enum MatcherCase {
                    MATCHER_NOT_SET = 0,
                    URL = 1,
                }

            }

        }

    }

}
