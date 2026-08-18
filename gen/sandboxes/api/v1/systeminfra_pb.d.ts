// package: sandboxes.api.v1
// file: sandboxes/api/v1/systeminfra.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sandboxes_api_v1_systeminfra_gcp_pb from "../../../sandboxes/api/v1/systeminfra_gcp_pb";
import * as sandboxes_api_v1_systeminfra_aws_pb from "../../../sandboxes/api/v1/systeminfra_aws_pb";
import * as sandboxes_api_v1_systeminfra_azure_pb from "../../../sandboxes/api/v1/systeminfra_azure_pb";
import * as sandboxes_api_v1_systeminfra_oci_pb from "../../../sandboxes/api/v1/systeminfra_oci_pb";

export class SystemInfra extends jspb.Message { 

    hasProvider(): boolean;
    clearProvider(): void;
    getProvider(): SystemInfra.Provider | undefined;
    setProvider(value?: SystemInfra.Provider): SystemInfra;
    clearRegionsList(): void;
    getRegionsList(): Array<string>;
    setRegionsList(value: Array<string>): SystemInfra;
    addRegions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemInfra.AsObject;
    static toObject(includeInstance: boolean, msg: SystemInfra): SystemInfra.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemInfra, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemInfra;
    static deserializeBinaryFromReader(message: SystemInfra, reader: jspb.BinaryReader): SystemInfra;
}

export namespace SystemInfra {
    export type AsObject = {
        provider?: SystemInfra.Provider.AsObject,
        regionsList: Array<string>,
    }


    export class Provider extends jspb.Message { 

        hasGcp(): boolean;
        clearGcp(): void;
        getGcp(): sandboxes_api_v1_systeminfra_gcp_pb.GCP.Provider | undefined;
        setGcp(value?: sandboxes_api_v1_systeminfra_gcp_pb.GCP.Provider): Provider;

        hasAws(): boolean;
        clearAws(): void;
        getAws(): sandboxes_api_v1_systeminfra_aws_pb.AWS.Provider | undefined;
        setAws(value?: sandboxes_api_v1_systeminfra_aws_pb.AWS.Provider): Provider;

        hasAzure(): boolean;
        clearAzure(): void;
        getAzure(): sandboxes_api_v1_systeminfra_azure_pb.Azure.Provider | undefined;
        setAzure(value?: sandboxes_api_v1_systeminfra_azure_pb.Azure.Provider): Provider;

        hasOci(): boolean;
        clearOci(): void;
        getOci(): sandboxes_api_v1_systeminfra_oci_pb.OCI.Provider | undefined;
        setOci(value?: sandboxes_api_v1_systeminfra_oci_pb.OCI.Provider): Provider;

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
            gcp?: sandboxes_api_v1_systeminfra_gcp_pb.GCP.Provider.AsObject,
            aws?: sandboxes_api_v1_systeminfra_aws_pb.AWS.Provider.AsObject,
            azure?: sandboxes_api_v1_systeminfra_azure_pb.Azure.Provider.AsObject,
            oci?: sandboxes_api_v1_systeminfra_oci_pb.OCI.Provider.AsObject,
        }

        export enum ProviderCase {
            PROVIDER_NOT_SET = 0,
            GCP = 1,
            AWS = 2,
            AZURE = 3,
            OCI = 4,
        }

    }

}
