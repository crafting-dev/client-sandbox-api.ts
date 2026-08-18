// package: sandboxes.api.v1
// file: sandboxes/api/v1/resource_system.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class System extends jspb.Message { 
    clearAdminOrgsList(): void;
    getAdminOrgsList(): Array<System.OrgDelegation>;
    setAdminOrgsList(value: Array<System.OrgDelegation>): System;
    addAdminOrgs(value?: System.OrgDelegation, index?: number): System.OrgDelegation;
    clearMembersList(): void;
    getMembersList(): Array<System.Member>;
    setMembersList(value: Array<System.Member>): System;
    addMembers(value?: System.Member, index?: number): System.Member;

    hasAlertConfig(): boolean;
    clearAlertConfig(): void;
    getAlertConfig(): System.AlertConfig | undefined;
    setAlertConfig(value?: System.AlertConfig): System;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): System.AsObject;
    static toObject(includeInstance: boolean, msg: System): System.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: System, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): System;
    static deserializeBinaryFromReader(message: System, reader: jspb.BinaryReader): System;
}

export namespace System {
    export type AsObject = {
        adminOrgsList: Array<System.OrgDelegation.AsObject>,
        membersList: Array<System.Member.AsObject>,
        alertConfig?: System.AlertConfig.AsObject,
    }


    export class OrgDelegation extends jspb.Message { 
        getOrgId(): string;
        setOrgId(value: string): OrgDelegation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OrgDelegation.AsObject;
        static toObject(includeInstance: boolean, msg: OrgDelegation): OrgDelegation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OrgDelegation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OrgDelegation;
        static deserializeBinaryFromReader(message: OrgDelegation, reader: jspb.BinaryReader): OrgDelegation;
    }

    export namespace OrgDelegation {
        export type AsObject = {
            orgId: string,
        }
    }

    export class Member extends jspb.Message { 
        getUserId(): string;
        setUserId(value: string): Member;
        getRole(): System.Member.Role;
        setRole(value: System.Member.Role): Member;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Member.AsObject;
        static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Member;
        static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
    }

    export namespace Member {
        export type AsObject = {
            userId: string,
            role: System.Member.Role,
        }

        export enum Role {
    UNSPECIFIED = 0,
    ADMIN = 1,
        }

    }

    export class AlertConfig extends jspb.Message { 
        getEnabled(): boolean;
        setEnabled(value: boolean): AlertConfig;
        clearAlertsList(): void;
        getAlertsList(): Array<string>;
        setAlertsList(value: Array<string>): AlertConfig;
        addAlerts(value: string, index?: number): string;
        clearReceiversList(): void;
        getReceiversList(): Array<System.AlertConfig.Receiver>;
        setReceiversList(value: Array<System.AlertConfig.Receiver>): AlertConfig;
        addReceivers(value?: System.AlertConfig.Receiver, index?: number): System.AlertConfig.Receiver;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AlertConfig.AsObject;
        static toObject(includeInstance: boolean, msg: AlertConfig): AlertConfig.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AlertConfig, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AlertConfig;
        static deserializeBinaryFromReader(message: AlertConfig, reader: jspb.BinaryReader): AlertConfig;
    }

    export namespace AlertConfig {
        export type AsObject = {
            enabled: boolean,
            alertsList: Array<string>,
            receiversList: Array<System.AlertConfig.Receiver.AsObject>,
        }


        export class Receiver extends jspb.Message { 
            getName(): string;
            setName(value: string): Receiver;

            hasProvider(): boolean;
            clearProvider(): void;
            getProvider(): System.AlertConfig.Receiver.Provider | undefined;
            setProvider(value?: System.AlertConfig.Receiver.Provider): Receiver;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Receiver.AsObject;
            static toObject(includeInstance: boolean, msg: Receiver): Receiver.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Receiver, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Receiver;
            static deserializeBinaryFromReader(message: Receiver, reader: jspb.BinaryReader): Receiver;
        }

        export namespace Receiver {
            export type AsObject = {
                name: string,
                provider?: System.AlertConfig.Receiver.Provider.AsObject,
            }


            export class Provider extends jspb.Message { 

                hasSlack(): boolean;
                clearSlack(): void;
                getSlack(): System.AlertConfig.Receiver.Provider.Slack | undefined;
                setSlack(value?: System.AlertConfig.Receiver.Provider.Slack): Provider;

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
                    slack?: System.AlertConfig.Receiver.Provider.Slack.AsObject,
                }


                export class Slack extends jspb.Message { 
                    getApiUrl(): string;
                    setApiUrl(value: string): Slack;
                    getBotToken(): string;
                    setBotToken(value: string): Slack;
                    getChannel(): string;
                    setChannel(value: string): Slack;

                    serializeBinary(): Uint8Array;
                    toObject(includeInstance?: boolean): Slack.AsObject;
                    static toObject(includeInstance: boolean, msg: Slack): Slack.AsObject;
                    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                    static serializeBinaryToWriter(message: Slack, writer: jspb.BinaryWriter): void;
                    static deserializeBinary(bytes: Uint8Array): Slack;
                    static deserializeBinaryFromReader(message: Slack, reader: jspb.BinaryReader): Slack;
                }

                export namespace Slack {
                    export type AsObject = {
                        apiUrl: string,
                        botToken: string,
                        channel: string,
                    }
                }


                export enum ProviderCase {
                    PROVIDER_NOT_SET = 0,
                    SLACK = 1,
                }

            }

        }

    }

}
