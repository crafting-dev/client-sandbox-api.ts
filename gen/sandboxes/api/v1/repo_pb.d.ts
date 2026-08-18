// package: sandboxes.api.v1
// file: sandboxes/api/v1/repo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Repo extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Repo.AsObject;
    static toObject(includeInstance: boolean, msg: Repo): Repo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Repo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Repo;
    static deserializeBinaryFromReader(message: Repo, reader: jspb.BinaryReader): Repo;
}

export namespace Repo {
    export type AsObject = {
    }


    export class Run extends jspb.Message { 
        getCmd(): string;
        setCmd(value: string): Run;
        getDir(): string;
        setDir(value: string): Run;
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): Run;
        addEnv(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Run.AsObject;
        static toObject(includeInstance: boolean, msg: Run): Run.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Run, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Run;
        static deserializeBinaryFromReader(message: Run, reader: jspb.BinaryReader): Run;
    }

    export namespace Run {
        export type AsObject = {
            cmd: string,
            dir: string,
            envList: Array<string>,
        }
    }

    export class Daemon extends jspb.Message { 

        hasRun(): boolean;
        clearRun(): void;
        getRun(): Repo.Run | undefined;
        setRun(value?: Repo.Run): Daemon;
        getDisableOnStart(): boolean;
        setDisableOnStart(value: boolean): Daemon;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Daemon.AsObject;
        static toObject(includeInstance: boolean, msg: Daemon): Daemon.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Daemon, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Daemon;
        static deserializeBinaryFromReader(message: Daemon, reader: jspb.BinaryReader): Daemon;
    }

    export namespace Daemon {
        export type AsObject = {
            run?: Repo.Run.AsObject,
            disableOnStart: boolean,
        }
    }

    export class Job extends jspb.Message { 

        hasRun(): boolean;
        clearRun(): void;
        getRun(): Repo.Run | undefined;
        setRun(value?: Repo.Run): Job;
        getSchedule(): string;
        setSchedule(value: string): Job;
        getDisableOnStart(): boolean;
        setDisableOnStart(value: boolean): Job;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Job.AsObject;
        static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Job;
        static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
    }

    export namespace Job {
        export type AsObject = {
            run?: Repo.Run.AsObject,
            schedule: string,
            disableOnStart: boolean,
        }
    }

    export class Command extends jspb.Message { 

        hasRun(): boolean;
        clearRun(): void;
        getRun(): Repo.Run | undefined;
        setRun(value?: Repo.Run): Command;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Command.AsObject;
        static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Command;
        static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
    }

    export namespace Command {
        export type AsObject = {
            run?: Repo.Run.AsObject,
        }
    }

    export class Test extends jspb.Message { 

        hasRun(): boolean;
        clearRun(): void;
        getRun(): Repo.Run | undefined;
        setRun(value?: Repo.Run): Test;

        hasResult(): boolean;
        clearResult(): void;
        getResult(): Repo.Test.Result | undefined;
        setResult(value?: Repo.Test.Result): Test;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Test.AsObject;
        static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Test;
        static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
    }

    export namespace Test {
        export type AsObject = {
            run?: Repo.Run.AsObject,
            result?: Repo.Test.Result.AsObject,
        }


        export class Result extends jspb.Message { 
            getFile(): string;
            setFile(value: string): Result;
            getType(): string;
            setType(value: string): Result;
            getBackupPath(): string;
            setBackupPath(value: string): Result;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Result.AsObject;
            static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Result;
            static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
        }

        export namespace Result {
            export type AsObject = {
                file: string,
                type: string,
                backupPath: string,
            }
        }

    }

    export class Manifest extends jspb.Message { 
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): Manifest;
        addEnv(value: string, index?: number): string;

        getHooksMap(): jspb.Map<string, Repo.Run>;
        clearHooksMap(): void;

        getDaemonsMap(): jspb.Map<string, Repo.Daemon>;
        clearDaemonsMap(): void;

        getJobsMap(): jspb.Map<string, Repo.Job>;
        clearJobsMap(): void;

        getCommandsMap(): jspb.Map<string, Repo.Command>;
        clearCommandsMap(): void;

        getTestsMap(): jspb.Map<string, Repo.Test>;
        clearTestsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Manifest.AsObject;
        static toObject(includeInstance: boolean, msg: Manifest): Manifest.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Manifest, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Manifest;
        static deserializeBinaryFromReader(message: Manifest, reader: jspb.BinaryReader): Manifest;
    }

    export namespace Manifest {
        export type AsObject = {
            envList: Array<string>,

            hooksMap: Array<[string, Repo.Run.AsObject]>,

            daemonsMap: Array<[string, Repo.Daemon.AsObject]>,

            jobsMap: Array<[string, Repo.Job.AsObject]>,

            commandsMap: Array<[string, Repo.Command.AsObject]>,

            testsMap: Array<[string, Repo.Test.AsObject]>,
        }
    }

}
