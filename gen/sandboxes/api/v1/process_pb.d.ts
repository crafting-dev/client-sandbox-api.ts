// package: sandboxes.api.v1
// file: sandboxes/api/v1/process.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";

export class Process extends jspb.Message { 
    getName(): string;
    setName(value: string): Process;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): Process.Spec | undefined;
    setSpec(value?: Process.Spec): Process;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): Process.Status | undefined;
    setStatus(value?: Process.Status): Process;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Process.AsObject;
    static toObject(includeInstance: boolean, msg: Process): Process.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Process, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Process;
    static deserializeBinaryFromReader(message: Process, reader: jspb.BinaryReader): Process;
}

export namespace Process {
    export type AsObject = {
        name: string,
        spec?: Process.Spec.AsObject,
        status?: Process.Status.AsObject,
    }


    export class Identity extends jspb.Message { 
        getUid(): number;
        setUid(value: number): Identity;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Identity.AsObject;
        static toObject(includeInstance: boolean, msg: Identity): Identity.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Identity, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Identity;
        static deserializeBinaryFromReader(message: Identity, reader: jspb.BinaryReader): Identity;
    }

    export namespace Identity {
        export type AsObject = {
            uid: number,
        }
    }

    export class RestartPolicy extends jspb.Message { 
        getStrategy(): Process.RestartPolicy.Strategy;
        setStrategy(value: Process.RestartPolicy.Strategy): RestartPolicy;

        hasRestartDelay(): boolean;
        clearRestartDelay(): void;
        getRestartDelay(): google_protobuf_duration_pb.Duration | undefined;
        setRestartDelay(value?: google_protobuf_duration_pb.Duration): RestartPolicy;
        getRestartLimit(): number;
        setRestartLimit(value: number): RestartPolicy;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RestartPolicy.AsObject;
        static toObject(includeInstance: boolean, msg: RestartPolicy): RestartPolicy.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RestartPolicy, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RestartPolicy;
        static deserializeBinaryFromReader(message: RestartPolicy, reader: jspb.BinaryReader): RestartPolicy;
    }

    export namespace RestartPolicy {
        export type AsObject = {
            strategy: Process.RestartPolicy.Strategy,
            restartDelay?: google_protobuf_duration_pb.Duration.AsObject,
            restartLimit: number,
        }

        export enum Strategy {
    DEFAULT = 0,
    NEVER = 1,
    FAILED = 2,
        }

    }

    export class Spec extends jspb.Message { 
        clearArgvList(): void;
        getArgvList(): Array<string>;
        setArgvList(value: Array<string>): Spec;
        addArgv(value: string, index?: number): string;
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): Spec;
        addEnv(value: string, index?: number): string;
        getWorkingDir(): string;
        setWorkingDir(value: string): Spec;

        hasIdentity(): boolean;
        clearIdentity(): void;
        getIdentity(): Process.Identity | undefined;
        setIdentity(value?: Process.Identity): Spec;

        hasRestartPolicy(): boolean;
        clearRestartPolicy(): void;
        getRestartPolicy(): Process.RestartPolicy | undefined;
        setRestartPolicy(value?: Process.RestartPolicy): Spec;

        hasStopGracefulPeriod(): boolean;
        clearStopGracefulPeriod(): void;
        getStopGracefulPeriod(): google_protobuf_duration_pb.Duration | undefined;
        setStopGracefulPeriod(value?: google_protobuf_duration_pb.Duration): Spec;
        getSchedule(): string;
        setSchedule(value: string): Spec;
        getEnabled(): boolean;
        setEnabled(value: boolean): Spec;
        getTty(): boolean;
        setTty(value: boolean): Spec;

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
            argvList: Array<string>,
            envList: Array<string>,
            workingDir: string,
            identity?: Process.Identity.AsObject,
            restartPolicy?: Process.RestartPolicy.AsObject,
            stopGracefulPeriod?: google_protobuf_duration_pb.Duration.AsObject,
            schedule: string,
            enabled: boolean,
            tty: boolean,
        }
    }

    export class Status extends jspb.Message { 
        getState(): Process.Status.State;
        setState(value: Process.Status.State): Status;
        getPid(): number;
        setPid(value: number): Status;
        getCwd(): string;
        setCwd(value: string): Status;
        getUid(): number;
        setUid(value: number): Status;
        getGid(): number;
        setGid(value: number): Status;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Status;

        hasLastStartedAt(): boolean;
        clearLastStartedAt(): void;
        getLastStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setLastStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): Status;

        hasLastExitedAt(): boolean;
        clearLastExitedAt(): void;
        getLastExitedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setLastExitedAt(value?: google_protobuf_timestamp_pb.Timestamp): Status;

        hasStartError(): boolean;
        clearStartError(): void;
        getStartError(): sandboxes_api_v1_common_pb.Error | undefined;
        setStartError(value?: sandboxes_api_v1_common_pb.Error): Status;
        getRestartCount(): number;
        setRestartCount(value: number): Status;
        getExitStatus(): number;
        setExitStatus(value: number): Status;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Status.AsObject;
        static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Status;
        static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
    }

    export namespace Status {
        export type AsObject = {
            state: Process.Status.State,
            pid: number,
            cwd: string,
            uid: number,
            gid: number,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            lastStartedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            lastExitedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            startError?: sandboxes_api_v1_common_pb.Error.AsObject,
            restartCount: number,
            exitStatus: number,
        }

        export enum State {
    UNKNOWN = 0,
    RUNNING = 1,
    STOPPED = 2,
        }

    }

}

export class ProcessCtl extends jspb.Message { 
    getName(): string;
    setName(value: string): ProcessCtl;

    hasSignal(): boolean;
    clearSignal(): void;
    getSignal(): ProcessCtl.Signal | undefined;
    setSignal(value?: ProcessCtl.Signal): ProcessCtl;

    hasWindowSize(): boolean;
    clearWindowSize(): void;
    getWindowSize(): ProcessCtl.WindowSize | undefined;
    setWindowSize(value?: ProcessCtl.WindowSize): ProcessCtl;

    getCtlCase(): ProcessCtl.CtlCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessCtl.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessCtl): ProcessCtl.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessCtl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessCtl;
    static deserializeBinaryFromReader(message: ProcessCtl, reader: jspb.BinaryReader): ProcessCtl;
}

export namespace ProcessCtl {
    export type AsObject = {
        name: string,
        signal?: ProcessCtl.Signal.AsObject,
        windowSize?: ProcessCtl.WindowSize.AsObject,
    }


    export class Signal extends jspb.Message { 
        getSignal(): number;
        setSignal(value: number): Signal;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Signal.AsObject;
        static toObject(includeInstance: boolean, msg: Signal): Signal.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Signal, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Signal;
        static deserializeBinaryFromReader(message: Signal, reader: jspb.BinaryReader): Signal;
    }

    export namespace Signal {
        export type AsObject = {
            signal: number,
        }
    }

    export class WindowSize extends jspb.Message { 
        getRows(): number;
        setRows(value: number): WindowSize;
        getCols(): number;
        setCols(value: number): WindowSize;
        getXPixel(): number;
        setXPixel(value: number): WindowSize;
        getYPixel(): number;
        setYPixel(value: number): WindowSize;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WindowSize.AsObject;
        static toObject(includeInstance: boolean, msg: WindowSize): WindowSize.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WindowSize, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WindowSize;
        static deserializeBinaryFromReader(message: WindowSize, reader: jspb.BinaryReader): WindowSize;
    }

    export namespace WindowSize {
        export type AsObject = {
            rows: number,
            cols: number,
            xPixel: number,
            yPixel: number,
        }
    }


    export enum CtlCase {
        CTL_NOT_SET = 0,
        SIGNAL = 2,
        WINDOW_SIZE = 3,
    }

}
