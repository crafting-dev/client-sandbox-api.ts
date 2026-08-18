// package: sandboxes.api.v1
// file: sandboxes/api/v1/llm.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";

export class LLM extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LLM.AsObject;
    static toObject(includeInstance: boolean, msg: LLM): LLM.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LLM, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LLM;
    static deserializeBinaryFromReader(message: LLM, reader: jspb.BinaryReader): LLM;
}

export namespace LLM {
    export type AsObject = {
    }


    export class ToolCallPolicy extends jspb.Message { 
        clearFiltersList(): void;
        getFiltersList(): Array<LLM.ToolCallPolicy.Filter>;
        setFiltersList(value: Array<LLM.ToolCallPolicy.Filter>): ToolCallPolicy;
        addFilters(value?: LLM.ToolCallPolicy.Filter, index?: number): LLM.ToolCallPolicy.Filter;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ToolCallPolicy.AsObject;
        static toObject(includeInstance: boolean, msg: ToolCallPolicy): ToolCallPolicy.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ToolCallPolicy, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ToolCallPolicy;
        static deserializeBinaryFromReader(message: ToolCallPolicy, reader: jspb.BinaryReader): ToolCallPolicy;
    }

    export namespace ToolCallPolicy {
        export type AsObject = {
            filtersList: Array<LLM.ToolCallPolicy.Filter.AsObject>,
        }


        export class Filter extends jspb.Message { 

            hasName(): boolean;
            clearName(): void;
            getName(): sandboxes_api_v1_common_pb.SimpleNameMatcher | undefined;
            setName(value?: sandboxes_api_v1_common_pb.SimpleNameMatcher): Filter;
            getAction(): LLM.ToolCallPolicy.Filter.Action;
            setAction(value: LLM.ToolCallPolicy.Filter.Action): Filter;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Filter.AsObject;
            static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Filter;
            static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
        }

        export namespace Filter {
            export type AsObject = {
                name?: sandboxes_api_v1_common_pb.SimpleNameMatcher.AsObject,
                action: LLM.ToolCallPolicy.Filter.Action,
            }

            export enum Action {
    DEFAULT = 0,
    BLOCK = 1,
            }

        }

    }

    export class ModelMapping extends jspb.Message { 

        getMappingsMap(): jspb.Map<string, string>;
        clearMappingsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ModelMapping.AsObject;
        static toObject(includeInstance: boolean, msg: ModelMapping): ModelMapping.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ModelMapping, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ModelMapping;
        static deserializeBinaryFromReader(message: ModelMapping, reader: jspb.BinaryReader): ModelMapping;
    }

    export namespace ModelMapping {
        export type AsObject = {

            mappingsMap: Array<[string, string]>,
        }
    }

}
