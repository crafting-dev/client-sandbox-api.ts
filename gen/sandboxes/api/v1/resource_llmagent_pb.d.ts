// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_llmagent.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_resource_llmconfig_pb from "../../../sandboxes/api/v1/resource_llmconfig_pb";
import * as sandboxes_api_v1_llm_pb from "../../../sandboxes/api/v1/llm_pb";

export class LLMAgent extends jspb.Message { 
    getBrief(): string;
    setBrief(value: string): LLMAgent;
    getDetails(): string;
    setDetails(value: string): LLMAgent;
    getInstructions(): string;
    setInstructions(value: string): LLMAgent;

    hasExec(): boolean;
    clearExec(): void;
    getExec(): LLMAgent.Exec | undefined;
    setExec(value?: LLMAgent.Exec): LLMAgent;

    hasMcpServers(): boolean;
    clearMcpServers(): void;
    getMcpServers(): LLMAgent.MCPServerSelect | undefined;
    setMcpServers(value?: LLMAgent.MCPServerSelect): LLMAgent;

    hasTools(): boolean;
    clearTools(): void;
    getTools(): LLMAgent.ToolSelect | undefined;
    setTools(value?: LLMAgent.ToolSelect): LLMAgent;

    hasVisibility(): boolean;
    clearVisibility(): void;
    getVisibility(): LLMAgent.Visibility | undefined;
    setVisibility(value?: LLMAgent.Visibility): LLMAgent;
    clearSubAgentsList(): void;
    getSubAgentsList(): Array<LLMAgent.SubAgent>;
    setSubAgentsList(value: Array<LLMAgent.SubAgent>): LLMAgent;
    addSubAgents(value?: LLMAgent.SubAgent, index?: number): LLMAgent.SubAgent;

    hasModelMapping(): boolean;
    clearModelMapping(): void;
    getModelMapping(): sandboxes_api_v1_llm_pb.LLM.ModelMapping | undefined;
    setModelMapping(value?: sandboxes_api_v1_llm_pb.LLM.ModelMapping): LLMAgent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LLMAgent.AsObject;
    static toObject(includeInstance: boolean, msg: LLMAgent): LLMAgent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LLMAgent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LLMAgent;
    static deserializeBinaryFromReader(message: LLMAgent, reader: jspb.BinaryReader): LLMAgent;
}

export namespace LLMAgent {
    export type AsObject = {
        brief: string,
        details: string,
        instructions: string,
        exec?: LLMAgent.Exec.AsObject,
        mcpServers?: LLMAgent.MCPServerSelect.AsObject,
        tools?: LLMAgent.ToolSelect.AsObject,
        visibility?: LLMAgent.Visibility.AsObject,
        subAgentsList: Array<LLMAgent.SubAgent.AsObject>,
        modelMapping?: sandboxes_api_v1_llm_pb.LLM.ModelMapping.AsObject,
    }


    export class Exec extends jspb.Message { 

        hasUseTemplate(): boolean;
        clearUseTemplate(): void;
        getUseTemplate(): LLMAgent.Exec.UseTemplate | undefined;
        setUseTemplate(value?: LLMAgent.Exec.UseTemplate): Exec;

        getMethodCase(): Exec.MethodCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Exec.AsObject;
        static toObject(includeInstance: boolean, msg: Exec): Exec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Exec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Exec;
        static deserializeBinaryFromReader(message: Exec, reader: jspb.BinaryReader): Exec;
    }

    export namespace Exec {
        export type AsObject = {
            useTemplate?: LLMAgent.Exec.UseTemplate.AsObject,
        }


        export class UseTemplate extends jspb.Message { 
            getName(): string;
            setName(value: string): UseTemplate;

            hasExec(): boolean;
            clearExec(): void;
            getExec(): sandboxes_api_v1_app_pb.AppDefinition.Customization.LLMAgent.Exec | undefined;
            setExec(value?: sandboxes_api_v1_app_pb.AppDefinition.Customization.LLMAgent.Exec): UseTemplate;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): UseTemplate.AsObject;
            static toObject(includeInstance: boolean, msg: UseTemplate): UseTemplate.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: UseTemplate, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): UseTemplate;
            static deserializeBinaryFromReader(message: UseTemplate, reader: jspb.BinaryReader): UseTemplate;
        }

        export namespace UseTemplate {
            export type AsObject = {
                name: string,
                exec?: sandboxes_api_v1_app_pb.AppDefinition.Customization.LLMAgent.Exec.AsObject,
            }
        }


        export enum MethodCase {
            METHOD_NOT_SET = 0,
            USE_TEMPLATE = 1,
        }

    }

    export class MCPServerSelect extends jspb.Message { 
        getUseGlobalConfig(): boolean;
        setUseGlobalConfig(value: boolean): MCPServerSelect;
        clearExplicitList(): void;
        getExplicitList(): Array<sandboxes_api_v1_resource_llmconfig_pb.LLMConfig.Discovery.MCPServer>;
        setExplicitList(value: Array<sandboxes_api_v1_resource_llmconfig_pb.LLMConfig.Discovery.MCPServer>): MCPServerSelect;
        addExplicit(value?: sandboxes_api_v1_resource_llmconfig_pb.LLMConfig.Discovery.MCPServer, index?: number): sandboxes_api_v1_resource_llmconfig_pb.LLMConfig.Discovery.MCPServer;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MCPServerSelect.AsObject;
        static toObject(includeInstance: boolean, msg: MCPServerSelect): MCPServerSelect.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MCPServerSelect, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MCPServerSelect;
        static deserializeBinaryFromReader(message: MCPServerSelect, reader: jspb.BinaryReader): MCPServerSelect;
    }

    export namespace MCPServerSelect {
        export type AsObject = {
            useGlobalConfig: boolean,
            explicitList: Array<sandboxes_api_v1_resource_llmconfig_pb.LLMConfig.Discovery.MCPServer.AsObject>,
        }
    }

    export class ToolSelect extends jspb.Message { 
        getSystem(): boolean;
        setSystem(value: boolean): ToolSelect;
        getTransferToWorkspace(): boolean;
        setTransferToWorkspace(value: boolean): ToolSelect;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ToolSelect.AsObject;
        static toObject(includeInstance: boolean, msg: ToolSelect): ToolSelect.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ToolSelect, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ToolSelect;
        static deserializeBinaryFromReader(message: ToolSelect, reader: jspb.BinaryReader): ToolSelect;
    }

    export namespace ToolSelect {
        export type AsObject = {
            system: boolean,
            transferToWorkspace: boolean,
        }
    }

    export class Visibility extends jspb.Message { 
        getDisabled(): boolean;
        setDisabled(value: boolean): Visibility;
        getScope(): LLMAgent.Visibility.Scope;
        setScope(value: LLMAgent.Visibility.Scope): Visibility;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Visibility.AsObject;
        static toObject(includeInstance: boolean, msg: Visibility): Visibility.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Visibility, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Visibility;
        static deserializeBinaryFromReader(message: Visibility, reader: jspb.BinaryReader): Visibility;
    }

    export namespace Visibility {
        export type AsObject = {
            disabled: boolean,
            scope: LLMAgent.Visibility.Scope,
        }

        export enum Scope {
    NORMAL = 0,
    SUB_AGENT = 1,
        }

    }

    export class SubAgent extends jspb.Message { 

        hasCustom(): boolean;
        clearCustom(): void;
        getCustom(): LLMAgent.SubAgent.Custom | undefined;
        setCustom(value?: LLMAgent.SubAgent.Custom): SubAgent;

        hasTemplate(): boolean;
        clearTemplate(): void;
        getTemplate(): LLMAgent.SubAgent.Template | undefined;
        setTemplate(value?: LLMAgent.SubAgent.Template): SubAgent;

        getSourceCase(): SubAgent.SourceCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SubAgent.AsObject;
        static toObject(includeInstance: boolean, msg: SubAgent): SubAgent.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SubAgent, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SubAgent;
        static deserializeBinaryFromReader(message: SubAgent, reader: jspb.BinaryReader): SubAgent;
    }

    export namespace SubAgent {
        export type AsObject = {
            custom?: LLMAgent.SubAgent.Custom.AsObject,
            template?: LLMAgent.SubAgent.Template.AsObject,
        }


        export class Custom extends jspb.Message { 
            getName(): string;
            setName(value: string): Custom;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Custom.AsObject;
            static toObject(includeInstance: boolean, msg: Custom): Custom.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Custom, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Custom;
            static deserializeBinaryFromReader(message: Custom, reader: jspb.BinaryReader): Custom;
        }

        export namespace Custom {
            export type AsObject = {
                name: string,
            }
        }

        export class Template extends jspb.Message { 
            getName(): string;
            setName(value: string): Template;
            getAgent(): string;
            setAgent(value: string): Template;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Template.AsObject;
            static toObject(includeInstance: boolean, msg: Template): Template.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Template, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Template;
            static deserializeBinaryFromReader(message: Template, reader: jspb.BinaryReader): Template;
        }

        export namespace Template {
            export type AsObject = {
                name: string,
                agent: string,
            }
        }


        export enum SourceCase {
            SOURCE_NOT_SET = 0,
            CUSTOM = 1,
            TEMPLATE = 2,
        }

    }

}
