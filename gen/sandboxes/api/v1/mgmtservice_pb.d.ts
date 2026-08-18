// package: sandboxes.api.v1
// file: sandboxes/api/v1/mgmtservice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_app_pb from "../../../sandboxes/api/v1/app_pb";
import * as sandboxes_api_v1_job_pb from "../../../sandboxes/api/v1/job_pb";
import * as sandboxes_api_v1_org_pb from "../../../sandboxes/api/v1/org_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_resource_pb from "../../../sandboxes/api/v1/resource_pb";
import * as sandboxes_api_v1_resource_logintoken_pb from "../../../sandboxes/api/v1/resource_logintoken_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";
import * as sandboxes_api_v1_secret_pb from "../../../sandboxes/api/v1/secret_pb";
import * as sandboxes_api_v1_subscription_pb from "../../../sandboxes/api/v1/subscription_pb";
import * as sandboxes_api_v1_system_pb from "../../../sandboxes/api/v1/system_pb";
import * as sandboxes_api_v1_user_pb from "../../../sandboxes/api/v1/user_pb";

export class SystemInfoRequest extends jspb.Message { 
    getIncludePackages(): boolean;
    setIncludePackages(value: boolean): SystemInfoRequest;
    getIncludeServices(): boolean;
    setIncludeServices(value: boolean): SystemInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemInfoRequest): SystemInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemInfoRequest;
    static deserializeBinaryFromReader(message: SystemInfoRequest, reader: jspb.BinaryReader): SystemInfoRequest;
}

export namespace SystemInfoRequest {
    export type AsObject = {
        includePackages: boolean,
        includeServices: boolean,
    }
}

export class SystemInfoResponse extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): sandboxes_api_v1_system_pb.SystemInfo | undefined;
    setInfo(value?: sandboxes_api_v1_system_pb.SystemInfo): SystemInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SystemInfoResponse): SystemInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemInfoResponse;
    static deserializeBinaryFromReader(message: SystemInfoResponse, reader: jspb.BinaryReader): SystemInfoResponse;
}

export namespace SystemInfoResponse {
    export type AsObject = {
        info?: sandboxes_api_v1_system_pb.SystemInfo.AsObject,
    }
}

export class CurrentUserRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentUserRequest): CurrentUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentUserRequest;
    static deserializeBinaryFromReader(message: CurrentUserRequest, reader: jspb.BinaryReader): CurrentUserRequest;
}

export namespace CurrentUserRequest {
    export type AsObject = {
    }
}

export class CurrentUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): sandboxes_api_v1_user_pb.User | undefined;
    setUser(value?: sandboxes_api_v1_user_pb.User): CurrentUserResponse;

    hasSystemAdmin(): boolean;
    clearSystemAdmin(): void;
    getSystemAdmin(): CurrentUserResponse.SystemAdmin | undefined;
    setSystemAdmin(value?: CurrentUserResponse.SystemAdmin): CurrentUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentUserResponse): CurrentUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentUserResponse;
    static deserializeBinaryFromReader(message: CurrentUserResponse, reader: jspb.BinaryReader): CurrentUserResponse;
}

export namespace CurrentUserResponse {
    export type AsObject = {
        user?: sandboxes_api_v1_user_pb.User.AsObject,
        systemAdmin?: CurrentUserResponse.SystemAdmin.AsObject,
    }


    export class SystemAdmin extends jspb.Message { 
        getAdminBaseUrl(): string;
        setAdminBaseUrl(value: string): SystemAdmin;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SystemAdmin.AsObject;
        static toObject(includeInstance: boolean, msg: SystemAdmin): SystemAdmin.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SystemAdmin, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SystemAdmin;
        static deserializeBinaryFromReader(message: SystemAdmin, reader: jspb.BinaryReader): SystemAdmin;
    }

    export namespace SystemAdmin {
        export type AsObject = {
            adminBaseUrl: string,
        }
    }

}

export class UpdateUserRequest extends jspb.Message { 
    getDisplayName(): string;
    setDisplayName(value: string): UpdateUserRequest;
    getAvatarLink(): string;
    setAvatarLink(value: string): UpdateUserRequest;
    clearAddAuthorizedKeysList(): void;
    getAddAuthorizedKeysList(): Array<string>;
    setAddAuthorizedKeysList(value: Array<string>): UpdateUserRequest;
    addAddAuthorizedKeys(value: string, index?: number): string;
    clearRemoveAuthorizedKeysList(): void;
    getRemoveAuthorizedKeysList(): Array<string>;
    setRemoveAuthorizedKeysList(value: Array<string>): UpdateUserRequest;
    addRemoveAuthorizedKeys(value: string, index?: number): string;

    hasMembership(): boolean;
    clearMembership(): void;
    getMembership(): UpdateUserRequest.Membership | undefined;
    setMembership(value?: UpdateUserRequest.Membership): UpdateUserRequest;
    getRemoveDefaultSshKeypair(): boolean;
    setRemoveDefaultSshKeypair(value: boolean): UpdateUserRequest;
    getUserId(): string;
    setUserId(value: string): UpdateUserRequest;
    getOrgId(): string;
    setOrgId(value: string): UpdateUserRequest;
    getStateJson(): string;
    setStateJson(value: string): UpdateUserRequest;
    getUpdateStateJson(): boolean;
    setUpdateStateJson(value: boolean): UpdateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        displayName: string,
        avatarLink: string,
        addAuthorizedKeysList: Array<string>,
        removeAuthorizedKeysList: Array<string>,
        membership?: UpdateUserRequest.Membership.AsObject,
        removeDefaultSshKeypair: boolean,
        userId: string,
        orgId: string,
        stateJson: string,
        updateStateJson: boolean,
    }


    export class Membership extends jspb.Message { 
        getOrgId(): string;
        setOrgId(value: string): Membership;
        getOrgVersion(): string;
        setOrgVersion(value: string): Membership;

        hasOpaque(): boolean;
        clearOpaque(): void;
        getOpaque(): sandboxes_api_v1_org_pb.Org.Membership.Opaque | undefined;
        setOpaque(value?: sandboxes_api_v1_org_pb.Org.Membership.Opaque): Membership;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Membership.AsObject;
        static toObject(includeInstance: boolean, msg: Membership): Membership.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Membership, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Membership;
        static deserializeBinaryFromReader(message: Membership, reader: jspb.BinaryReader): Membership;
    }

    export namespace Membership {
        export type AsObject = {
            orgId: string,
            orgVersion: string,
            opaque?: sandboxes_api_v1_org_pb.Org.Membership.Opaque.AsObject,
        }
    }

}

export class UpdateUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): sandboxes_api_v1_user_pb.User | undefined;
    setUser(value?: sandboxes_api_v1_user_pb.User): UpdateUserResponse;

    hasMembership(): boolean;
    clearMembership(): void;
    getMembership(): sandboxes_api_v1_org_pb.Org.Membership | undefined;
    setMembership(value?: sandboxes_api_v1_org_pb.Org.Membership): UpdateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
    static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
    export type AsObject = {
        user?: sandboxes_api_v1_user_pb.User.AsObject,
        membership?: sandboxes_api_v1_org_pb.Org.Membership.AsObject,
    }
}

export class ListOrgsRequest extends jspb.Message { 
    getExpandMembers(): boolean;
    setExpandMembers(value: boolean): ListOrgsRequest;
    clearFilterByIdsList(): void;
    getFilterByIdsList(): Array<string>;
    setFilterByIdsList(value: Array<string>): ListOrgsRequest;
    addFilterByIds(value: string, index?: number): string;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): ListOrgsRequest;
    addFilterByNames(value: string, index?: number): string;

    hasMembersInfo(): boolean;
    clearMembersInfo(): void;
    getMembersInfo(): ListOrgsRequest.MembersInfo | undefined;
    setMembersInfo(value?: ListOrgsRequest.MembersInfo): ListOrgsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOrgsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListOrgsRequest): ListOrgsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOrgsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOrgsRequest;
    static deserializeBinaryFromReader(message: ListOrgsRequest, reader: jspb.BinaryReader): ListOrgsRequest;
}

export namespace ListOrgsRequest {
    export type AsObject = {
        expandMembers: boolean,
        filterByIdsList: Array<string>,
        filterByNamesList: Array<string>,
        membersInfo?: ListOrgsRequest.MembersInfo.AsObject,
    }


    export class MembersInfo extends jspb.Message { 
        getLevel(): ListOrgsRequest.MembersInfo.Level;
        setLevel(value: ListOrgsRequest.MembersInfo.Level): MembersInfo;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MembersInfo.AsObject;
        static toObject(includeInstance: boolean, msg: MembersInfo): MembersInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MembersInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MembersInfo;
        static deserializeBinaryFromReader(message: MembersInfo, reader: jspb.BinaryReader): MembersInfo;
    }

    export namespace MembersInfo {
        export type AsObject = {
            level: ListOrgsRequest.MembersInfo.Level,
        }

        export enum Level {
    NONE = 0,
    FULL = 1,
    FULL_CALLER = 2,
        }

    }

}

export class ListOrgsResponse extends jspb.Message { 
    clearOrgsList(): void;
    getOrgsList(): Array<sandboxes_api_v1_org_pb.OrgWithMembers>;
    setOrgsList(value: Array<sandboxes_api_v1_org_pb.OrgWithMembers>): ListOrgsResponse;
    addOrgs(value?: sandboxes_api_v1_org_pb.OrgWithMembers, index?: number): sandboxes_api_v1_org_pb.OrgWithMembers;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListOrgsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListOrgsResponse): ListOrgsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListOrgsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListOrgsResponse;
    static deserializeBinaryFromReader(message: ListOrgsResponse, reader: jspb.BinaryReader): ListOrgsResponse;
}

export namespace ListOrgsResponse {
    export type AsObject = {
        orgsList: Array<sandboxes_api_v1_org_pb.OrgWithMembers.AsObject>,
    }
}

export class UpdateOrgRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): UpdateOrgRequest;
    clearUpdatesList(): void;
    getUpdatesList(): Array<UpdateOrgRequest.Update>;
    setUpdatesList(value: Array<UpdateOrgRequest.Update>): UpdateOrgRequest;
    addUpdates(value?: UpdateOrgRequest.Update, index?: number): UpdateOrgRequest.Update;
    getVersion(): string;
    setVersion(value: string): UpdateOrgRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOrgRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOrgRequest): UpdateOrgRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOrgRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOrgRequest;
    static deserializeBinaryFromReader(message: UpdateOrgRequest, reader: jspb.BinaryReader): UpdateOrgRequest;
}

export namespace UpdateOrgRequest {
    export type AsObject = {
        orgId: string,
        updatesList: Array<UpdateOrgRequest.Update.AsObject>,
        version: string,
    }


    export class SetMembers extends jspb.Message { 
        clearMembersList(): void;
        getMembersList(): Array<sandboxes_api_v1_org_pb.Org.Membership>;
        setMembersList(value: Array<sandboxes_api_v1_org_pb.Org.Membership>): SetMembers;
        addMembers(value?: sandboxes_api_v1_org_pb.Org.Membership, index?: number): sandboxes_api_v1_org_pb.Org.Membership;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetMembers.AsObject;
        static toObject(includeInstance: boolean, msg: SetMembers): SetMembers.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetMembers, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetMembers;
        static deserializeBinaryFromReader(message: SetMembers, reader: jspb.BinaryReader): SetMembers;
    }

    export namespace SetMembers {
        export type AsObject = {
            membersList: Array<sandboxes_api_v1_org_pb.Org.Membership.AsObject>,
        }
    }

    export class AddMember extends jspb.Message { 

        hasUser(): boolean;
        clearUser(): void;
        getUser(): sandboxes_api_v1_user_pb.User | undefined;
        setUser(value?: sandboxes_api_v1_user_pb.User): AddMember;

        hasMembership(): boolean;
        clearMembership(): void;
        getMembership(): sandboxes_api_v1_org_pb.Org.Membership | undefined;
        setMembership(value?: sandboxes_api_v1_org_pb.Org.Membership): AddMember;

        hasNotification(): boolean;
        clearNotification(): void;
        getNotification(): UpdateOrgRequest.AddMember.Notification | undefined;
        setNotification(value?: UpdateOrgRequest.AddMember.Notification): AddMember;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AddMember.AsObject;
        static toObject(includeInstance: boolean, msg: AddMember): AddMember.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AddMember, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AddMember;
        static deserializeBinaryFromReader(message: AddMember, reader: jspb.BinaryReader): AddMember;
    }

    export namespace AddMember {
        export type AsObject = {
            user?: sandboxes_api_v1_user_pb.User.AsObject,
            membership?: sandboxes_api_v1_org_pb.Org.Membership.AsObject,
            notification?: UpdateOrgRequest.AddMember.Notification.AsObject,
        }


        export class Notification extends jspb.Message { 
            getMessage(): string;
            setMessage(value: string): Notification;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Notification.AsObject;
            static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Notification;
            static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
        }

        export namespace Notification {
            export type AsObject = {
                message: string,
            }
        }

    }

    export class Settings extends jspb.Message { 

        hasSettings(): boolean;
        clearSettings(): void;
        getSettings(): sandboxes_api_v1_org_pb.Org.Settings | undefined;
        setSettings(value?: sandboxes_api_v1_org_pb.Org.Settings): Settings;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Settings.AsObject;
        static toObject(includeInstance: boolean, msg: Settings): Settings.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Settings, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Settings;
        static deserializeBinaryFromReader(message: Settings, reader: jspb.BinaryReader): Settings;
    }

    export namespace Settings {
        export type AsObject = {
            settings?: sandboxes_api_v1_org_pb.Org.Settings.AsObject,
        }
    }

    export class DomainSignInMode extends jspb.Message { 
        getMode(): sandboxes_api_v1_org_pb.Org.DomainSignInMode;
        setMode(value: sandboxes_api_v1_org_pb.Org.DomainSignInMode): DomainSignInMode;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DomainSignInMode.AsObject;
        static toObject(includeInstance: boolean, msg: DomainSignInMode): DomainSignInMode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DomainSignInMode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DomainSignInMode;
        static deserializeBinaryFromReader(message: DomainSignInMode, reader: jspb.BinaryReader): DomainSignInMode;
    }

    export namespace DomainSignInMode {
        export type AsObject = {
            mode: sandboxes_api_v1_org_pb.Org.DomainSignInMode,
        }
    }

    export class SetPolicy extends jspb.Message { 

        hasPolicy(): boolean;
        clearPolicy(): void;
        getPolicy(): sandboxes_api_v1_org_pb.Policy | undefined;
        setPolicy(value?: sandboxes_api_v1_org_pb.Policy): SetPolicy;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetPolicy.AsObject;
        static toObject(includeInstance: boolean, msg: SetPolicy): SetPolicy.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetPolicy, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetPolicy;
        static deserializeBinaryFromReader(message: SetPolicy, reader: jspb.BinaryReader): SetPolicy;
    }

    export namespace SetPolicy {
        export type AsObject = {
            policy?: sandboxes_api_v1_org_pb.Policy.AsObject,
        }
    }

    export class SetDomains extends jspb.Message { 
        clearDomainsList(): void;
        getDomainsList(): Array<string>;
        setDomainsList(value: Array<string>): SetDomains;
        addDomains(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetDomains.AsObject;
        static toObject(includeInstance: boolean, msg: SetDomains): SetDomains.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetDomains, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetDomains;
        static deserializeBinaryFromReader(message: SetDomains, reader: jspb.BinaryReader): SetDomains;
    }

    export namespace SetDomains {
        export type AsObject = {
            domainsList: Array<string>,
        }
    }

    export class SettingsOverrides extends jspb.Message { 
        clearSettingsOverridesList(): void;
        getSettingsOverridesList(): Array<sandboxes_api_v1_org_pb.Org.SettingsOverride>;
        setSettingsOverridesList(value: Array<sandboxes_api_v1_org_pb.Org.SettingsOverride>): SettingsOverrides;
        addSettingsOverrides(value?: sandboxes_api_v1_org_pb.Org.SettingsOverride, index?: number): sandboxes_api_v1_org_pb.Org.SettingsOverride;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SettingsOverrides.AsObject;
        static toObject(includeInstance: boolean, msg: SettingsOverrides): SettingsOverrides.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SettingsOverrides, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SettingsOverrides;
        static deserializeBinaryFromReader(message: SettingsOverrides, reader: jspb.BinaryReader): SettingsOverrides;
    }

    export namespace SettingsOverrides {
        export type AsObject = {
            settingsOverridesList: Array<sandboxes_api_v1_org_pb.Org.SettingsOverride.AsObject>,
        }
    }

    export class Update extends jspb.Message { 

        hasSetMembers(): boolean;
        clearSetMembers(): void;
        getSetMembers(): UpdateOrgRequest.SetMembers | undefined;
        setSetMembers(value?: UpdateOrgRequest.SetMembers): Update;

        hasSettings(): boolean;
        clearSettings(): void;
        getSettings(): UpdateOrgRequest.Settings | undefined;
        setSettings(value?: UpdateOrgRequest.Settings): Update;

        hasDomainSigninMode(): boolean;
        clearDomainSigninMode(): void;
        getDomainSigninMode(): UpdateOrgRequest.DomainSignInMode | undefined;
        setDomainSigninMode(value?: UpdateOrgRequest.DomainSignInMode): Update;

        hasSetPolicy(): boolean;
        clearSetPolicy(): void;
        getSetPolicy(): UpdateOrgRequest.SetPolicy | undefined;
        setSetPolicy(value?: UpdateOrgRequest.SetPolicy): Update;

        hasAddMember(): boolean;
        clearAddMember(): void;
        getAddMember(): UpdateOrgRequest.AddMember | undefined;
        setAddMember(value?: UpdateOrgRequest.AddMember): Update;

        hasUpdateMember(): boolean;
        clearUpdateMember(): void;
        getUpdateMember(): sandboxes_api_v1_org_pb.Org.Membership | undefined;
        setUpdateMember(value?: sandboxes_api_v1_org_pb.Org.Membership): Update;

        hasRemoveMember(): boolean;
        clearRemoveMember(): void;
        getRemoveMember(): string;
        setRemoveMember(value: string): Update;

        hasSetDomains(): boolean;
        clearSetDomains(): void;
        getSetDomains(): UpdateOrgRequest.SetDomains | undefined;
        setSetDomains(value?: UpdateOrgRequest.SetDomains): Update;

        hasSettingsOverrides(): boolean;
        clearSettingsOverrides(): void;
        getSettingsOverrides(): UpdateOrgRequest.SettingsOverrides | undefined;
        setSettingsOverrides(value?: UpdateOrgRequest.SettingsOverrides): Update;

        getUpdateCase(): Update.UpdateCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Update.AsObject;
        static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Update;
        static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
    }

    export namespace Update {
        export type AsObject = {
            setMembers?: UpdateOrgRequest.SetMembers.AsObject,
            settings?: UpdateOrgRequest.Settings.AsObject,
            domainSigninMode?: UpdateOrgRequest.DomainSignInMode.AsObject,
            setPolicy?: UpdateOrgRequest.SetPolicy.AsObject,
            addMember?: UpdateOrgRequest.AddMember.AsObject,
            updateMember?: sandboxes_api_v1_org_pb.Org.Membership.AsObject,
            removeMember: string,
            setDomains?: UpdateOrgRequest.SetDomains.AsObject,
            settingsOverrides?: UpdateOrgRequest.SettingsOverrides.AsObject,
        }

        export enum UpdateCase {
            UPDATE_NOT_SET = 0,
            SET_MEMBERS = 1,
            SETTINGS = 2,
            DOMAIN_SIGNIN_MODE = 3,
            SET_POLICY = 4,
            ADD_MEMBER = 5,
            UPDATE_MEMBER = 6,
            REMOVE_MEMBER = 7,
            SET_DOMAINS = 8,
            SETTINGS_OVERRIDES = 9,
        }

    }

}

export class UpdateOrgResponse extends jspb.Message { 

    hasOrg(): boolean;
    clearOrg(): void;
    getOrg(): sandboxes_api_v1_org_pb.OrgWithMembers | undefined;
    setOrg(value?: sandboxes_api_v1_org_pb.OrgWithMembers): UpdateOrgResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOrgResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOrgResponse): UpdateOrgResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOrgResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOrgResponse;
    static deserializeBinaryFromReader(message: UpdateOrgResponse, reader: jspb.BinaryReader): UpdateOrgResponse;
}

export namespace UpdateOrgResponse {
    export type AsObject = {
        org?: sandboxes_api_v1_org_pb.OrgWithMembers.AsObject,
    }
}

export class CreateFolderRequest extends jspb.Message { 

    hasFolder(): boolean;
    clearFolder(): void;
    getFolder(): sandboxes_api_v1_org_pb.Folder | undefined;
    setFolder(value?: sandboxes_api_v1_org_pb.Folder): CreateFolderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFolderRequest): CreateFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFolderRequest;
    static deserializeBinaryFromReader(message: CreateFolderRequest, reader: jspb.BinaryReader): CreateFolderRequest;
}

export namespace CreateFolderRequest {
    export type AsObject = {
        folder?: sandboxes_api_v1_org_pb.Folder.AsObject,
    }
}

export class CreateFolderResponse extends jspb.Message { 

    hasFolder(): boolean;
    clearFolder(): void;
    getFolder(): sandboxes_api_v1_org_pb.Folder | undefined;
    setFolder(value?: sandboxes_api_v1_org_pb.Folder): CreateFolderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateFolderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateFolderResponse): CreateFolderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateFolderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateFolderResponse;
    static deserializeBinaryFromReader(message: CreateFolderResponse, reader: jspb.BinaryReader): CreateFolderResponse;
}

export namespace CreateFolderResponse {
    export type AsObject = {
        folder?: sandboxes_api_v1_org_pb.Folder.AsObject,
    }
}

export class ListFoldersRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListFoldersRequest;
    clearFilterByIdsList(): void;
    getFilterByIdsList(): Array<string>;
    setFilterByIdsList(value: Array<string>): ListFoldersRequest;
    addFilterByIds(value: string, index?: number): string;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): ListFoldersRequest;
    addFilterByNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFoldersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListFoldersRequest): ListFoldersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFoldersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFoldersRequest;
    static deserializeBinaryFromReader(message: ListFoldersRequest, reader: jspb.BinaryReader): ListFoldersRequest;
}

export namespace ListFoldersRequest {
    export type AsObject = {
        orgId: string,
        filterByIdsList: Array<string>,
        filterByNamesList: Array<string>,
    }
}

export class ListFoldersResponse extends jspb.Message { 
    clearFoldersList(): void;
    getFoldersList(): Array<sandboxes_api_v1_org_pb.Folder>;
    setFoldersList(value: Array<sandboxes_api_v1_org_pb.Folder>): ListFoldersResponse;
    addFolders(value?: sandboxes_api_v1_org_pb.Folder, index?: number): sandboxes_api_v1_org_pb.Folder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFoldersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListFoldersResponse): ListFoldersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFoldersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFoldersResponse;
    static deserializeBinaryFromReader(message: ListFoldersResponse, reader: jspb.BinaryReader): ListFoldersResponse;
}

export namespace ListFoldersResponse {
    export type AsObject = {
        foldersList: Array<sandboxes_api_v1_org_pb.Folder.AsObject>,
    }
}

export class UpdateFolderRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateFolderRequest;
    getVersion(): string;
    setVersion(value: string): UpdateFolderRequest;

    hasSetPolicy(): boolean;
    clearSetPolicy(): void;
    getSetPolicy(): UpdateFolderRequest.SetPolicy | undefined;
    setSetPolicy(value?: UpdateFolderRequest.SetPolicy): UpdateFolderRequest;

    hasRename(): boolean;
    clearRename(): void;
    getRename(): UpdateFolderRequest.Rename | undefined;
    setRename(value?: UpdateFolderRequest.Rename): UpdateFolderRequest;

    hasMove(): boolean;
    clearMove(): void;
    getMove(): UpdateFolderRequest.Move | undefined;
    setMove(value?: UpdateFolderRequest.Move): UpdateFolderRequest;

    getUpdateCase(): UpdateFolderRequest.UpdateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFolderRequest): UpdateFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFolderRequest;
    static deserializeBinaryFromReader(message: UpdateFolderRequest, reader: jspb.BinaryReader): UpdateFolderRequest;
}

export namespace UpdateFolderRequest {
    export type AsObject = {
        id: string,
        version: string,
        setPolicy?: UpdateFolderRequest.SetPolicy.AsObject,
        rename?: UpdateFolderRequest.Rename.AsObject,
        move?: UpdateFolderRequest.Move.AsObject,
    }


    export class SetPolicy extends jspb.Message { 

        hasPolicy(): boolean;
        clearPolicy(): void;
        getPolicy(): sandboxes_api_v1_org_pb.Policy | undefined;
        setPolicy(value?: sandboxes_api_v1_org_pb.Policy): SetPolicy;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SetPolicy.AsObject;
        static toObject(includeInstance: boolean, msg: SetPolicy): SetPolicy.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SetPolicy, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SetPolicy;
        static deserializeBinaryFromReader(message: SetPolicy, reader: jspb.BinaryReader): SetPolicy;
    }

    export namespace SetPolicy {
        export type AsObject = {
            policy?: sandboxes_api_v1_org_pb.Policy.AsObject,
        }
    }

    export class Rename extends jspb.Message { 
        getName(): string;
        setName(value: string): Rename;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Rename.AsObject;
        static toObject(includeInstance: boolean, msg: Rename): Rename.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Rename, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Rename;
        static deserializeBinaryFromReader(message: Rename, reader: jspb.BinaryReader): Rename;
    }

    export namespace Rename {
        export type AsObject = {
            name: string,
        }
    }

    export class Move extends jspb.Message { 
        getName(): string;
        setName(value: string): Move;
        getParentId(): string;
        setParentId(value: string): Move;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Move.AsObject;
        static toObject(includeInstance: boolean, msg: Move): Move.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Move, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Move;
        static deserializeBinaryFromReader(message: Move, reader: jspb.BinaryReader): Move;
    }

    export namespace Move {
        export type AsObject = {
            name: string,
            parentId: string,
        }
    }


    export enum UpdateCase {
        UPDATE_NOT_SET = 0,
        SET_POLICY = 3,
        RENAME = 4,
        MOVE = 5,
    }

}

export class UpdateFolderResponse extends jspb.Message { 

    hasFolder(): boolean;
    clearFolder(): void;
    getFolder(): sandboxes_api_v1_org_pb.Folder | undefined;
    setFolder(value?: sandboxes_api_v1_org_pb.Folder): UpdateFolderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFolderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFolderResponse): UpdateFolderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFolderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFolderResponse;
    static deserializeBinaryFromReader(message: UpdateFolderResponse, reader: jspb.BinaryReader): UpdateFolderResponse;
}

export namespace UpdateFolderResponse {
    export type AsObject = {
        folder?: sandboxes_api_v1_org_pb.Folder.AsObject,
    }
}

export class DeleteFolderRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteFolderRequest;
    getVersion(): string;
    setVersion(value: string): DeleteFolderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFolderRequest): DeleteFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFolderRequest;
    static deserializeBinaryFromReader(message: DeleteFolderRequest, reader: jspb.BinaryReader): DeleteFolderRequest;
}

export namespace DeleteFolderRequest {
    export type AsObject = {
        id: string,
        version: string,
    }
}

export class DeleteFolderResponse extends jspb.Message { 

    hasFolder(): boolean;
    clearFolder(): void;
    getFolder(): sandboxes_api_v1_org_pb.Folder | undefined;
    setFolder(value?: sandboxes_api_v1_org_pb.Folder): DeleteFolderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFolderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFolderResponse): DeleteFolderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFolderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFolderResponse;
    static deserializeBinaryFromReader(message: DeleteFolderResponse, reader: jspb.BinaryReader): DeleteFolderResponse;
}

export namespace DeleteFolderResponse {
    export type AsObject = {
        folder?: sandboxes_api_v1_org_pb.Folder.AsObject,
    }
}

export class ListServiceAccountsRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListServiceAccountsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServiceAccountsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListServiceAccountsRequest): ListServiceAccountsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServiceAccountsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServiceAccountsRequest;
    static deserializeBinaryFromReader(message: ListServiceAccountsRequest, reader: jspb.BinaryReader): ListServiceAccountsRequest;
}

export namespace ListServiceAccountsRequest {
    export type AsObject = {
        orgId: string,
    }
}

export class ListServiceAccountsResponse extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<sandboxes_api_v1_user_pb.User>;
    setAccountsList(value: Array<sandboxes_api_v1_user_pb.User>): ListServiceAccountsResponse;
    addAccounts(value?: sandboxes_api_v1_user_pb.User, index?: number): sandboxes_api_v1_user_pb.User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListServiceAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListServiceAccountsResponse): ListServiceAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListServiceAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListServiceAccountsResponse;
    static deserializeBinaryFromReader(message: ListServiceAccountsResponse, reader: jspb.BinaryReader): ListServiceAccountsResponse;
}

export namespace ListServiceAccountsResponse {
    export type AsObject = {
        accountsList: Array<sandboxes_api_v1_user_pb.User.AsObject>,
    }
}

export class CreateServiceAccountRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): CreateServiceAccountRequest;
    getName(): string;
    setName(value: string): CreateServiceAccountRequest;
    getDisplayName(): string;
    setDisplayName(value: string): CreateServiceAccountRequest;

    hasMembership(): boolean;
    clearMembership(): void;
    getMembership(): sandboxes_api_v1_org_pb.Org.Membership | undefined;
    setMembership(value?: sandboxes_api_v1_org_pb.Org.Membership): CreateServiceAccountRequest;
    getLinkedEmail(): string;
    setLinkedEmail(value: string): CreateServiceAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateServiceAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateServiceAccountRequest): CreateServiceAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateServiceAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateServiceAccountRequest;
    static deserializeBinaryFromReader(message: CreateServiceAccountRequest, reader: jspb.BinaryReader): CreateServiceAccountRequest;
}

export namespace CreateServiceAccountRequest {
    export type AsObject = {
        orgId: string,
        name: string,
        displayName: string,
        membership?: sandboxes_api_v1_org_pb.Org.Membership.AsObject,
        linkedEmail: string,
    }
}

export class CreateServiceAccountResponse extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): sandboxes_api_v1_user_pb.User | undefined;
    setAccount(value?: sandboxes_api_v1_user_pb.User): CreateServiceAccountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateServiceAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateServiceAccountResponse): CreateServiceAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateServiceAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateServiceAccountResponse;
    static deserializeBinaryFromReader(message: CreateServiceAccountResponse, reader: jspb.BinaryReader): CreateServiceAccountResponse;
}

export namespace CreateServiceAccountResponse {
    export type AsObject = {
        account?: sandboxes_api_v1_user_pb.User.AsObject,
    }
}

export class UpdateServiceAccountRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): UpdateServiceAccountRequest;
    getAccountId(): string;
    setAccountId(value: string): UpdateServiceAccountRequest;
    getDisplayName(): string;
    setDisplayName(value: string): UpdateServiceAccountRequest;

    hasMembership(): boolean;
    clearMembership(): void;
    getMembership(): sandboxes_api_v1_org_pb.Org.Membership | undefined;
    setMembership(value?: sandboxes_api_v1_org_pb.Org.Membership): UpdateServiceAccountRequest;
    getVersion(): string;
    setVersion(value: string): UpdateServiceAccountRequest;
    getLinkedEmail(): string;
    setLinkedEmail(value: string): UpdateServiceAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServiceAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServiceAccountRequest): UpdateServiceAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServiceAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServiceAccountRequest;
    static deserializeBinaryFromReader(message: UpdateServiceAccountRequest, reader: jspb.BinaryReader): UpdateServiceAccountRequest;
}

export namespace UpdateServiceAccountRequest {
    export type AsObject = {
        orgId: string,
        accountId: string,
        displayName: string,
        membership?: sandboxes_api_v1_org_pb.Org.Membership.AsObject,
        version: string,
        linkedEmail: string,
    }
}

export class UpdateServiceAccountResponse extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): sandboxes_api_v1_user_pb.User | undefined;
    setAccount(value?: sandboxes_api_v1_user_pb.User): UpdateServiceAccountResponse;

    hasMembership(): boolean;
    clearMembership(): void;
    getMembership(): sandboxes_api_v1_org_pb.Org.Membership | undefined;
    setMembership(value?: sandboxes_api_v1_org_pb.Org.Membership): UpdateServiceAccountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServiceAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServiceAccountResponse): UpdateServiceAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServiceAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServiceAccountResponse;
    static deserializeBinaryFromReader(message: UpdateServiceAccountResponse, reader: jspb.BinaryReader): UpdateServiceAccountResponse;
}

export namespace UpdateServiceAccountResponse {
    export type AsObject = {
        account?: sandboxes_api_v1_user_pb.User.AsObject,
        membership?: sandboxes_api_v1_org_pb.Org.Membership.AsObject,
    }
}

export class DeleteServiceAccountRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): DeleteServiceAccountRequest;
    getAccountId(): string;
    setAccountId(value: string): DeleteServiceAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteServiceAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteServiceAccountRequest): DeleteServiceAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteServiceAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteServiceAccountRequest;
    static deserializeBinaryFromReader(message: DeleteServiceAccountRequest, reader: jspb.BinaryReader): DeleteServiceAccountRequest;
}

export namespace DeleteServiceAccountRequest {
    export type AsObject = {
        orgId: string,
        accountId: string,
    }
}

export class DeleteServiceAccountResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteServiceAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteServiceAccountResponse): DeleteServiceAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteServiceAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteServiceAccountResponse;
    static deserializeBinaryFromReader(message: DeleteServiceAccountResponse, reader: jspb.BinaryReader): DeleteServiceAccountResponse;
}

export namespace DeleteServiceAccountResponse {
    export type AsObject = {
    }
}

export class ListLoginTokensRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListLoginTokensRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLoginTokensRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLoginTokensRequest): ListLoginTokensRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLoginTokensRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLoginTokensRequest;
    static deserializeBinaryFromReader(message: ListLoginTokensRequest, reader: jspb.BinaryReader): ListLoginTokensRequest;
}

export namespace ListLoginTokensRequest {
    export type AsObject = {
        orgId: string,
    }
}

export class ListLoginTokensResponse extends jspb.Message { 
    clearTokensList(): void;
    getTokensList(): Array<sandboxes_api_v1_resource_logintoken_pb.LoginToken>;
    setTokensList(value: Array<sandboxes_api_v1_resource_logintoken_pb.LoginToken>): ListLoginTokensResponse;
    addTokens(value?: sandboxes_api_v1_resource_logintoken_pb.LoginToken, index?: number): sandboxes_api_v1_resource_logintoken_pb.LoginToken;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLoginTokensResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLoginTokensResponse): ListLoginTokensResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLoginTokensResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLoginTokensResponse;
    static deserializeBinaryFromReader(message: ListLoginTokensResponse, reader: jspb.BinaryReader): ListLoginTokensResponse;
}

export namespace ListLoginTokensResponse {
    export type AsObject = {
        tokensList: Array<sandboxes_api_v1_resource_logintoken_pb.LoginToken.AsObject>,
    }
}

export class CreateLoginTokenRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): CreateLoginTokenRequest;
    getAccountId(): string;
    setAccountId(value: string): CreateLoginTokenRequest;

    hasValidSince(): boolean;
    clearValidSince(): void;
    getValidSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setValidSince(value?: google_protobuf_timestamp_pb.Timestamp): CreateLoginTokenRequest;

    hasExpireAt(): boolean;
    clearExpireAt(): void;
    getExpireAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireAt(value?: google_protobuf_timestamp_pb.Timestamp): CreateLoginTokenRequest;
    getWebRedirectPath(): string;
    setWebRedirectPath(value: string): CreateLoginTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLoginTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLoginTokenRequest): CreateLoginTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLoginTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLoginTokenRequest;
    static deserializeBinaryFromReader(message: CreateLoginTokenRequest, reader: jspb.BinaryReader): CreateLoginTokenRequest;
}

export namespace CreateLoginTokenRequest {
    export type AsObject = {
        orgId: string,
        accountId: string,
        validSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        expireAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        webRedirectPath: string,
    }
}

export class CreateLoginTokenResponse extends jspb.Message { 

    hasToken(): boolean;
    clearToken(): void;
    getToken(): sandboxes_api_v1_resource_logintoken_pb.LoginToken | undefined;
    setToken(value?: sandboxes_api_v1_resource_logintoken_pb.LoginToken): CreateLoginTokenResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLoginTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLoginTokenResponse): CreateLoginTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLoginTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLoginTokenResponse;
    static deserializeBinaryFromReader(message: CreateLoginTokenResponse, reader: jspb.BinaryReader): CreateLoginTokenResponse;
}

export namespace CreateLoginTokenResponse {
    export type AsObject = {
        token?: sandboxes_api_v1_resource_logintoken_pb.LoginToken.AsObject,
    }
}

export class DeleteLoginTokenRequest extends jspb.Message { 
    getEncodedToken(): string;
    setEncodedToken(value: string): DeleteLoginTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLoginTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLoginTokenRequest): DeleteLoginTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLoginTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLoginTokenRequest;
    static deserializeBinaryFromReader(message: DeleteLoginTokenRequest, reader: jspb.BinaryReader): DeleteLoginTokenRequest;
}

export namespace DeleteLoginTokenRequest {
    export type AsObject = {
        encodedToken: string,
    }
}

export class DeleteLoginTokenResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteLoginTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteLoginTokenResponse): DeleteLoginTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteLoginTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteLoginTokenResponse;
    static deserializeBinaryFromReader(message: DeleteLoginTokenResponse, reader: jspb.BinaryReader): DeleteLoginTokenResponse;
}

export namespace DeleteLoginTokenResponse {
    export type AsObject = {
    }
}

export class UpdateLoginTokenRequest extends jspb.Message { 
    getEncodedToken(): string;
    setEncodedToken(value: string): UpdateLoginTokenRequest;

    hasValidSince(): boolean;
    clearValidSince(): void;
    getValidSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setValidSince(value?: google_protobuf_timestamp_pb.Timestamp): UpdateLoginTokenRequest;

    hasExpireAt(): boolean;
    clearExpireAt(): void;
    getExpireAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireAt(value?: google_protobuf_timestamp_pb.Timestamp): UpdateLoginTokenRequest;
    getWebRedirectPath(): string;
    setWebRedirectPath(value: string): UpdateLoginTokenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLoginTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLoginTokenRequest): UpdateLoginTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLoginTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLoginTokenRequest;
    static deserializeBinaryFromReader(message: UpdateLoginTokenRequest, reader: jspb.BinaryReader): UpdateLoginTokenRequest;
}

export namespace UpdateLoginTokenRequest {
    export type AsObject = {
        encodedToken: string,
        validSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        expireAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        webRedirectPath: string,
    }
}

export class UpdateLoginTokenResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateLoginTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateLoginTokenResponse): UpdateLoginTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateLoginTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateLoginTokenResponse;
    static deserializeBinaryFromReader(message: UpdateLoginTokenResponse, reader: jspb.BinaryReader): UpdateLoginTokenResponse;
}

export namespace UpdateLoginTokenResponse {
    export type AsObject = {
    }
}

export class ListAppsRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListAppsRequest;
    clearFilterByIdsList(): void;
    getFilterByIdsList(): Array<string>;
    setFilterByIdsList(value: Array<string>): ListAppsRequest;
    addFilterByIds(value: string, index?: number): string;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): ListAppsRequest;
    addFilterByNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAppsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAppsRequest): ListAppsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAppsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAppsRequest;
    static deserializeBinaryFromReader(message: ListAppsRequest, reader: jspb.BinaryReader): ListAppsRequest;
}

export namespace ListAppsRequest {
    export type AsObject = {
        orgId: string,
        filterByIdsList: Array<string>,
        filterByNamesList: Array<string>,
    }
}

export class ListAppsResponse extends jspb.Message { 
    clearAppsList(): void;
    getAppsList(): Array<sandboxes_api_v1_app_pb.App>;
    setAppsList(value: Array<sandboxes_api_v1_app_pb.App>): ListAppsResponse;
    addApps(value?: sandboxes_api_v1_app_pb.App, index?: number): sandboxes_api_v1_app_pb.App;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAppsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAppsResponse): ListAppsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAppsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAppsResponse;
    static deserializeBinaryFromReader(message: ListAppsResponse, reader: jspb.BinaryReader): ListAppsResponse;
}

export namespace ListAppsResponse {
    export type AsObject = {
        appsList: Array<sandboxes_api_v1_app_pb.App.AsObject>,
    }
}

export class CreateAppRequest extends jspb.Message { 

    hasApp(): boolean;
    clearApp(): void;
    getApp(): sandboxes_api_v1_app_pb.App | undefined;
    setApp(value?: sandboxes_api_v1_app_pb.App): CreateAppRequest;
    getOnlyValidateSpec(): boolean;
    setOnlyValidateSpec(value: boolean): CreateAppRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAppRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAppRequest): CreateAppRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAppRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAppRequest;
    static deserializeBinaryFromReader(message: CreateAppRequest, reader: jspb.BinaryReader): CreateAppRequest;
}

export namespace CreateAppRequest {
    export type AsObject = {
        app?: sandboxes_api_v1_app_pb.App.AsObject,
        onlyValidateSpec: boolean,
    }
}

export class CreateAppResponse extends jspb.Message { 

    hasApp(): boolean;
    clearApp(): void;
    getApp(): sandboxes_api_v1_app_pb.App | undefined;
    setApp(value?: sandboxes_api_v1_app_pb.App): CreateAppResponse;
    clearValidationErrorsList(): void;
    getValidationErrorsList(): Array<string>;
    setValidationErrorsList(value: Array<string>): CreateAppResponse;
    addValidationErrors(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAppResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAppResponse): CreateAppResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAppResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAppResponse;
    static deserializeBinaryFromReader(message: CreateAppResponse, reader: jspb.BinaryReader): CreateAppResponse;
}

export namespace CreateAppResponse {
    export type AsObject = {
        app?: sandboxes_api_v1_app_pb.App.AsObject,
        validationErrorsList: Array<string>,
    }
}

export class UpdateAppRequest extends jspb.Message { 

    hasApp(): boolean;
    clearApp(): void;
    getApp(): sandboxes_api_v1_app_pb.App | undefined;
    setApp(value?: sandboxes_api_v1_app_pb.App): UpdateAppRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAppRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAppRequest): UpdateAppRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAppRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAppRequest;
    static deserializeBinaryFromReader(message: UpdateAppRequest, reader: jspb.BinaryReader): UpdateAppRequest;
}

export namespace UpdateAppRequest {
    export type AsObject = {
        app?: sandboxes_api_v1_app_pb.App.AsObject,
    }
}

export class UpdateAppResponse extends jspb.Message { 

    hasApp(): boolean;
    clearApp(): void;
    getApp(): sandboxes_api_v1_app_pb.App | undefined;
    setApp(value?: sandboxes_api_v1_app_pb.App): UpdateAppResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateAppResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateAppResponse): UpdateAppResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateAppResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateAppResponse;
    static deserializeBinaryFromReader(message: UpdateAppResponse, reader: jspb.BinaryReader): UpdateAppResponse;
}

export namespace UpdateAppResponse {
    export type AsObject = {
        app?: sandboxes_api_v1_app_pb.App.AsObject,
    }
}

export class DeleteAppRequest extends jspb.Message { 

    hasApp(): boolean;
    clearApp(): void;
    getApp(): sandboxes_api_v1_app_pb.App | undefined;
    setApp(value?: sandboxes_api_v1_app_pb.App): DeleteAppRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAppRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAppRequest): DeleteAppRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAppRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAppRequest;
    static deserializeBinaryFromReader(message: DeleteAppRequest, reader: jspb.BinaryReader): DeleteAppRequest;
}

export namespace DeleteAppRequest {
    export type AsObject = {
        app?: sandboxes_api_v1_app_pb.App.AsObject,
    }
}

export class DeleteAppResponse extends jspb.Message { 

    hasApp(): boolean;
    clearApp(): void;
    getApp(): sandboxes_api_v1_app_pb.App | undefined;
    setApp(value?: sandboxes_api_v1_app_pb.App): DeleteAppResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAppResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAppResponse): DeleteAppResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAppResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAppResponse;
    static deserializeBinaryFromReader(message: DeleteAppResponse, reader: jspb.BinaryReader): DeleteAppResponse;
}

export namespace DeleteAppResponse {
    export type AsObject = {
        app?: sandboxes_api_v1_app_pb.App.AsObject,
    }
}

export class ListSandboxesRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListSandboxesRequest;
    clearFilterByIdsList(): void;
    getFilterByIdsList(): Array<string>;
    setFilterByIdsList(value: Array<string>): ListSandboxesRequest;
    addFilterByIds(value: string, index?: number): string;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): ListSandboxesRequest;
    addFilterByNames(value: string, index?: number): string;
    clearFilterByAppIdsList(): void;
    getFilterByAppIdsList(): Array<string>;
    setFilterByAppIdsList(value: Array<string>): ListSandboxesRequest;
    addFilterByAppIds(value: string, index?: number): string;
    getIncludeStatus(): boolean;
    setIncludeStatus(value: boolean): ListSandboxesRequest;
    getIncludeManaged(): boolean;
    setIncludeManaged(value: boolean): ListSandboxesRequest;
    clearFilterByOwnerIdsList(): void;
    getFilterByOwnerIdsList(): Array<string>;
    setFilterByOwnerIdsList(value: Array<string>): ListSandboxesRequest;
    addFilterByOwnerIds(value: string, index?: number): string;
    clearFilterByRegionsList(): void;
    getFilterByRegionsList(): Array<string>;
    setFilterByRegionsList(value: Array<string>): ListSandboxesRequest;
    addFilterByRegions(value: string, index?: number): string;
    getOnlyAccessible(): boolean;
    setOnlyAccessible(value: boolean): ListSandboxesRequest;
    getMetaOnly(): boolean;
    setMetaOnly(value: boolean): ListSandboxesRequest;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): sandboxes_api_v1_common_pb.Pagination.Request | undefined;
    setPagination(value?: sandboxes_api_v1_common_pb.Pagination.Request): ListSandboxesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSandboxesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSandboxesRequest): ListSandboxesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSandboxesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSandboxesRequest;
    static deserializeBinaryFromReader(message: ListSandboxesRequest, reader: jspb.BinaryReader): ListSandboxesRequest;
}

export namespace ListSandboxesRequest {
    export type AsObject = {
        orgId: string,
        filterByIdsList: Array<string>,
        filterByNamesList: Array<string>,
        filterByAppIdsList: Array<string>,
        includeStatus: boolean,
        includeManaged: boolean,
        filterByOwnerIdsList: Array<string>,
        filterByRegionsList: Array<string>,
        onlyAccessible: boolean,
        metaOnly: boolean,
        pagination?: sandboxes_api_v1_common_pb.Pagination.Request.AsObject,
    }
}

export class ListSandboxesResponse extends jspb.Message { 
    clearSandboxesList(): void;
    getSandboxesList(): Array<sandboxes_api_v1_sandbox_pb.Sandbox>;
    setSandboxesList(value: Array<sandboxes_api_v1_sandbox_pb.Sandbox>): ListSandboxesResponse;
    addSandboxes(value?: sandboxes_api_v1_sandbox_pb.Sandbox, index?: number): sandboxes_api_v1_sandbox_pb.Sandbox;

    hasPagination(): boolean;
    clearPagination(): void;
    getPagination(): sandboxes_api_v1_common_pb.Pagination.Response | undefined;
    setPagination(value?: sandboxes_api_v1_common_pb.Pagination.Response): ListSandboxesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSandboxesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSandboxesResponse): ListSandboxesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSandboxesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSandboxesResponse;
    static deserializeBinaryFromReader(message: ListSandboxesResponse, reader: jspb.BinaryReader): ListSandboxesResponse;
}

export namespace ListSandboxesResponse {
    export type AsObject = {
        sandboxesList: Array<sandboxes_api_v1_sandbox_pb.Sandbox.AsObject>,
        pagination?: sandboxes_api_v1_common_pb.Pagination.Response.AsObject,
    }
}

export class CreateSandboxRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): CreateSandboxRequest;
    getName(): string;
    setName(value: string): CreateSandboxRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasComposer(): boolean;
    clearComposer(): void;
    getComposer(): sandboxes_api_v1_sandbox_pb.Composer | undefined;
    setComposer(value?: sandboxes_api_v1_sandbox_pb.Composer): CreateSandboxRequest;

    hasAccessControl(): boolean;
    clearAccessControl(): void;
    getAccessControl(): sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl | undefined;
    setAccessControl(value?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl): CreateSandboxRequest;
    getFolderId(): string;
    setFolderId(value: string): CreateSandboxRequest;

    hasActivities(): boolean;
    clearActivities(): void;
    getActivities(): sandboxes_api_v1_sandbox_pb.Sandbox.Activities | undefined;
    setActivities(value?: sandboxes_api_v1_sandbox_pb.Sandbox.Activities): CreateSandboxRequest;

    hasUsePool(): boolean;
    clearUsePool(): void;
    getUsePool(): CreateSandboxRequest.UsePool | undefined;
    setUsePool(value?: CreateSandboxRequest.UsePool): CreateSandboxRequest;
    getRegion(): string;
    setRegion(value: string): CreateSandboxRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSandboxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSandboxRequest): CreateSandboxRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSandboxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSandboxRequest;
    static deserializeBinaryFromReader(message: CreateSandboxRequest, reader: jspb.BinaryReader): CreateSandboxRequest;
}

export namespace CreateSandboxRequest {
    export type AsObject = {
        orgId: string,
        name: string,

        labelsMap: Array<[string, string]>,
        composer?: sandboxes_api_v1_sandbox_pb.Composer.AsObject,
        accessControl?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.AsObject,
        folderId: string,
        activities?: sandboxes_api_v1_sandbox_pb.Sandbox.Activities.AsObject,
        usePool?: CreateSandboxRequest.UsePool.AsObject,
        region: string,
    }


    export class UsePool extends jspb.Message { 
        getPoolId(): string;
        setPoolId(value: string): UsePool;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): UsePool.AsObject;
        static toObject(includeInstance: boolean, msg: UsePool): UsePool.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: UsePool, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): UsePool;
        static deserializeBinaryFromReader(message: UsePool, reader: jspb.BinaryReader): UsePool;
    }

    export namespace UsePool {
        export type AsObject = {
            poolId: string,
        }
    }

}

export class CreateSandboxResponse extends jspb.Message { 

    hasSandbox(): boolean;
    clearSandbox(): void;
    getSandbox(): sandboxes_api_v1_sandbox_pb.Sandbox | undefined;
    setSandbox(value?: sandboxes_api_v1_sandbox_pb.Sandbox): CreateSandboxResponse;
    getReady(): boolean;
    setReady(value: boolean): CreateSandboxResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSandboxResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSandboxResponse): CreateSandboxResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSandboxResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSandboxResponse;
    static deserializeBinaryFromReader(message: CreateSandboxResponse, reader: jspb.BinaryReader): CreateSandboxResponse;
}

export namespace CreateSandboxResponse {
    export type AsObject = {
        sandbox?: sandboxes_api_v1_sandbox_pb.Sandbox.AsObject,
        ready: boolean,
    }
}

export class UpdateSandboxRequest extends jspb.Message { 
    getSandboxId(): string;
    setSandboxId(value: string): UpdateSandboxRequest;
    getVersion(): string;
    setVersion(value: string): UpdateSandboxRequest;
    getName(): string;
    setName(value: string): UpdateSandboxRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasResync(): boolean;
    clearResync(): void;
    getResync(): UpdateSandboxRequest.ReSync | undefined;
    setResync(value?: UpdateSandboxRequest.ReSync): UpdateSandboxRequest;

    hasRecompose(): boolean;
    clearRecompose(): void;
    getRecompose(): UpdateSandboxRequest.ReCompose | undefined;
    setRecompose(value?: UpdateSandboxRequest.ReCompose): UpdateSandboxRequest;

    hasAlterWorkloadConfig(): boolean;
    clearAlterWorkloadConfig(): void;
    getAlterWorkloadConfig(): UpdateSandboxRequest.AlterWorkloadConfig | undefined;
    setAlterWorkloadConfig(value?: UpdateSandboxRequest.AlterWorkloadConfig): UpdateSandboxRequest;

    hasOperationalState(): boolean;
    clearOperationalState(): void;
    getOperationalState(): UpdateSandboxRequest.OperationalState | undefined;
    setOperationalState(value?: UpdateSandboxRequest.OperationalState): UpdateSandboxRequest;

    hasAlterEndpointConfig(): boolean;
    clearAlterEndpointConfig(): void;
    getAlterEndpointConfig(): UpdateSandboxRequest.AlterEndpointConfig | undefined;
    setAlterEndpointConfig(value?: UpdateSandboxRequest.AlterEndpointConfig): UpdateSandboxRequest;

    hasAccessControl(): boolean;
    clearAccessControl(): void;
    getAccessControl(): UpdateSandboxRequest.AccessControl | undefined;
    setAccessControl(value?: UpdateSandboxRequest.AccessControl): UpdateSandboxRequest;

    hasRebuildWorkloads(): boolean;
    clearRebuildWorkloads(): void;
    getRebuildWorkloads(): UpdateSandboxRequest.RebuildWorkloads | undefined;
    setRebuildWorkloads(value?: UpdateSandboxRequest.RebuildWorkloads): UpdateSandboxRequest;

    hasComposeDynamic(): boolean;
    clearComposeDynamic(): void;
    getComposeDynamic(): UpdateSandboxRequest.ComposeDynamic | undefined;
    setComposeDynamic(value?: UpdateSandboxRequest.ComposeDynamic): UpdateSandboxRequest;

    hasAlterEnv(): boolean;
    clearAlterEnv(): void;
    getAlterEnv(): UpdateSandboxRequest.AlterEnv | undefined;
    setAlterEnv(value?: UpdateSandboxRequest.AlterEnv): UpdateSandboxRequest;

    hasActivities(): boolean;
    clearActivities(): void;
    getActivities(): UpdateSandboxRequest.Activities | undefined;
    setActivities(value?: UpdateSandboxRequest.Activities): UpdateSandboxRequest;

    hasDetachFromPool(): boolean;
    clearDetachFromPool(): void;
    getDetachFromPool(): UpdateSandboxRequest.DetachFromPool | undefined;
    setDetachFromPool(value?: UpdateSandboxRequest.DetachFromPool): UpdateSandboxRequest;

    hasResolveLifecycleTransitions(): boolean;
    clearResolveLifecycleTransitions(): void;
    getResolveLifecycleTransitions(): UpdateSandboxRequest.ResolveLifecycleTransitions | undefined;
    setResolveLifecycleTransitions(value?: UpdateSandboxRequest.ResolveLifecycleTransitions): UpdateSandboxRequest;

    getUpdateCase(): UpdateSandboxRequest.UpdateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSandboxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSandboxRequest): UpdateSandboxRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSandboxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSandboxRequest;
    static deserializeBinaryFromReader(message: UpdateSandboxRequest, reader: jspb.BinaryReader): UpdateSandboxRequest;
}

export namespace UpdateSandboxRequest {
    export type AsObject = {
        sandboxId: string,
        version: string,
        name: string,

        labelsMap: Array<[string, string]>,
        resync?: UpdateSandboxRequest.ReSync.AsObject,
        recompose?: UpdateSandboxRequest.ReCompose.AsObject,
        alterWorkloadConfig?: UpdateSandboxRequest.AlterWorkloadConfig.AsObject,
        operationalState?: UpdateSandboxRequest.OperationalState.AsObject,
        alterEndpointConfig?: UpdateSandboxRequest.AlterEndpointConfig.AsObject,
        accessControl?: UpdateSandboxRequest.AccessControl.AsObject,
        rebuildWorkloads?: UpdateSandboxRequest.RebuildWorkloads.AsObject,
        composeDynamic?: UpdateSandboxRequest.ComposeDynamic.AsObject,
        alterEnv?: UpdateSandboxRequest.AlterEnv.AsObject,
        activities?: UpdateSandboxRequest.Activities.AsObject,
        detachFromPool?: UpdateSandboxRequest.DetachFromPool.AsObject,
        resolveLifecycleTransitions?: UpdateSandboxRequest.ResolveLifecycleTransitions.AsObject,
    }


    export class EnvList extends jspb.Message { 
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): EnvList;
        addEnv(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): EnvList.AsObject;
        static toObject(includeInstance: boolean, msg: EnvList): EnvList.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: EnvList, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): EnvList;
        static deserializeBinaryFromReader(message: EnvList, reader: jspb.BinaryReader): EnvList;
    }

    export namespace EnvList {
        export type AsObject = {
            envList: Array<string>,
        }
    }

    export class ReSync extends jspb.Message { 
        getUpdateBaseSnapshot(): boolean;
        setUpdateBaseSnapshot(value: boolean): ReSync;
        getUseStoredTemplate(): boolean;
        setUseStoredTemplate(value: boolean): ReSync;

        hasFullEnv(): boolean;
        clearFullEnv(): void;
        getFullEnv(): UpdateSandboxRequest.EnvList | undefined;
        setFullEnv(value?: UpdateSandboxRequest.EnvList): ReSync;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReSync.AsObject;
        static toObject(includeInstance: boolean, msg: ReSync): ReSync.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ReSync, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReSync;
        static deserializeBinaryFromReader(message: ReSync, reader: jspb.BinaryReader): ReSync;
    }

    export namespace ReSync {
        export type AsObject = {
            updateBaseSnapshot: boolean,
            useStoredTemplate: boolean,
            fullEnv?: UpdateSandboxRequest.EnvList.AsObject,
        }
    }

    export class ReCompose extends jspb.Message { 

        hasComposer(): boolean;
        clearComposer(): void;
        getComposer(): sandboxes_api_v1_sandbox_pb.Composer | undefined;
        setComposer(value?: sandboxes_api_v1_sandbox_pb.Composer): ReCompose;
        getIncludeDynamic(): boolean;
        setIncludeDynamic(value: boolean): ReCompose;
        getUpdateBaseSnapshot(): boolean;
        setUpdateBaseSnapshot(value: boolean): ReCompose;

        hasFullEnv(): boolean;
        clearFullEnv(): void;
        getFullEnv(): UpdateSandboxRequest.EnvList | undefined;
        setFullEnv(value?: UpdateSandboxRequest.EnvList): ReCompose;
        getSyncTemplate(): boolean;
        setSyncTemplate(value: boolean): ReCompose;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReCompose.AsObject;
        static toObject(includeInstance: boolean, msg: ReCompose): ReCompose.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ReCompose, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReCompose;
        static deserializeBinaryFromReader(message: ReCompose, reader: jspb.BinaryReader): ReCompose;
    }

    export namespace ReCompose {
        export type AsObject = {
            composer?: sandboxes_api_v1_sandbox_pb.Composer.AsObject,
            includeDynamic: boolean,
            updateBaseSnapshot: boolean,
            fullEnv?: UpdateSandboxRequest.EnvList.AsObject,
            syncTemplate: boolean,
        }
    }

    export class ComposeDynamic extends jspb.Message { 

        hasDynamic(): boolean;
        clearDynamic(): void;
        getDynamic(): sandboxes_api_v1_sandbox_pb.Composer.Dynamic | undefined;
        setDynamic(value?: sandboxes_api_v1_sandbox_pb.Composer.Dynamic): ComposeDynamic;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ComposeDynamic.AsObject;
        static toObject(includeInstance: boolean, msg: ComposeDynamic): ComposeDynamic.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ComposeDynamic, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ComposeDynamic;
        static deserializeBinaryFromReader(message: ComposeDynamic, reader: jspb.BinaryReader): ComposeDynamic;
    }

    export namespace ComposeDynamic {
        export type AsObject = {
            dynamic?: sandboxes_api_v1_sandbox_pb.Composer.Dynamic.AsObject,
        }
    }

    export class AlterWorkloadConfig extends jspb.Message { 

        getWorkloadConfigsMap(): jspb.Map<string, sandboxes_api_v1_sandbox_pb.WorkloadConfig>;
        clearWorkloadConfigsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AlterWorkloadConfig.AsObject;
        static toObject(includeInstance: boolean, msg: AlterWorkloadConfig): AlterWorkloadConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AlterWorkloadConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AlterWorkloadConfig;
        static deserializeBinaryFromReader(message: AlterWorkloadConfig, reader: jspb.BinaryReader): AlterWorkloadConfig;
    }

    export namespace AlterWorkloadConfig {
        export type AsObject = {

            workloadConfigsMap: Array<[string, sandboxes_api_v1_sandbox_pb.WorkloadConfig.AsObject]>,
        }
    }

    export class AlterEndpointConfig extends jspb.Message { 

        getEndpointConfigsMap(): jspb.Map<string, sandboxes_api_v1_sandbox_pb.EndpointConfig>;
        clearEndpointConfigsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AlterEndpointConfig.AsObject;
        static toObject(includeInstance: boolean, msg: AlterEndpointConfig): AlterEndpointConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AlterEndpointConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AlterEndpointConfig;
        static deserializeBinaryFromReader(message: AlterEndpointConfig, reader: jspb.BinaryReader): AlterEndpointConfig;
    }

    export namespace AlterEndpointConfig {
        export type AsObject = {

            endpointConfigsMap: Array<[string, sandboxes_api_v1_sandbox_pb.EndpointConfig.AsObject]>,
        }
    }

    export class AlterEnv extends jspb.Message { 
        clearEnvList(): void;
        getEnvList(): Array<string>;
        setEnvList(value: Array<string>): AlterEnv;
        addEnv(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AlterEnv.AsObject;
        static toObject(includeInstance: boolean, msg: AlterEnv): AlterEnv.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AlterEnv, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AlterEnv;
        static deserializeBinaryFromReader(message: AlterEnv, reader: jspb.BinaryReader): AlterEnv;
    }

    export namespace AlterEnv {
        export type AsObject = {
            envList: Array<string>,
        }
    }

    export class OperationalState extends jspb.Message { 

        hasOpState(): boolean;
        clearOpState(): void;
        getOpState(): sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState | undefined;
        setOpState(value?: sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState): OperationalState;
        getOverrideAlwaysOnExpiry(): boolean;
        setOverrideAlwaysOnExpiry(value: boolean): OperationalState;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OperationalState.AsObject;
        static toObject(includeInstance: boolean, msg: OperationalState): OperationalState.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OperationalState, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OperationalState;
        static deserializeBinaryFromReader(message: OperationalState, reader: jspb.BinaryReader): OperationalState;
    }

    export namespace OperationalState {
        export type AsObject = {
            opState?: sandboxes_api_v1_sandbox_pb.Sandbox.OperationalState.AsObject,
            overrideAlwaysOnExpiry: boolean,
        }
    }

    export class AccessControl extends jspb.Message { 

        hasAccessControl(): boolean;
        clearAccessControl(): void;
        getAccessControl(): sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl | undefined;
        setAccessControl(value?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl): AccessControl;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AccessControl.AsObject;
        static toObject(includeInstance: boolean, msg: AccessControl): AccessControl.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AccessControl, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AccessControl;
        static deserializeBinaryFromReader(message: AccessControl, reader: jspb.BinaryReader): AccessControl;
    }

    export namespace AccessControl {
        export type AsObject = {
            accessControl?: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.AsObject,
        }
    }

    export class RebuildWorkloads extends jspb.Message { 
        clearWorkloadsList(): void;
        getWorkloadsList(): Array<string>;
        setWorkloadsList(value: Array<string>): RebuildWorkloads;
        addWorkloads(value: string, index?: number): string;
        getBaseOnly(): boolean;
        setBaseOnly(value: boolean): RebuildWorkloads;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RebuildWorkloads.AsObject;
        static toObject(includeInstance: boolean, msg: RebuildWorkloads): RebuildWorkloads.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RebuildWorkloads, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RebuildWorkloads;
        static deserializeBinaryFromReader(message: RebuildWorkloads, reader: jspb.BinaryReader): RebuildWorkloads;
    }

    export namespace RebuildWorkloads {
        export type AsObject = {
            workloadsList: Array<string>,
            baseOnly: boolean,
        }
    }

    export class Activities extends jspb.Message { 

        hasActivities(): boolean;
        clearActivities(): void;
        getActivities(): sandboxes_api_v1_sandbox_pb.Sandbox.Activities | undefined;
        setActivities(value?: sandboxes_api_v1_sandbox_pb.Sandbox.Activities): Activities;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Activities.AsObject;
        static toObject(includeInstance: boolean, msg: Activities): Activities.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Activities, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Activities;
        static deserializeBinaryFromReader(message: Activities, reader: jspb.BinaryReader): Activities;
    }

    export namespace Activities {
        export type AsObject = {
            activities?: sandboxes_api_v1_sandbox_pb.Sandbox.Activities.AsObject,
        }
    }

    export class DetachFromPool extends jspb.Message { 
        getFolderId(): string;
        setFolderId(value: string): DetachFromPool;
        getPreserveOwnership(): boolean;
        setPreserveOwnership(value: boolean): DetachFromPool;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DetachFromPool.AsObject;
        static toObject(includeInstance: boolean, msg: DetachFromPool): DetachFromPool.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DetachFromPool, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DetachFromPool;
        static deserializeBinaryFromReader(message: DetachFromPool, reader: jspb.BinaryReader): DetachFromPool;
    }

    export namespace DetachFromPool {
        export type AsObject = {
            folderId: string,
            preserveOwnership: boolean,
        }
    }

    export class ResolveLifecycleTransitions extends jspb.Message { 

        getResolutionsMap(): jspb.Map<string, UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution>;
        clearResolutionsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ResolveLifecycleTransitions.AsObject;
        static toObject(includeInstance: boolean, msg: ResolveLifecycleTransitions): ResolveLifecycleTransitions.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ResolveLifecycleTransitions, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ResolveLifecycleTransitions;
        static deserializeBinaryFromReader(message: ResolveLifecycleTransitions, reader: jspb.BinaryReader): ResolveLifecycleTransitions;
    }

    export namespace ResolveLifecycleTransitions {
        export type AsObject = {

            resolutionsMap: Array<[string, UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.AsObject]>,
        }


        export class Resolution extends jspb.Message { 
            getAction(): UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.Action;
            setAction(value: UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.Action): Resolution;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Resolution.AsObject;
            static toObject(includeInstance: boolean, msg: Resolution): Resolution.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Resolution, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Resolution;
            static deserializeBinaryFromReader(message: Resolution, reader: jspb.BinaryReader): Resolution;
        }

        export namespace Resolution {
            export type AsObject = {
                action: UpdateSandboxRequest.ResolveLifecycleTransitions.Resolution.Action,
            }

            export enum Action {
    INVALID = 0,
    SKIP = 1,
    RETRY = 2,
    ABORT = 3,
            }

        }

    }


    export enum UpdateCase {
        UPDATE_NOT_SET = 0,
        RESYNC = 5,
        RECOMPOSE = 6,
        ALTER_WORKLOAD_CONFIG = 7,
        OPERATIONAL_STATE = 8,
        ALTER_ENDPOINT_CONFIG = 9,
        ACCESS_CONTROL = 10,
        REBUILD_WORKLOADS = 11,
        COMPOSE_DYNAMIC = 12,
        ALTER_ENV = 13,
        ACTIVITIES = 14,
        DETACH_FROM_POOL = 15,
        RESOLVE_LIFECYCLE_TRANSITIONS = 16,
    }

}

export class UpdateSandboxResponse extends jspb.Message { 

    hasSandbox(): boolean;
    clearSandbox(): void;
    getSandbox(): sandboxes_api_v1_sandbox_pb.Sandbox | undefined;
    setSandbox(value?: sandboxes_api_v1_sandbox_pb.Sandbox): UpdateSandboxResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSandboxResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSandboxResponse): UpdateSandboxResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSandboxResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSandboxResponse;
    static deserializeBinaryFromReader(message: UpdateSandboxResponse, reader: jspb.BinaryReader): UpdateSandboxResponse;
}

export namespace UpdateSandboxResponse {
    export type AsObject = {
        sandbox?: sandboxes_api_v1_sandbox_pb.Sandbox.AsObject,
    }
}

export class DeleteSandboxRequest extends jspb.Message { 

    hasSandbox(): boolean;
    clearSandbox(): void;
    getSandbox(): sandboxes_api_v1_sandbox_pb.Sandbox | undefined;
    setSandbox(value?: sandboxes_api_v1_sandbox_pb.Sandbox): DeleteSandboxRequest;
    getSkipLifecycle(): boolean;
    setSkipLifecycle(value: boolean): DeleteSandboxRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSandboxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSandboxRequest): DeleteSandboxRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSandboxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSandboxRequest;
    static deserializeBinaryFromReader(message: DeleteSandboxRequest, reader: jspb.BinaryReader): DeleteSandboxRequest;
}

export namespace DeleteSandboxRequest {
    export type AsObject = {
        sandbox?: sandboxes_api_v1_sandbox_pb.Sandbox.AsObject,
        skipLifecycle: boolean,
    }
}

export class DeleteSandboxResponse extends jspb.Message { 

    hasSandbox(): boolean;
    clearSandbox(): void;
    getSandbox(): sandboxes_api_v1_sandbox_pb.Sandbox | undefined;
    setSandbox(value?: sandboxes_api_v1_sandbox_pb.Sandbox): DeleteSandboxResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSandboxResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSandboxResponse): DeleteSandboxResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSandboxResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSandboxResponse;
    static deserializeBinaryFromReader(message: DeleteSandboxResponse, reader: jspb.BinaryReader): DeleteSandboxResponse;
}

export namespace DeleteSandboxResponse {
    export type AsObject = {
        sandbox?: sandboxes_api_v1_sandbox_pb.Sandbox.AsObject,
    }
}

export class ListSecretsRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListSecretsRequest;
    clearFilterByIdsList(): void;
    getFilterByIdsList(): Array<string>;
    setFilterByIdsList(value: Array<string>): ListSecretsRequest;
    addFilterByIds(value: string, index?: number): string;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): ListSecretsRequest;
    addFilterByNames(value: string, index?: number): string;
    clearFilterByTypesList(): void;
    getFilterByTypesList(): Array<sandboxes_api_v1_secret_pb.Secret.Type>;
    setFilterByTypesList(value: Array<sandboxes_api_v1_secret_pb.Secret.Type>): ListSecretsRequest;
    addFilterByTypes(value: sandboxes_api_v1_secret_pb.Secret.Type, index?: number): sandboxes_api_v1_secret_pb.Secret.Type;
    clearFilterByStatesList(): void;
    getFilterByStatesList(): Array<sandboxes_api_v1_secret_pb.Secret.State>;
    setFilterByStatesList(value: Array<sandboxes_api_v1_secret_pb.Secret.State>): ListSecretsRequest;
    addFilterByStates(value: sandboxes_api_v1_secret_pb.Secret.State, index?: number): sandboxes_api_v1_secret_pb.Secret.State;
    getOwnerEmail(): string;
    setOwnerEmail(value: string): ListSecretsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecretsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecretsRequest): ListSecretsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecretsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecretsRequest;
    static deserializeBinaryFromReader(message: ListSecretsRequest, reader: jspb.BinaryReader): ListSecretsRequest;
}

export namespace ListSecretsRequest {
    export type AsObject = {
        orgId: string,
        filterByIdsList: Array<string>,
        filterByNamesList: Array<string>,
        filterByTypesList: Array<sandboxes_api_v1_secret_pb.Secret.Type>,
        filterByStatesList: Array<sandboxes_api_v1_secret_pb.Secret.State>,
        ownerEmail: string,
    }
}

export class ListSecretsResponse extends jspb.Message { 
    clearSecretsList(): void;
    getSecretsList(): Array<sandboxes_api_v1_secret_pb.Secret>;
    setSecretsList(value: Array<sandboxes_api_v1_secret_pb.Secret>): ListSecretsResponse;
    addSecrets(value?: sandboxes_api_v1_secret_pb.Secret, index?: number): sandboxes_api_v1_secret_pb.Secret;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListSecretsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListSecretsResponse): ListSecretsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListSecretsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListSecretsResponse;
    static deserializeBinaryFromReader(message: ListSecretsResponse, reader: jspb.BinaryReader): ListSecretsResponse;
}

export namespace ListSecretsResponse {
    export type AsObject = {
        secretsList: Array<sandboxes_api_v1_secret_pb.Secret.AsObject>,
    }
}

export class CreateSecretRequest extends jspb.Message { 

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): sandboxes_api_v1_secret_pb.Secret | undefined;
    setSecret(value?: sandboxes_api_v1_secret_pb.Secret): CreateSecretRequest;
    getUserOwned(): boolean;
    setUserOwned(value: boolean): CreateSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSecretRequest): CreateSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSecretRequest;
    static deserializeBinaryFromReader(message: CreateSecretRequest, reader: jspb.BinaryReader): CreateSecretRequest;
}

export namespace CreateSecretRequest {
    export type AsObject = {
        secret?: sandboxes_api_v1_secret_pb.Secret.AsObject,
        userOwned: boolean,
    }
}

export class CreateSecretResponse extends jspb.Message { 

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): sandboxes_api_v1_secret_pb.Secret | undefined;
    setSecret(value?: sandboxes_api_v1_secret_pb.Secret): CreateSecretResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSecretResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSecretResponse): CreateSecretResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSecretResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSecretResponse;
    static deserializeBinaryFromReader(message: CreateSecretResponse, reader: jspb.BinaryReader): CreateSecretResponse;
}

export namespace CreateSecretResponse {
    export type AsObject = {
        secret?: sandboxes_api_v1_secret_pb.Secret.AsObject,
    }
}

export class UpdateSecretRequest extends jspb.Message { 

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): sandboxes_api_v1_secret_pb.Secret | undefined;
    setSecret(value?: sandboxes_api_v1_secret_pb.Secret): UpdateSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSecretRequest): UpdateSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSecretRequest;
    static deserializeBinaryFromReader(message: UpdateSecretRequest, reader: jspb.BinaryReader): UpdateSecretRequest;
}

export namespace UpdateSecretRequest {
    export type AsObject = {
        secret?: sandboxes_api_v1_secret_pb.Secret.AsObject,
    }
}

export class UpdateSecretResponse extends jspb.Message { 

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): sandboxes_api_v1_secret_pb.Secret | undefined;
    setSecret(value?: sandboxes_api_v1_secret_pb.Secret): UpdateSecretResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSecretResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSecretResponse): UpdateSecretResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSecretResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSecretResponse;
    static deserializeBinaryFromReader(message: UpdateSecretResponse, reader: jspb.BinaryReader): UpdateSecretResponse;
}

export namespace UpdateSecretResponse {
    export type AsObject = {
        secret?: sandboxes_api_v1_secret_pb.Secret.AsObject,
    }
}

export class DeleteSecretRequest extends jspb.Message { 

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): sandboxes_api_v1_secret_pb.Secret | undefined;
    setSecret(value?: sandboxes_api_v1_secret_pb.Secret): DeleteSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSecretRequest): DeleteSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSecretRequest;
    static deserializeBinaryFromReader(message: DeleteSecretRequest, reader: jspb.BinaryReader): DeleteSecretRequest;
}

export namespace DeleteSecretRequest {
    export type AsObject = {
        secret?: sandboxes_api_v1_secret_pb.Secret.AsObject,
    }
}

export class DeleteSecretResponse extends jspb.Message { 

    hasSecret(): boolean;
    clearSecret(): void;
    getSecret(): sandboxes_api_v1_secret_pb.Secret | undefined;
    setSecret(value?: sandboxes_api_v1_secret_pb.Secret): DeleteSecretResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSecretResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSecretResponse): DeleteSecretResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSecretResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSecretResponse;
    static deserializeBinaryFromReader(message: DeleteSecretResponse, reader: jspb.BinaryReader): DeleteSecretResponse;
}

export namespace DeleteSecretResponse {
    export type AsObject = {
        secret?: sandboxes_api_v1_secret_pb.Secret.AsObject,
    }
}

export class SignWithSecretRequest extends jspb.Message { 
    getSecretId(): string;
    setSecretId(value: string): SignWithSecretRequest;
    getDigest(): Uint8Array | string;
    getDigest_asU8(): Uint8Array;
    getDigest_asB64(): string;
    setDigest(value: Uint8Array | string): SignWithSecretRequest;
    getHash(): SignWithSecretRequest.Hash;
    setHash(value: SignWithSecretRequest.Hash): SignWithSecretRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignWithSecretRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignWithSecretRequest): SignWithSecretRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignWithSecretRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignWithSecretRequest;
    static deserializeBinaryFromReader(message: SignWithSecretRequest, reader: jspb.BinaryReader): SignWithSecretRequest;
}

export namespace SignWithSecretRequest {
    export type AsObject = {
        secretId: string,
        digest: Uint8Array | string,
        hash: SignWithSecretRequest.Hash,
    }

    export enum Hash {
    UNSPECIFIED = 0,
    SHA1 = 1,
    SHA256 = 2,
    SHA384 = 3,
    SHA512 = 4,
    }

}

export class SignWithSecretResponse extends jspb.Message { 
    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): SignWithSecretResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignWithSecretResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignWithSecretResponse): SignWithSecretResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignWithSecretResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignWithSecretResponse;
    static deserializeBinaryFromReader(message: SignWithSecretResponse, reader: jspb.BinaryReader): SignWithSecretResponse;
}

export namespace SignWithSecretResponse {
    export type AsObject = {
        signature: Uint8Array | string,
    }
}

export class ListJobsRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListJobsRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): sandboxes_api_v1_common_pb.Pagination.Request | undefined;
    setPage(value?: sandboxes_api_v1_common_pb.Pagination.Request): ListJobsRequest;

    hasMetaFilter(): boolean;
    clearMetaFilter(): void;
    getMetaFilter(): sandboxes_api_v1_object_pb.ObjectMetaFilter | undefined;
    setMetaFilter(value?: sandboxes_api_v1_object_pb.ObjectMetaFilter): ListJobsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListJobsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListJobsRequest): ListJobsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListJobsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListJobsRequest;
    static deserializeBinaryFromReader(message: ListJobsRequest, reader: jspb.BinaryReader): ListJobsRequest;
}

export namespace ListJobsRequest {
    export type AsObject = {
        orgId: string,
        page?: sandboxes_api_v1_common_pb.Pagination.Request.AsObject,
        metaFilter?: sandboxes_api_v1_object_pb.ObjectMetaFilter.AsObject,
    }
}

export class ListJobsResponse extends jspb.Message { 
    clearJobsList(): void;
    getJobsList(): Array<sandboxes_api_v1_job_pb.Job>;
    setJobsList(value: Array<sandboxes_api_v1_job_pb.Job>): ListJobsResponse;
    addJobs(value?: sandboxes_api_v1_job_pb.Job, index?: number): sandboxes_api_v1_job_pb.Job;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): sandboxes_api_v1_common_pb.Pagination.Response | undefined;
    setPage(value?: sandboxes_api_v1_common_pb.Pagination.Response): ListJobsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListJobsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListJobsResponse): ListJobsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListJobsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListJobsResponse;
    static deserializeBinaryFromReader(message: ListJobsResponse, reader: jspb.BinaryReader): ListJobsResponse;
}

export namespace ListJobsResponse {
    export type AsObject = {
        jobsList: Array<sandboxes_api_v1_job_pb.Job.AsObject>,
        page?: sandboxes_api_v1_common_pb.Pagination.Response.AsObject,
    }
}

export class CreateJobRequest extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): CreateJobRequest;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): sandboxes_api_v1_job_pb.Job.Spec | undefined;
    setSpec(value?: sandboxes_api_v1_job_pb.Job.Spec): CreateJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateJobRequest): CreateJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateJobRequest;
    static deserializeBinaryFromReader(message: CreateJobRequest, reader: jspb.BinaryReader): CreateJobRequest;
}

export namespace CreateJobRequest {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        spec?: sandboxes_api_v1_job_pb.Job.Spec.AsObject,
    }
}

export class CreateJobResponse extends jspb.Message { 

    hasJob(): boolean;
    clearJob(): void;
    getJob(): sandboxes_api_v1_job_pb.Job | undefined;
    setJob(value?: sandboxes_api_v1_job_pb.Job): CreateJobResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateJobResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateJobResponse): CreateJobResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateJobResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateJobResponse;
    static deserializeBinaryFromReader(message: CreateJobResponse, reader: jspb.BinaryReader): CreateJobResponse;
}

export namespace CreateJobResponse {
    export type AsObject = {
        job?: sandboxes_api_v1_job_pb.Job.AsObject,
    }
}

export class UpdateJobRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): UpdateJobRequest;
    getJobId(): string;
    setJobId(value: string): UpdateJobRequest;
    getVersion(): string;
    setVersion(value: string): UpdateJobRequest;
    getName(): string;
    setName(value: string): UpdateJobRequest;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    hasSpec(): boolean;
    clearSpec(): void;
    getSpec(): UpdateJobRequest.Spec | undefined;
    setSpec(value?: UpdateJobRequest.Spec): UpdateJobRequest;

    hasCancel(): boolean;
    clearCancel(): void;
    getCancel(): UpdateJobRequest.Cancel | undefined;
    setCancel(value?: UpdateJobRequest.Cancel): UpdateJobRequest;

    hasTriggerConfig(): boolean;
    clearTriggerConfig(): void;
    getTriggerConfig(): UpdateJobRequest.TriggerConfig | undefined;
    setTriggerConfig(value?: UpdateJobRequest.TriggerConfig): UpdateJobRequest;

    hasManualTrigger(): boolean;
    clearManualTrigger(): void;
    getManualTrigger(): UpdateJobRequest.ManualTrigger | undefined;
    setManualTrigger(value?: UpdateJobRequest.ManualTrigger): UpdateJobRequest;

    hasGoldenExecution(): boolean;
    clearGoldenExecution(): void;
    getGoldenExecution(): UpdateJobRequest.GoldenExecution | undefined;
    setGoldenExecution(value?: UpdateJobRequest.GoldenExecution): UpdateJobRequest;

    getUpdateCase(): UpdateJobRequest.UpdateCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateJobRequest): UpdateJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateJobRequest;
    static deserializeBinaryFromReader(message: UpdateJobRequest, reader: jspb.BinaryReader): UpdateJobRequest;
}

export namespace UpdateJobRequest {
    export type AsObject = {
        orgId: string,
        jobId: string,
        version: string,
        name: string,

        labelsMap: Array<[string, string]>,
        spec?: UpdateJobRequest.Spec.AsObject,
        cancel?: UpdateJobRequest.Cancel.AsObject,
        triggerConfig?: UpdateJobRequest.TriggerConfig.AsObject,
        manualTrigger?: UpdateJobRequest.ManualTrigger.AsObject,
        goldenExecution?: UpdateJobRequest.GoldenExecution.AsObject,
    }


    export class Spec extends jspb.Message { 

        hasSpec(): boolean;
        clearSpec(): void;
        getSpec(): sandboxes_api_v1_job_pb.Job.Spec | undefined;
        setSpec(value?: sandboxes_api_v1_job_pb.Job.Spec): Spec;

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
            spec?: sandboxes_api_v1_job_pb.Job.Spec.AsObject,
        }
    }

    export class Cancel extends jspb.Message { 
        getExecutionId(): number;
        setExecutionId(value: number): Cancel;

        hasCancellation(): boolean;
        clearCancellation(): void;
        getCancellation(): sandboxes_api_v1_job_pb.Job.Cancellation | undefined;
        setCancellation(value?: sandboxes_api_v1_job_pb.Job.Cancellation): Cancel;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Cancel.AsObject;
        static toObject(includeInstance: boolean, msg: Cancel): Cancel.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Cancel, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Cancel;
        static deserializeBinaryFromReader(message: Cancel, reader: jspb.BinaryReader): Cancel;
    }

    export namespace Cancel {
        export type AsObject = {
            executionId: number,
            cancellation?: sandboxes_api_v1_job_pb.Job.Cancellation.AsObject,
        }
    }

    export class TriggerConfig extends jspb.Message { 
        getDisabled(): boolean;
        setDisabled(value: boolean): TriggerConfig;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TriggerConfig.AsObject;
        static toObject(includeInstance: boolean, msg: TriggerConfig): TriggerConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TriggerConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TriggerConfig;
        static deserializeBinaryFromReader(message: TriggerConfig, reader: jspb.BinaryReader): TriggerConfig;
    }

    export namespace TriggerConfig {
        export type AsObject = {
            disabled: boolean,
        }
    }

    export class ManualTrigger extends jspb.Message { 
        getMessage(): string;
        setMessage(value: string): ManualTrigger;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ManualTrigger.AsObject;
        static toObject(includeInstance: boolean, msg: ManualTrigger): ManualTrigger.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ManualTrigger, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ManualTrigger;
        static deserializeBinaryFromReader(message: ManualTrigger, reader: jspb.BinaryReader): ManualTrigger;
    }

    export namespace ManualTrigger {
        export type AsObject = {
            message: string,
        }
    }

    export class GoldenExecution extends jspb.Message { 

        hasGoldenExecution(): boolean;
        clearGoldenExecution(): void;
        getGoldenExecution(): sandboxes_api_v1_job_pb.Job.GoldenExecution | undefined;
        setGoldenExecution(value?: sandboxes_api_v1_job_pb.Job.GoldenExecution): GoldenExecution;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GoldenExecution.AsObject;
        static toObject(includeInstance: boolean, msg: GoldenExecution): GoldenExecution.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GoldenExecution, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GoldenExecution;
        static deserializeBinaryFromReader(message: GoldenExecution, reader: jspb.BinaryReader): GoldenExecution;
    }

    export namespace GoldenExecution {
        export type AsObject = {
            goldenExecution?: sandboxes_api_v1_job_pb.Job.GoldenExecution.AsObject,
        }
    }


    export enum UpdateCase {
        UPDATE_NOT_SET = 0,
        SPEC = 6,
        CANCEL = 7,
        TRIGGER_CONFIG = 8,
        MANUAL_TRIGGER = 9,
        GOLDEN_EXECUTION = 10,
    }

}

export class UpdateJobResponse extends jspb.Message { 

    hasJob(): boolean;
    clearJob(): void;
    getJob(): sandboxes_api_v1_job_pb.Job | undefined;
    setJob(value?: sandboxes_api_v1_job_pb.Job): UpdateJobResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateJobResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateJobResponse): UpdateJobResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateJobResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateJobResponse;
    static deserializeBinaryFromReader(message: UpdateJobResponse, reader: jspb.BinaryReader): UpdateJobResponse;
}

export namespace UpdateJobResponse {
    export type AsObject = {
        job?: sandboxes_api_v1_job_pb.Job.AsObject,
    }
}

export class DeleteJobRequest extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): DeleteJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteJobRequest): DeleteJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteJobRequest;
    static deserializeBinaryFromReader(message: DeleteJobRequest, reader: jspb.BinaryReader): DeleteJobRequest;
}

export namespace DeleteJobRequest {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
    }
}

export class DeleteJobResponse extends jspb.Message { 

    hasJob(): boolean;
    clearJob(): void;
    getJob(): sandboxes_api_v1_job_pb.Job | undefined;
    setJob(value?: sandboxes_api_v1_job_pb.Job): DeleteJobResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteJobResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteJobResponse): DeleteJobResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteJobResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteJobResponse;
    static deserializeBinaryFromReader(message: DeleteJobResponse, reader: jspb.BinaryReader): DeleteJobResponse;
}

export namespace DeleteJobResponse {
    export type AsObject = {
        job?: sandboxes_api_v1_job_pb.Job.AsObject,
    }
}

export class ListResourcesRequest extends jspb.Message { 
    getOrgId(): string;
    setOrgId(value: string): ListResourcesRequest;
    getResourceType(): string;
    setResourceType(value: string): ListResourcesRequest;
    clearFilterByIdsList(): void;
    getFilterByIdsList(): Array<string>;
    setFilterByIdsList(value: Array<string>): ListResourcesRequest;
    addFilterByIds(value: string, index?: number): string;
    clearFilterByNamesList(): void;
    getFilterByNamesList(): Array<string>;
    setFilterByNamesList(value: Array<string>): ListResourcesRequest;
    addFilterByNames(value: string, index?: number): string;
    getOwnerId(): string;
    setOwnerId(value: string): ListResourcesRequest;
    getMetaOnly(): boolean;
    setMetaOnly(value: boolean): ListResourcesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResourcesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListResourcesRequest): ListResourcesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResourcesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResourcesRequest;
    static deserializeBinaryFromReader(message: ListResourcesRequest, reader: jspb.BinaryReader): ListResourcesRequest;
}

export namespace ListResourcesRequest {
    export type AsObject = {
        orgId: string,
        resourceType: string,
        filterByIdsList: Array<string>,
        filterByNamesList: Array<string>,
        ownerId: string,
        metaOnly: boolean,
    }
}

export class ListResourcesResponse extends jspb.Message { 
    clearResourcesList(): void;
    getResourcesList(): Array<sandboxes_api_v1_resource_pb.Resource>;
    setResourcesList(value: Array<sandboxes_api_v1_resource_pb.Resource>): ListResourcesResponse;
    addResources(value?: sandboxes_api_v1_resource_pb.Resource, index?: number): sandboxes_api_v1_resource_pb.Resource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListResourcesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListResourcesResponse): ListResourcesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListResourcesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListResourcesResponse;
    static deserializeBinaryFromReader(message: ListResourcesResponse, reader: jspb.BinaryReader): ListResourcesResponse;
}

export namespace ListResourcesResponse {
    export type AsObject = {
        resourcesList: Array<sandboxes_api_v1_resource_pb.Resource.AsObject>,
    }
}

export class CreateResourceRequest extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): CreateResourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResourceRequest): CreateResourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResourceRequest;
    static deserializeBinaryFromReader(message: CreateResourceRequest, reader: jspb.BinaryReader): CreateResourceRequest;
}

export namespace CreateResourceRequest {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class CreateResourceResponse extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): CreateResourceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResourceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResourceResponse): CreateResourceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResourceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResourceResponse;
    static deserializeBinaryFromReader(message: CreateResourceResponse, reader: jspb.BinaryReader): CreateResourceResponse;
}

export namespace CreateResourceResponse {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class UpdateResourceRequest extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): UpdateResourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResourceRequest): UpdateResourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResourceRequest;
    static deserializeBinaryFromReader(message: UpdateResourceRequest, reader: jspb.BinaryReader): UpdateResourceRequest;
}

export namespace UpdateResourceRequest {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class UpdateResourceResponse extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): UpdateResourceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResourceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResourceResponse): UpdateResourceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResourceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResourceResponse;
    static deserializeBinaryFromReader(message: UpdateResourceResponse, reader: jspb.BinaryReader): UpdateResourceResponse;
}

export namespace UpdateResourceResponse {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class DeleteResourceRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteResourceRequest;
    getVersion(): string;
    setVersion(value: string): DeleteResourceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResourceRequest): DeleteResourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResourceRequest;
    static deserializeBinaryFromReader(message: DeleteResourceRequest, reader: jspb.BinaryReader): DeleteResourceRequest;
}

export namespace DeleteResourceRequest {
    export type AsObject = {
        id: string,
        version: string,
    }
}

export class DeleteResourceResponse extends jspb.Message { 

    hasResource(): boolean;
    clearResource(): void;
    getResource(): sandboxes_api_v1_resource_pb.Resource | undefined;
    setResource(value?: sandboxes_api_v1_resource_pb.Resource): DeleteResourceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResourceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResourceResponse): DeleteResourceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResourceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResourceResponse;
    static deserializeBinaryFromReader(message: DeleteResourceResponse, reader: jspb.BinaryReader): DeleteResourceResponse;
}

export namespace DeleteResourceResponse {
    export type AsObject = {
        resource?: sandboxes_api_v1_resource_pb.Resource.AsObject,
    }
}

export class ReportEventsRequest extends jspb.Message { 
    getEventType(): string;
    setEventType(value: string): ReportEventsRequest;
    clearEventsList(): void;
    getEventsList(): Array<ReportEventsRequest.OpaqueEvent>;
    setEventsList(value: Array<ReportEventsRequest.OpaqueEvent>): ReportEventsRequest;
    addEvents(value?: ReportEventsRequest.OpaqueEvent, index?: number): ReportEventsRequest.OpaqueEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReportEventsRequest): ReportEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportEventsRequest;
    static deserializeBinaryFromReader(message: ReportEventsRequest, reader: jspb.BinaryReader): ReportEventsRequest;
}

export namespace ReportEventsRequest {
    export type AsObject = {
        eventType: string,
        eventsList: Array<ReportEventsRequest.OpaqueEvent.AsObject>,
    }


    export class OpaqueEvent extends jspb.Message { 
        getData(): Uint8Array | string;
        getData_asU8(): Uint8Array;
        getData_asB64(): string;
        setData(value: Uint8Array | string): OpaqueEvent;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OpaqueEvent.AsObject;
        static toObject(includeInstance: boolean, msg: OpaqueEvent): OpaqueEvent.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OpaqueEvent, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OpaqueEvent;
        static deserializeBinaryFromReader(message: OpaqueEvent, reader: jspb.BinaryReader): OpaqueEvent;
    }

    export namespace OpaqueEvent {
        export type AsObject = {
            data: Uint8Array | string,
        }
    }

}

export class ReportEventsResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReportEventsResponse): ReportEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportEventsResponse;
    static deserializeBinaryFromReader(message: ReportEventsResponse, reader: jspb.BinaryReader): ReportEventsResponse;
}

export namespace ReportEventsResponse {
    export type AsObject = {
    }
}

export class ClientMetric extends jspb.Message { 
    getName(): string;
    setName(value: string): ClientMetric;
    getValue(): number;
    setValue(value: number): ClientMetric;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientMetric.AsObject;
    static toObject(includeInstance: boolean, msg: ClientMetric): ClientMetric.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientMetric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientMetric;
    static deserializeBinaryFromReader(message: ClientMetric, reader: jspb.BinaryReader): ClientMetric;
}

export namespace ClientMetric {
    export type AsObject = {
        name: string,
        value: number,

        labelsMap: Array<[string, string]>,
    }
}

export class ReportMetricsRequest extends jspb.Message { 
    clearMetricsList(): void;
    getMetricsList(): Array<ClientMetric>;
    setMetricsList(value: Array<ClientMetric>): ReportMetricsRequest;
    addMetrics(value?: ClientMetric, index?: number): ClientMetric;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReportMetricsRequest): ReportMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportMetricsRequest;
    static deserializeBinaryFromReader(message: ReportMetricsRequest, reader: jspb.BinaryReader): ReportMetricsRequest;
}

export namespace ReportMetricsRequest {
    export type AsObject = {
        metricsList: Array<ClientMetric.AsObject>,
    }
}

export class ReportMetricsResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportMetricsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReportMetricsResponse): ReportMetricsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportMetricsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportMetricsResponse;
    static deserializeBinaryFromReader(message: ReportMetricsResponse, reader: jspb.BinaryReader): ReportMetricsResponse;
}

export namespace ReportMetricsResponse {
    export type AsObject = {
    }
}
