// package: sandboxes.api.v1
// file: sandboxes/api/v1/org.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as sandboxes_api_v1_common_pb from "../../../sandboxes/api/v1/common_pb";
import * as sandboxes_api_v1_object_pb from "../../../sandboxes/api/v1/object_pb";
import * as sandboxes_api_v1_sandbox_pb from "../../../sandboxes/api/v1/sandbox_pb";
import * as sandboxes_api_v1_user_pb from "../../../sandboxes/api/v1/user_pb";

export class Org extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): Org;
    clearMembersList(): void;
    getMembersList(): Array<Org.Membership>;
    setMembersList(value: Array<Org.Membership>): Org;
    addMembers(value?: Org.Membership, index?: number): Org.Membership;
    clearDomainsList(): void;
    getDomainsList(): Array<string>;
    setDomainsList(value: Array<string>): Org;
    addDomains(value: string, index?: number): string;

    getFeaturesMap(): jspb.Map<string, string>;
    clearFeaturesMap(): void;
    getSiteId(): string;
    setSiteId(value: string): Org;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): Org.Settings | undefined;
    setSettings(value?: Org.Settings): Org;
    getDomainSigninMode(): Org.DomainSignInMode;
    setDomainSigninMode(value: Org.DomainSignInMode): Org;

    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): Policy | undefined;
    setPolicy(value?: Policy): Org;
    clearSettingsOverridesList(): void;
    getSettingsOverridesList(): Array<Org.SettingsOverride>;
    setSettingsOverridesList(value: Array<Org.SettingsOverride>): Org;
    addSettingsOverrides(value?: Org.SettingsOverride, index?: number): Org.SettingsOverride;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Org.AsObject;
    static toObject(includeInstance: boolean, msg: Org): Org.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Org, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Org;
    static deserializeBinaryFromReader(message: Org, reader: jspb.BinaryReader): Org;
}

export namespace Org {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        membersList: Array<Org.Membership.AsObject>,
        domainsList: Array<string>,

        featuresMap: Array<[string, string]>,
        siteId: string,
        settings?: Org.Settings.AsObject,
        domainSigninMode: Org.DomainSignInMode,
        policy?: Policy.AsObject,
        settingsOverridesList: Array<Org.SettingsOverride.AsObject>,
    }


    export class Membership extends jspb.Message { 
        getUserId(): string;
        setUserId(value: string): Membership;
        getState(): number;
        setState(value: number): Membership;
        getKind(): Org.Membership.Kind;
        setKind(value: Org.Membership.Kind): Membership;
        getAdmin(): boolean;
        setAdmin(value: boolean): Membership;
        clearTagsList(): void;
        getTagsList(): Array<string>;
        setTagsList(value: Array<string>): Membership;
        addTags(value: string, index?: number): string;

        hasOpaque(): boolean;
        clearOpaque(): void;
        getOpaque(): Org.Membership.Opaque | undefined;
        setOpaque(value?: Org.Membership.Opaque): Membership;

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
            userId: string,
            state: number,
            kind: Org.Membership.Kind,
            admin: boolean,
            tagsList: Array<string>,
            opaque?: Org.Membership.Opaque.AsObject,
        }


        export class Opaque extends jspb.Message { 
            getJson(): string;
            setJson(value: string): Opaque;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Opaque.AsObject;
            static toObject(includeInstance: boolean, msg: Opaque): Opaque.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Opaque, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Opaque;
            static deserializeBinaryFromReader(message: Opaque, reader: jspb.BinaryReader): Opaque;
        }

        export namespace Opaque {
            export type AsObject = {
                json: string,
            }
        }


        export enum StateMask {
    NONE = 0,
    DISABLED = 1,
        }

        export enum Kind {
    DEFAULT = 0,
    SYSTEM = 1,
    CUSTOM = 2,
        }

    }

    export class Settings extends jspb.Message { 
        getOverview(): string;
        setOverview(value: string): Settings;
        getSandboxSharedMode(): sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.SharedMode;
        setSandboxSharedMode(value: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.SharedMode): Settings;

        hasSandboxAlwaysOnExpiry(): boolean;
        clearSandboxAlwaysOnExpiry(): void;
        getSandboxAlwaysOnExpiry(): google_protobuf_duration_pb.Duration | undefined;
        setSandboxAlwaysOnExpiry(value?: google_protobuf_duration_pb.Duration): Settings;
        clearFavouriteAppsList(): void;
        getFavouriteAppsList(): Array<string>;
        setFavouriteAppsList(value: Array<string>): Settings;
        addFavouriteApps(value: string, index?: number): string;

        hasSandboxMaxIdleDuration(): boolean;
        clearSandboxMaxIdleDuration(): void;
        getSandboxMaxIdleDuration(): google_protobuf_duration_pb.Duration | undefined;
        setSandboxMaxIdleDuration(value?: google_protobuf_duration_pb.Duration): Settings;
        getMaxPinnedSandboxes(): number;
        setMaxPinnedSandboxes(value: number): Settings;

        hasSandboxRetention(): boolean;
        clearSandboxRetention(): void;
        getSandboxRetention(): google_protobuf_duration_pb.Duration | undefined;
        setSandboxRetention(value?: google_protobuf_duration_pb.Duration): Settings;
        clearBaseImagesList(): void;
        getBaseImagesList(): Array<Org.Settings.BaseImage>;
        setBaseImagesList(value: Array<Org.Settings.BaseImage>): Settings;
        addBaseImages(value?: Org.Settings.BaseImage, index?: number): Org.Settings.BaseImage;
        getDefaultBaseImage(): string;
        setDefaultBaseImage(value: string): Settings;
        getOnboarding(): string;
        setOnboarding(value: string): Settings;

        hasUi(): boolean;
        clearUi(): void;
        getUi(): Org.Settings.UI | undefined;
        setUi(value?: Org.Settings.UI): Settings;

        hasOnboardingConfig(): boolean;
        clearOnboardingConfig(): void;
        getOnboardingConfig(): Org.Settings.OnboardingConfig | undefined;
        setOnboardingConfig(value?: Org.Settings.OnboardingConfig): Settings;

        hasMemberAccess(): boolean;
        clearMemberAccess(): void;
        getMemberAccess(): Org.Settings.MemberAccess | undefined;
        setMemberAccess(value?: Org.Settings.MemberAccess): Settings;

        hasEnhancedAutoSuspension(): boolean;
        clearEnhancedAutoSuspension(): void;
        getEnhancedAutoSuspension(): Org.Settings.EnhancedAutoSuspension | undefined;
        setEnhancedAutoSuspension(value?: Org.Settings.EnhancedAutoSuspension): Settings;

        hasPrecacheSnapshots(): boolean;
        clearPrecacheSnapshots(): void;
        getPrecacheSnapshots(): Org.Settings.PrecacheSnapshots | undefined;
        setPrecacheSnapshots(value?: Org.Settings.PrecacheSnapshots): Settings;

        hasAutoSandboxSnapshot(): boolean;
        clearAutoSandboxSnapshot(): void;
        getAutoSandboxSnapshot(): Org.Settings.AutoSandboxSnapshot | undefined;
        setAutoSandboxSnapshot(value?: Org.Settings.AutoSandboxSnapshot): Settings;

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
            overview: string,
            sandboxSharedMode: sandboxes_api_v1_sandbox_pb.Sandbox.AccessControl.SharedMode,
            sandboxAlwaysOnExpiry?: google_protobuf_duration_pb.Duration.AsObject,
            favouriteAppsList: Array<string>,
            sandboxMaxIdleDuration?: google_protobuf_duration_pb.Duration.AsObject,
            maxPinnedSandboxes: number,
            sandboxRetention?: google_protobuf_duration_pb.Duration.AsObject,
            baseImagesList: Array<Org.Settings.BaseImage.AsObject>,
            defaultBaseImage: string,
            onboarding: string,
            ui?: Org.Settings.UI.AsObject,
            onboardingConfig?: Org.Settings.OnboardingConfig.AsObject,
            memberAccess?: Org.Settings.MemberAccess.AsObject,
            enhancedAutoSuspension?: Org.Settings.EnhancedAutoSuspension.AsObject,
            precacheSnapshots?: Org.Settings.PrecacheSnapshots.AsObject,
            autoSandboxSnapshot?: Org.Settings.AutoSandboxSnapshot.AsObject,
        }


        export class BaseImage extends jspb.Message { 
            getName(): string;
            setName(value: string): BaseImage;
            getImage(): string;
            setImage(value: string): BaseImage;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): BaseImage.AsObject;
            static toObject(includeInstance: boolean, msg: BaseImage): BaseImage.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: BaseImage, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): BaseImage;
            static deserializeBinaryFromReader(message: BaseImage, reader: jspb.BinaryReader): BaseImage;
        }

        export namespace BaseImage {
            export type AsObject = {
                name: string,
                image: string,
            }
        }

        export class UI extends jspb.Message { 
            getDefaultSuite(): Org.Settings.UI.Suite;
            setDefaultSuite(value: Org.Settings.UI.Suite): UI;
            clearSwitchControlsList(): void;
            getSwitchControlsList(): Array<Org.Settings.UI.SwitchControl>;
            setSwitchControlsList(value: Array<Org.Settings.UI.SwitchControl>): UI;
            addSwitchControls(value?: Org.Settings.UI.SwitchControl, index?: number): Org.Settings.UI.SwitchControl;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): UI.AsObject;
            static toObject(includeInstance: boolean, msg: UI): UI.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: UI, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): UI;
            static deserializeBinaryFromReader(message: UI, reader: jspb.BinaryReader): UI;
        }

        export namespace UI {
            export type AsObject = {
                defaultSuite: Org.Settings.UI.Suite,
                switchControlsList: Array<Org.Settings.UI.SwitchControl.AsObject>,
            }


            export class SwitchControl extends jspb.Message { 
                getSuite(): Org.Settings.UI.Suite;
                setSuite(value: Org.Settings.UI.Suite): SwitchControl;
                getAccess(): Org.Settings.UI.SwitchControl.Access;
                setAccess(value: Org.Settings.UI.SwitchControl.Access): SwitchControl;
                clearTagsList(): void;
                getTagsList(): Array<string>;
                setTagsList(value: Array<string>): SwitchControl;
                addTags(value: string, index?: number): string;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): SwitchControl.AsObject;
                static toObject(includeInstance: boolean, msg: SwitchControl): SwitchControl.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: SwitchControl, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): SwitchControl;
                static deserializeBinaryFromReader(message: SwitchControl, reader: jspb.BinaryReader): SwitchControl;
            }

            export namespace SwitchControl {
                export type AsObject = {
                    suite: Org.Settings.UI.Suite,
                    access: Org.Settings.UI.SwitchControl.Access,
                    tagsList: Array<string>,
                }

                export enum Access {
    DEFAULT = 0,
    ADMIN = 1,
    TAGS = 2,
                }

            }


            export enum Suite {
    DEFAULT = 0,
    WORKSPACE = 1,
    AGENTIC = 2,
            }

        }

        export class OnboardingConfig extends jspb.Message { 
            getMode(): Org.Settings.OnboardingConfig.Mode;
            setMode(value: Org.Settings.OnboardingConfig.Mode): OnboardingConfig;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): OnboardingConfig.AsObject;
            static toObject(includeInstance: boolean, msg: OnboardingConfig): OnboardingConfig.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: OnboardingConfig, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): OnboardingConfig;
            static deserializeBinaryFromReader(message: OnboardingConfig, reader: jspb.BinaryReader): OnboardingConfig;
        }

        export namespace OnboardingConfig {
            export type AsObject = {
                mode: Org.Settings.OnboardingConfig.Mode,
            }

            export enum Mode {
    DEFAULT = 0,
    DISABLED = 1,
    MANDATORY = 2,
    OPTIONAL = 3,
            }

        }

        export class MemberAccess extends jspb.Message { 
            getRestriction(): Org.Settings.MemberAccess.Restriction;
            setRestriction(value: Org.Settings.MemberAccess.Restriction): MemberAccess;
            clearRulesList(): void;
            getRulesList(): Array<Org.Settings.MemberAccess.Rule>;
            setRulesList(value: Array<Org.Settings.MemberAccess.Rule>): MemberAccess;
            addRules(value?: Org.Settings.MemberAccess.Rule, index?: number): Org.Settings.MemberAccess.Rule;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): MemberAccess.AsObject;
            static toObject(includeInstance: boolean, msg: MemberAccess): MemberAccess.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: MemberAccess, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): MemberAccess;
            static deserializeBinaryFromReader(message: MemberAccess, reader: jspb.BinaryReader): MemberAccess;
        }

        export namespace MemberAccess {
            export type AsObject = {
                restriction: Org.Settings.MemberAccess.Restriction,
                rulesList: Array<Org.Settings.MemberAccess.Rule.AsObject>,
            }


            export class NameMatcher extends jspb.Message { 

                hasPrefix(): boolean;
                clearPrefix(): void;
                getPrefix(): string;
                setPrefix(value: string): NameMatcher;

                hasPattern(): boolean;
                clearPattern(): void;
                getPattern(): string;
                setPattern(value: string): NameMatcher;

                getMatchCase(): NameMatcher.MatchCase;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): NameMatcher.AsObject;
                static toObject(includeInstance: boolean, msg: NameMatcher): NameMatcher.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: NameMatcher, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): NameMatcher;
                static deserializeBinaryFromReader(message: NameMatcher, reader: jspb.BinaryReader): NameMatcher;
            }

            export namespace NameMatcher {
                export type AsObject = {
                    prefix: string,
                    pattern: string,
                }

                export enum MatchCase {
                    MATCH_NOT_SET = 0,
                    PREFIX = 1,
                    PATTERN = 2,
                }

            }

            export class Rule extends jspb.Message { 
                clearTypesList(): void;
                getTypesList(): Array<Org.Settings.MemberAccess.ResourceType>;
                setTypesList(value: Array<Org.Settings.MemberAccess.ResourceType>): Rule;
                addTypes(value: Org.Settings.MemberAccess.ResourceType, index?: number): Org.Settings.MemberAccess.ResourceType;
                clearMatchNamesList(): void;
                getMatchNamesList(): Array<Org.Settings.MemberAccess.NameMatcher>;
                setMatchNamesList(value: Array<Org.Settings.MemberAccess.NameMatcher>): Rule;
                addMatchNames(value?: Org.Settings.MemberAccess.NameMatcher, index?: number): Org.Settings.MemberAccess.NameMatcher;
                clearActionsList(): void;
                getActionsList(): Array<Org.Settings.MemberAccess.Action>;
                setActionsList(value: Array<Org.Settings.MemberAccess.Action>): Rule;
                addActions(value: Org.Settings.MemberAccess.Action, index?: number): Org.Settings.MemberAccess.Action;

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
                    typesList: Array<Org.Settings.MemberAccess.ResourceType>,
                    matchNamesList: Array<Org.Settings.MemberAccess.NameMatcher.AsObject>,
                    actionsList: Array<Org.Settings.MemberAccess.Action>,
                }
            }


            export enum Restriction {
    UNSPECIFIED = 0,
    RESTRICTED = 1,
            }

            export enum ResourceType {
    ANY = 0,
    TEMPLATE = 1,
    SNAPSHOT = 2,
    SECRET = 3,
    SANDBOX = 4,
    ENDPOINT_ALIAS = 5,
            }

            export enum Action {
    NONE = 0,
    UPDATE = 1,
    ADMIN = 2,
            }

        }

        export class EnhancedAutoSuspension extends jspb.Message { 
            getIdleDetection(): boolean;
            setIdleDetection(value: boolean): EnhancedAutoSuspension;

            hasEffectiveHours(): boolean;
            clearEffectiveHours(): void;
            getEffectiveHours(): sandboxes_api_v1_common_pb.DailyTimeWindow | undefined;
            setEffectiveHours(value?: sandboxes_api_v1_common_pb.DailyTimeWindow): EnhancedAutoSuspension;

            getEffectiveHoursByRegionMap(): jspb.Map<string, sandboxes_api_v1_common_pb.DailyTimeWindow>;
            clearEffectiveHoursByRegionMap(): void;

            hasSandboxMaxIdleDuration(): boolean;
            clearSandboxMaxIdleDuration(): void;
            getSandboxMaxIdleDuration(): google_protobuf_duration_pb.Duration | undefined;
            setSandboxMaxIdleDuration(value?: google_protobuf_duration_pb.Duration): EnhancedAutoSuspension;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): EnhancedAutoSuspension.AsObject;
            static toObject(includeInstance: boolean, msg: EnhancedAutoSuspension): EnhancedAutoSuspension.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: EnhancedAutoSuspension, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): EnhancedAutoSuspension;
            static deserializeBinaryFromReader(message: EnhancedAutoSuspension, reader: jspb.BinaryReader): EnhancedAutoSuspension;
        }

        export namespace EnhancedAutoSuspension {
            export type AsObject = {
                idleDetection: boolean,
                effectiveHours?: sandboxes_api_v1_common_pb.DailyTimeWindow.AsObject,

                effectiveHoursByRegionMap: Array<[string, sandboxes_api_v1_common_pb.DailyTimeWindow.AsObject]>,
                sandboxMaxIdleDuration?: google_protobuf_duration_pb.Duration.AsObject,
            }
        }

        export class PrecacheSnapshots extends jspb.Message { 
            clearBaseSnapshotsList(): void;
            getBaseSnapshotsList(): Array<string>;
            setBaseSnapshotsList(value: Array<string>): PrecacheSnapshots;
            addBaseSnapshots(value: string, index?: number): string;
            clearFromTemplatesList(): void;
            getFromTemplatesList(): Array<Org.Settings.PrecacheSnapshots.FromTemplate>;
            setFromTemplatesList(value: Array<Org.Settings.PrecacheSnapshots.FromTemplate>): PrecacheSnapshots;
            addFromTemplates(value?: Org.Settings.PrecacheSnapshots.FromTemplate, index?: number): Org.Settings.PrecacheSnapshots.FromTemplate;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): PrecacheSnapshots.AsObject;
            static toObject(includeInstance: boolean, msg: PrecacheSnapshots): PrecacheSnapshots.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: PrecacheSnapshots, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): PrecacheSnapshots;
            static deserializeBinaryFromReader(message: PrecacheSnapshots, reader: jspb.BinaryReader): PrecacheSnapshots;
        }

        export namespace PrecacheSnapshots {
            export type AsObject = {
                baseSnapshotsList: Array<string>,
                fromTemplatesList: Array<Org.Settings.PrecacheSnapshots.FromTemplate.AsObject>,
            }


            export class FromTemplate extends jspb.Message { 
                getName(): string;
                setName(value: string): FromTemplate;
                clearFiltersList(): void;
                getFiltersList(): Array<Org.Settings.PrecacheSnapshots.FromTemplate.Filter>;
                setFiltersList(value: Array<Org.Settings.PrecacheSnapshots.FromTemplate.Filter>): FromTemplate;
                addFilters(value?: Org.Settings.PrecacheSnapshots.FromTemplate.Filter, index?: number): Org.Settings.PrecacheSnapshots.FromTemplate.Filter;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): FromTemplate.AsObject;
                static toObject(includeInstance: boolean, msg: FromTemplate): FromTemplate.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: FromTemplate, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): FromTemplate;
                static deserializeBinaryFromReader(message: FromTemplate, reader: jspb.BinaryReader): FromTemplate;
            }

            export namespace FromTemplate {
                export type AsObject = {
                    name: string,
                    filtersList: Array<Org.Settings.PrecacheSnapshots.FromTemplate.Filter.AsObject>,
                }


                export class Filter extends jspb.Message { 
                    getReject(): boolean;
                    setReject(value: boolean): Filter;
                    getWorkloadName(): string;
                    setWorkloadName(value: string): Filter;
                    getBaseSnapshot(): string;
                    setBaseSnapshot(value: string): Filter;

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
                        reject: boolean,
                        workloadName: string,
                        baseSnapshot: string,
                    }
                }

            }

        }

        export class AutoSandboxSnapshot extends jspb.Message { 
            getEnabled(): boolean;
            setEnabled(value: boolean): AutoSandboxSnapshot;
            clearExcludedTemplatesList(): void;
            getExcludedTemplatesList(): Array<string>;
            setExcludedTemplatesList(value: Array<string>): AutoSandboxSnapshot;
            addExcludedTemplates(value: string, index?: number): string;

            hasRetention(): boolean;
            clearRetention(): void;
            getRetention(): google_protobuf_duration_pb.Duration | undefined;
            setRetention(value?: google_protobuf_duration_pb.Duration): AutoSandboxSnapshot;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): AutoSandboxSnapshot.AsObject;
            static toObject(includeInstance: boolean, msg: AutoSandboxSnapshot): AutoSandboxSnapshot.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: AutoSandboxSnapshot, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): AutoSandboxSnapshot;
            static deserializeBinaryFromReader(message: AutoSandboxSnapshot, reader: jspb.BinaryReader): AutoSandboxSnapshot;
        }

        export namespace AutoSandboxSnapshot {
            export type AsObject = {
                enabled: boolean,
                excludedTemplatesList: Array<string>,
                retention?: google_protobuf_duration_pb.Duration.AsObject,
            }
        }

    }

    export class SettingsOverride extends jspb.Message { 
        getName(): string;
        setName(value: string): SettingsOverride;

        hasSandboxAlwaysOnExpiry(): boolean;
        clearSandboxAlwaysOnExpiry(): void;
        getSandboxAlwaysOnExpiry(): google_protobuf_duration_pb.Duration | undefined;
        setSandboxAlwaysOnExpiry(value?: google_protobuf_duration_pb.Duration): SettingsOverride;

        hasSandboxMaxIdleDuration(): boolean;
        clearSandboxMaxIdleDuration(): void;
        getSandboxMaxIdleDuration(): google_protobuf_duration_pb.Duration | undefined;
        setSandboxMaxIdleDuration(value?: google_protobuf_duration_pb.Duration): SettingsOverride;

        hasSandboxRetention(): boolean;
        clearSandboxRetention(): void;
        getSandboxRetention(): google_protobuf_duration_pb.Duration | undefined;
        setSandboxRetention(value?: google_protobuf_duration_pb.Duration): SettingsOverride;

        hasEnhancedAutoSuspension(): boolean;
        clearEnhancedAutoSuspension(): void;
        getEnhancedAutoSuspension(): Org.Settings.EnhancedAutoSuspension | undefined;
        setEnhancedAutoSuspension(value?: Org.Settings.EnhancedAutoSuspension): SettingsOverride;

        hasAutoSandboxSnapshot(): boolean;
        clearAutoSandboxSnapshot(): void;
        getAutoSandboxSnapshot(): Org.Settings.AutoSandboxSnapshot | undefined;
        setAutoSandboxSnapshot(value?: Org.Settings.AutoSandboxSnapshot): SettingsOverride;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SettingsOverride.AsObject;
        static toObject(includeInstance: boolean, msg: SettingsOverride): SettingsOverride.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SettingsOverride, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SettingsOverride;
        static deserializeBinaryFromReader(message: SettingsOverride, reader: jspb.BinaryReader): SettingsOverride;
    }

    export namespace SettingsOverride {
        export type AsObject = {
            name: string,
            sandboxAlwaysOnExpiry?: google_protobuf_duration_pb.Duration.AsObject,
            sandboxMaxIdleDuration?: google_protobuf_duration_pb.Duration.AsObject,
            sandboxRetention?: google_protobuf_duration_pb.Duration.AsObject,
            enhancedAutoSuspension?: Org.Settings.EnhancedAutoSuspension.AsObject,
            autoSandboxSnapshot?: Org.Settings.AutoSandboxSnapshot.AsObject,
        }
    }


    export enum DomainSignInMode {
    DEFAULT = 0,
    APPROVAL_NEEDED = 1,
    }

}

export class OrgWithMembers extends jspb.Message { 

    hasOrg(): boolean;
    clearOrg(): void;
    getOrg(): Org | undefined;
    setOrg(value?: Org): OrgWithMembers;
    clearMembersList(): void;
    getMembersList(): Array<sandboxes_api_v1_user_pb.User>;
    setMembersList(value: Array<sandboxes_api_v1_user_pb.User>): OrgWithMembers;
    addMembers(value?: sandboxes_api_v1_user_pb.User, index?: number): sandboxes_api_v1_user_pb.User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrgWithMembers.AsObject;
    static toObject(includeInstance: boolean, msg: OrgWithMembers): OrgWithMembers.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrgWithMembers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrgWithMembers;
    static deserializeBinaryFromReader(message: OrgWithMembers, reader: jspb.BinaryReader): OrgWithMembers;
}

export namespace OrgWithMembers {
    export type AsObject = {
        org?: Org.AsObject,
        membersList: Array<sandboxes_api_v1_user_pb.User.AsObject>,
    }
}

export class Folder extends jspb.Message { 

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): sandboxes_api_v1_object_pb.ObjectMeta | undefined;
    setMeta(value?: sandboxes_api_v1_object_pb.ObjectMeta): Folder;

    hasPolicy(): boolean;
    clearPolicy(): void;
    getPolicy(): Policy | undefined;
    setPolicy(value?: Policy): Folder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Folder.AsObject;
    static toObject(includeInstance: boolean, msg: Folder): Folder.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Folder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Folder;
    static deserializeBinaryFromReader(message: Folder, reader: jspb.BinaryReader): Folder;
}

export namespace Folder {
    export type AsObject = {
        meta?: sandboxes_api_v1_object_pb.ObjectMeta.AsObject,
        policy?: Policy.AsObject,
    }
}

export class Policy extends jspb.Message { 

    hasRoleBindings(): boolean;
    clearRoleBindings(): void;
    getRoleBindings(): Policy.RoleBindings | undefined;
    setRoleBindings(value?: Policy.RoleBindings): Policy;

    hasLocal(): boolean;
    clearLocal(): void;
    getLocal(): Policy | undefined;
    setLocal(value?: Policy): Policy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Policy.AsObject;
    static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Policy;
    static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
    export type AsObject = {
        roleBindings?: Policy.RoleBindings.AsObject,
        local?: Policy.AsObject,
    }


    export class RoleBindings extends jspb.Message { 

        getBindingsMap(): jspb.Map<string, string>;
        clearBindingsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RoleBindings.AsObject;
        static toObject(includeInstance: boolean, msg: RoleBindings): RoleBindings.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RoleBindings, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RoleBindings;
        static deserializeBinaryFromReader(message: RoleBindings, reader: jspb.BinaryReader): RoleBindings;
    }

    export namespace RoleBindings {
        export type AsObject = {

            bindingsMap: Array<[string, string]>,
        }
    }

}

export class Role extends jspb.Message { 
    clearAccessRulesList(): void;
    getAccessRulesList(): Array<Role.AccessRule>;
    setAccessRulesList(value: Array<Role.AccessRule>): Role;
    addAccessRules(value?: Role.AccessRule, index?: number): Role.AccessRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Role.AsObject;
    static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Role;
    static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
    export type AsObject = {
        accessRulesList: Array<Role.AccessRule.AsObject>,
    }


    export class ObjectMatcher extends jspb.Message { 
        clearKindsList(): void;
        getKindsList(): Array<string>;
        setKindsList(value: Array<string>): ObjectMatcher;
        addKinds(value: string, index?: number): string;

        getLabelsMap(): jspb.Map<string, sandboxes_api_v1_common_pb.StringMatcher>;
        clearLabelsMap(): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ObjectMatcher.AsObject;
        static toObject(includeInstance: boolean, msg: ObjectMatcher): ObjectMatcher.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ObjectMatcher, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ObjectMatcher;
        static deserializeBinaryFromReader(message: ObjectMatcher, reader: jspb.BinaryReader): ObjectMatcher;
    }

    export namespace ObjectMatcher {
        export type AsObject = {
            kindsList: Array<string>,

            labelsMap: Array<[string, sandboxes_api_v1_common_pb.StringMatcher.AsObject]>,
        }
    }

    export class AccessRule extends jspb.Message { 

        hasObject(): boolean;
        clearObject(): void;
        getObject(): Role.ObjectMatcher | undefined;
        setObject(value?: Role.ObjectMatcher): AccessRule;
        clearActionsList(): void;
        getActionsList(): Array<string>;
        setActionsList(value: Array<string>): AccessRule;
        addActions(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AccessRule.AsObject;
        static toObject(includeInstance: boolean, msg: AccessRule): AccessRule.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AccessRule, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AccessRule;
        static deserializeBinaryFromReader(message: AccessRule, reader: jspb.BinaryReader): AccessRule;
    }

    export namespace AccessRule {
        export type AsObject = {
            object?: Role.ObjectMatcher.AsObject,
            actionsList: Array<string>,
        }
    }

}
