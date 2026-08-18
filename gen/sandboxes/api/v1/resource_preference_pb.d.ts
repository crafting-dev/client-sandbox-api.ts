// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_preference.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";

export class Preference extends jspb.Message { 
    getPersonalSnapshot(): string;
    setPersonalSnapshot(value: string): Preference;
    clearFavouriteAppsList(): void;
    getFavouriteAppsList(): Array<string>;
    setFavouriteAppsList(value: Array<string>): Preference;
    addFavouriteApps(value: string, index?: number): string;
    clearSandboxSetupList(): void;
    getSandboxSetupList(): Array<Preference.SandboxSetup>;
    setSandboxSetupList(value: Array<Preference.SandboxSetup>): Preference;
    addSandboxSetup(value?: Preference.SandboxSetup, index?: number): Preference.SandboxSetup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Preference.AsObject;
    static toObject(includeInstance: boolean, msg: Preference): Preference.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Preference, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Preference;
    static deserializeBinaryFromReader(message: Preference, reader: jspb.BinaryReader): Preference;
}

export namespace Preference {
    export type AsObject = {
        personalSnapshot: string,
        favouriteAppsList: Array<string>,
        sandboxSetupList: Array<Preference.SandboxSetup.AsObject>,
    }


    export class SandboxSetup extends jspb.Message { 
        clearMatchTemplateList(): void;
        getMatchTemplateList(): Array<sandboxes_api_v1_common_pb.SimpleNameMatcher>;
        setMatchTemplateList(value: Array<sandboxes_api_v1_common_pb.SimpleNameMatcher>): SandboxSetup;
        addMatchTemplate(value?: sandboxes_api_v1_common_pb.SimpleNameMatcher, index?: number): sandboxes_api_v1_common_pb.SimpleNameMatcher;
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): SandboxSetup;
        addEnv(value: string, index?: number): string;
        clearFilesList(): void;
        getFilesList(): Array<sandboxes_api_v1_app_pb.SetupFile>;
        setFilesList(value: Array<sandboxes_api_v1_app_pb.SetupFile>): SandboxSetup;
        addFiles(value?: sandboxes_api_v1_app_pb.SetupFile, index?: number): sandboxes_api_v1_app_pb.SetupFile;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SandboxSetup.AsObject;
        static toObject(includeInstance: boolean, msg: SandboxSetup): SandboxSetup.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SandboxSetup, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SandboxSetup;
        static deserializeBinaryFromReader(message: SandboxSetup, reader: jspb.BinaryReader): SandboxSetup;
    }

    export namespace SandboxSetup {
        export type AsObject = {
            matchTemplateList: Array<sandboxes_api_v1_common_pb.SimpleNameMatcher.AsObject>,
            envList: Array<string>,
            filesList: Array<sandboxes_api_v1_app_pb.SetupFile.AsObject>,
        }
    }

}
