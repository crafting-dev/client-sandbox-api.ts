// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_loginprovider.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";

export class LoginProvider extends jspb.Message { 

    hasProvider(): boolean;
    clearProvider(): void;
    getProvider(): LoginProvider.Provider | undefined;
    setProvider(value?: LoginProvider.Provider): LoginProvider;

    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): LoginProvider.Policy | undefined;
    setPolicy(value?: LoginProvider.Policy): LoginProvider;

    hasState(): boolean;
    clearState(): void;
    getState(): LoginProvider.State | undefined;
    setState(value?: LoginProvider.State): LoginProvider;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginProvider.AsObject;
    static toObject(includeInstance: boolean, msg: LoginProvider): LoginProvider.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginProvider, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginProvider;
    static deserializeBinaryFromReader(message: LoginProvider, reader: jspb.BinaryReader): LoginProvider;
}

export namespace LoginProvider {
    export type AsObject = {
        provider?: LoginProvider.Provider.AsObject,
        policy?: LoginProvider.Policy.AsObject,
        state?: LoginProvider.State.AsObject,
    }


    export class OAuth2 extends jspb.Message { 
        getClientId(): string;
        setClientId(value: string): OAuth2;
        getClientSecret(): string;
        setClientSecret(value: string): OAuth2;
        getAuthUrl(): string;
        setAuthUrl(value: string): OAuth2;
        getTokenUrl(): string;
        setTokenUrl(value: string): OAuth2;
        getAuthStyle(): LoginProvider.OAuth2.AuthStyle;
        setAuthStyle(value: LoginProvider.OAuth2.AuthStyle): OAuth2;
        clearScopesList(): void;
        getScopesList(): Array<string>;
        setScopesList(value: Array<string>): OAuth2;
        addScopes(value: string, index?: number): string;

        hasPkce(): boolean;
        clearPkce(): void;
        getPkce(): LoginProvider.OAuth2.PKCE | undefined;
        setPkce(value?: LoginProvider.OAuth2.PKCE): OAuth2;

        hasCallback(): boolean;
        clearCallback(): void;
        getCallback(): LoginProvider.OAuth2.Callback | undefined;
        setCallback(value?: LoginProvider.OAuth2.Callback): OAuth2;
        getAccessType(): LoginProvider.OAuth2.AccessType;
        setAccessType(value: LoginProvider.OAuth2.AccessType): OAuth2;
        clearParamsList(): void;
        getParamsList(): Array<string>;
        setParamsList(value: Array<string>): OAuth2;
        addParams(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OAuth2.AsObject;
        static toObject(includeInstance: boolean, msg: OAuth2): OAuth2.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OAuth2, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OAuth2;
        static deserializeBinaryFromReader(message: OAuth2, reader: jspb.BinaryReader): OAuth2;
    }

    export namespace OAuth2 {
        export type AsObject = {
            clientId: string,
            clientSecret: string,
            authUrl: string,
            tokenUrl: string,
            authStyle: LoginProvider.OAuth2.AuthStyle,
            scopesList: Array<string>,
            pkce?: LoginProvider.OAuth2.PKCE.AsObject,
            callback?: LoginProvider.OAuth2.Callback.AsObject,
            accessType: LoginProvider.OAuth2.AccessType,
            paramsList: Array<string>,
        }


        export class PKCE extends jspb.Message { 
            getMethod(): LoginProvider.OAuth2.PKCE.Method;
            setMethod(value: LoginProvider.OAuth2.PKCE.Method): PKCE;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PKCE.AsObject;
            static toObject(includeInstance: boolean, msg: PKCE): PKCE.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PKCE, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PKCE;
            static deserializeBinaryFromReader(message: PKCE, reader: jspb.BinaryReader): PKCE;
        }

        export namespace PKCE {
            export type AsObject = {
                method: LoginProvider.OAuth2.PKCE.Method,
            }

            export enum Method {
    NONE = 0,
    S256 = 1,
            }

        }

        export class Callback extends jspb.Message { 
            getHost(): string;
            setHost(value: string): Callback;
            getRestrictPort(): boolean;
            setRestrictPort(value: boolean): Callback;
            getPath(): string;
            setPath(value: string): Callback;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Callback.AsObject;
            static toObject(includeInstance: boolean, msg: Callback): Callback.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Callback, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Callback;
            static deserializeBinaryFromReader(message: Callback, reader: jspb.BinaryReader): Callback;
        }

        export namespace Callback {
            export type AsObject = {
                host: string,
                restrictPort: boolean,
                path: string,
            }
        }


        export enum AuthStyle {
    AUTO = 0,
    PARAMS = 1,
    HEADER = 2,
        }

        export enum AccessType {
    UNSPECIFIED = 0,
    ONLINE = 1,
    OFFLINE = 2,
        }

    }

    export class OAuthRelay extends jspb.Message { 
        getProviderName(): string;
        setProviderName(value: string): OAuthRelay;
        clearScopesList(): void;
        getScopesList(): Array<string>;
        setScopesList(value: Array<string>): OAuthRelay;
        addScopes(value: string, index?: number): string;
        getAppendScopes(): boolean;
        setAppendScopes(value: boolean): OAuthRelay;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OAuthRelay.AsObject;
        static toObject(includeInstance: boolean, msg: OAuthRelay): OAuthRelay.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OAuthRelay, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OAuthRelay;
        static deserializeBinaryFromReader(message: OAuthRelay, reader: jspb.BinaryReader): OAuthRelay;
    }

    export namespace OAuthRelay {
        export type AsObject = {
            providerName: string,
            scopesList: Array<string>,
            appendScopes: boolean,
        }
    }

    export class Provider extends jspb.Message { 

        hasOauth2(): boolean;
        clearOauth2(): void;
        getOauth2(): LoginProvider.OAuth2 | undefined;
        setOauth2(value?: LoginProvider.OAuth2): Provider;

        hasOauthRelay(): boolean;
        clearOauthRelay(): void;
        getOauthRelay(): LoginProvider.OAuthRelay | undefined;
        setOauthRelay(value?: LoginProvider.OAuthRelay): Provider;

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
            oauth2?: LoginProvider.OAuth2.AsObject,
            oauthRelay?: LoginProvider.OAuthRelay.AsObject,
        }

        export enum ProviderCase {
            PROVIDER_NOT_SET = 0,
            OAUTH2 = 1,
            OAUTH_RELAY = 2,
        }

    }

    export class Policy extends jspb.Message { 

        hasAutoRefreshToken(): boolean;
        clearAutoRefreshToken(): void;
        getAutoRefreshToken(): LoginProvider.Policy.AutoRefreshToken | undefined;
        setAutoRefreshToken(value?: LoginProvider.Policy.AutoRefreshToken): Policy;

        hasTokenValidity(): boolean;
        clearTokenValidity(): void;
        getTokenValidity(): LoginProvider.Policy.TokenValidity | undefined;
        setTokenValidity(value?: LoginProvider.Policy.TokenValidity): Policy;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Policy.AsObject;
        static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Policy;
        static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
    }

    export namespace Policy {
        export type AsObject = {
            autoRefreshToken?: LoginProvider.Policy.AutoRefreshToken.AsObject,
            tokenValidity?: LoginProvider.Policy.TokenValidity.AsObject,
        }


        export class AutoRefreshToken extends jspb.Message { 
            getEnabled(): boolean;
            setEnabled(value: boolean): AutoRefreshToken;
            getMaxCount(): number;
            setMaxCount(value: number): AutoRefreshToken;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AutoRefreshToken.AsObject;
            static toObject(includeInstance: boolean, msg: AutoRefreshToken): AutoRefreshToken.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AutoRefreshToken, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AutoRefreshToken;
            static deserializeBinaryFromReader(message: AutoRefreshToken, reader: jspb.BinaryReader): AutoRefreshToken;
        }

        export namespace AutoRefreshToken {
            export type AsObject = {
                enabled: boolean,
                maxCount: number,
            }
        }

        export class TokenValidity extends jspb.Message { 

            hasMaxDuration(): boolean;
            clearMaxDuration(): void;
            getMaxDuration(): google_protobuf_duration_pb.Duration | undefined;
            setMaxDuration(value?: google_protobuf_duration_pb.Duration): TokenValidity;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): TokenValidity.AsObject;
            static toObject(includeInstance: boolean, msg: TokenValidity): TokenValidity.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: TokenValidity, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): TokenValidity;
            static deserializeBinaryFromReader(message: TokenValidity, reader: jspb.BinaryReader): TokenValidity;
        }

        export namespace TokenValidity {
            export type AsObject = {
                maxDuration?: google_protobuf_duration_pb.Duration.AsObject,
            }
        }

    }

    export class State extends jspb.Message { 
        getDisabled(): boolean;
        setDisabled(value: boolean): State;

        hasError(): boolean;
        clearError(): void;
        getError(): sandboxes_api_v1_common_pb.Error | undefined;
        setError(value?: sandboxes_api_v1_common_pb.Error): State;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): State.AsObject;
        static toObject(includeInstance: boolean, msg: State): State.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): State;
        static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
    }

    export namespace State {
        export type AsObject = {
            disabled: boolean,
            error?: sandboxes_api_v1_common_pb.Error.AsObject,
        }
    }

}
