// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_connectedinfra.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ConnectedInfra extends jspb.Message { 

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): ConnectedInfra.Auth | undefined;
    setAuth(value?: ConnectedInfra.Auth): ConnectedInfra;

    hasKubernetesCluster(): boolean;
    clearKubernetesCluster(): void;
    getKubernetesCluster(): ConnectedInfra.KubernetesCluster | undefined;
    setKubernetesCluster(value?: ConnectedInfra.KubernetesCluster): ConnectedInfra;

    getInfraCase(): ConnectedInfra.InfraCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectedInfra.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectedInfra): ConnectedInfra.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectedInfra, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectedInfra;
    static deserializeBinaryFromReader(message: ConnectedInfra, reader: jspb.BinaryReader): ConnectedInfra;
}

export namespace ConnectedInfra {
    export type AsObject = {
        auth?: ConnectedInfra.Auth.AsObject,
        kubernetesCluster?: ConnectedInfra.KubernetesCluster.AsObject,
    }


    export class Auth extends jspb.Message { 
        getConnectorPublicKey(): string;
        setConnectorPublicKey(value: string): Auth;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Auth.AsObject;
        static toObject(includeInstance: boolean, msg: Auth): Auth.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Auth, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Auth;
        static deserializeBinaryFromReader(message: Auth, reader: jspb.BinaryReader): Auth;
    }

    export namespace Auth {
        export type AsObject = {
            connectorPublicKey: string,
        }
    }

    export class KubernetesCluster extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KubernetesCluster.AsObject;
        static toObject(includeInstance: boolean, msg: KubernetesCluster): KubernetesCluster.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KubernetesCluster, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KubernetesCluster;
        static deserializeBinaryFromReader(message: KubernetesCluster, reader: jspb.BinaryReader): KubernetesCluster;
    }

    export namespace KubernetesCluster {
        export type AsObject = {
        }
    }


    export enum InfraCase {
        INFRA_NOT_SET = 0,
        KUBERNETES_CLUSTER = 10,
    }

}
