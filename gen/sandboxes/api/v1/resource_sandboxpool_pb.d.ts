// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_sandboxpool.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";

export class SandboxPool extends jspb.Message { 

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): SandboxPool.Spec | undefined;
    setSpec(value?: SandboxPool.Spec): SandboxPool;
    clearInstancesList(): void;
    getInstancesList(): Array<SandboxPool.Instance>;
    setInstancesList(value: Array<SandboxPool.Instance>): SandboxPool;
    addInstances(value?: SandboxPool.Instance, index?: number): SandboxPool.Instance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SandboxPool.AsObject;
    static toObject(includeInstance: boolean, msg: SandboxPool): SandboxPool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SandboxPool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SandboxPool;
    static deserializeBinaryFromReader(message: SandboxPool, reader: jspb.BinaryReader): SandboxPool;
}

export namespace SandboxPool {
    export type AsObject = {
        spec?: SandboxPool.Spec.AsObject,
        instancesList: Array<SandboxPool.Instance.AsObject>,
    }


    export class SandboxCreation extends jspb.Message { 
        getOwner(): string;
        setOwner(value: string): SandboxCreation;
        getFolderId(): string;
        setFolderId(value: string): SandboxCreation;
        getTemplateId(): string;
        setTemplateId(value: string): SandboxCreation;
        getRegion(): string;
        setRegion(value: string): SandboxCreation;

        hasTimeout(): boolean;
        clearTimeout(): void;
        getTimeout(): google_protobuf_duration_pb.Duration | undefined;
        setTimeout(value?: google_protobuf_duration_pb.Duration): SandboxCreation;
        getDisableStandby(): boolean;
        setDisableStandby(value: boolean): SandboxCreation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SandboxCreation.AsObject;
        static toObject(includeInstance: boolean, msg: SandboxCreation): SandboxCreation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SandboxCreation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SandboxCreation;
        static deserializeBinaryFromReader(message: SandboxCreation, reader: jspb.BinaryReader): SandboxCreation;
    }

    export namespace SandboxCreation {
        export type AsObject = {
            owner: string,
            folderId: string,
            templateId: string,
            region: string,
            timeout?: google_protobuf_duration_pb.Duration.AsObject,
            disableStandby: boolean,
        }
    }

    export class ClaimSettings extends jspb.Message { 

        hasAccessControl(): boolean;
        clearAccessControl(): void;
        getAccessControl(): sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl | undefined;
        setAccessControl(value?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl): ClaimSettings;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ClaimSettings.AsObject;
        static toObject(includeInstance: boolean, msg: ClaimSettings): ClaimSettings.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ClaimSettings, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ClaimSettings;
        static deserializeBinaryFromReader(message: ClaimSettings, reader: jspb.BinaryReader): ClaimSettings;
    }

    export namespace ClaimSettings {
        export type AsObject = {
            accessControl?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.AsObject,
        }
    }

    export class Rule extends jspb.Message { 

        hasWeeklyTimeWindow(): boolean;
        clearWeeklyTimeWindow(): void;
        getWeeklyTimeWindow(): sandboxes_api_v1_common_pb.WeeklyTimeWindow | undefined;
        setWeeklyTimeWindow(value?: sandboxes_api_v1_common_pb.WeeklyTimeWindow): Rule;
        getMin(): number;
        setMin(value: number): Rule;
        getMax(): number;
        setMax(value: number): Rule;

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
            weeklyTimeWindow?: sandboxes_api_v1_common_pb.WeeklyTimeWindow.AsObject,
            min: number,
            max: number,
        }
    }

    export class Spec extends jspb.Message { 

        hasSandbox(): boolean;
        clearSandbox(): void;
        getSandbox(): SandboxPool.SandboxCreation | undefined;
        setSandbox(value?: SandboxPool.SandboxCreation): Spec;
        getDisabled(): boolean;
        setDisabled(value: boolean): Spec;
        getDisableNote(): string;
        setDisableNote(value: string): Spec;
        getMin(): number;
        setMin(value: number): Spec;
        getMax(): number;
        setMax(value: number): Spec;

        hasRetention(): boolean;
        clearRetention(): void;
        getRetention(): google_protobuf_duration_pb.Duration | undefined;
        setRetention(value?: google_protobuf_duration_pb.Duration): Spec;
        clearRulesList(): void;
        getRulesList(): Array<SandboxPool.Rule>;
        setRulesList(value: Array<SandboxPool.Rule>): Spec;
        addRules(value?: SandboxPool.Rule, index?: number): SandboxPool.Rule;

        hasOnClaim(): boolean;
        clearOnClaim(): void;
        getOnClaim(): SandboxPool.ClaimSettings | undefined;
        setOnClaim(value?: SandboxPool.ClaimSettings): Spec;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Spec.AsObject;
        static toObject(includeInstance: boolean, msg: Spec): Spec.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Spec, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Spec;
        static deserializeBinaryFromReader(message: Spec, reader: jspb.BinaryReader): Spec;
    }

    export namespace Spec {
        export type AsObject = {
            sandbox?: SandboxPool.SandboxCreation.AsObject,
            disabled: boolean,
            disableNote: string,
            min: number,
            max: number,
            retention?: google_protobuf_duration_pb.Duration.AsObject,
            rulesList: Array<SandboxPool.Rule.AsObject>,
            onClaim?: SandboxPool.ClaimSettings.AsObject,
        }
    }

    export class Instance extends jspb.Message { 
        getName(): string;
        setName(value: string): Instance;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Instance;
        getStage(): SandboxPool.Instance.Stage;
        setStage(value: SandboxPool.Instance.Stage): Instance;

        hasStatus(): boolean;
        clearStatus(): void;
        getStatus(): sandboxes_api_v1_common_pb.RuntimeStatus | undefined;
        setStatus(value?: sandboxes_api_v1_common_pb.RuntimeStatus): Instance;
        getSandboxId(): string;
        setSandboxId(value: string): Instance;
        getSandboxFolderId(): string;
        setSandboxFolderId(value: string): Instance;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Instance.AsObject;
        static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Instance;
        static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
    }

    export namespace Instance {
        export type AsObject = {
            name: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            stage: SandboxPool.Instance.Stage,
            status?: sandboxes_api_v1_common_pb.RuntimeStatus.AsObject,
            sandboxId: string,
            sandboxFolderId: string,
        }

        export enum Stage {
    DEFAULT = 0,
    DELETING = 1,
        }

    }

}
