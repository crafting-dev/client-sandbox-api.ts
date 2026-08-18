// package: sandboxes.api.v1
// file: sandboxes/api/v1/common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class Error extends jspb.Message { 
    getCode(): number;
    setCode(value: number): Error;
    getMessage(): string;
    setMessage(value: string): Error;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): google_protobuf_any_pb.Any | undefined;
    setDetails(value?: google_protobuf_any_pb.Any): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        code: number,
        message: string,
        details?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class ValidationResult extends jspb.Message { 
    clearMessagesList(): void;
    getMessagesList(): Array<ValidationResult.Message>;
    setMessagesList(value: Array<ValidationResult.Message>): ValidationResult;
    addMessages(value?: ValidationResult.Message, index?: number): ValidationResult.Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidationResult.AsObject;
    static toObject(includeInstance: boolean, msg: ValidationResult): ValidationResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidationResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidationResult;
    static deserializeBinaryFromReader(message: ValidationResult, reader: jspb.BinaryReader): ValidationResult;
}

export namespace ValidationResult {
    export type AsObject = {
        messagesList: Array<ValidationResult.Message.AsObject>,
    }


    export class LinePos extends jspb.Message { 
        getRow(): number;
        setRow(value: number): LinePos;
        getCol(): number;
        setCol(value: number): LinePos;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): LinePos.AsObject;
        static toObject(includeInstance: boolean, msg: LinePos): LinePos.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: LinePos, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): LinePos;
        static deserializeBinaryFromReader(message: LinePos, reader: jspb.BinaryReader): LinePos;
    }

    export namespace LinePos {
        export type AsObject = {
            row: number,
            col: number,
        }
    }

    export class Range extends jspb.Message { 

        hasStart(): boolean;
        clearStart(): void;
        getStart(): ValidationResult.LinePos | undefined;
        setStart(value?: ValidationResult.LinePos): Range;

        hasEnd(): boolean;
        clearEnd(): void;
        getEnd(): ValidationResult.LinePos | undefined;
        setEnd(value?: ValidationResult.LinePos): Range;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Range.AsObject;
        static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Range;
        static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
    }

    export namespace Range {
        export type AsObject = {
            start?: ValidationResult.LinePos.AsObject,
            end?: ValidationResult.LinePos.AsObject,
        }
    }

    export class Location extends jspb.Message { 
        getPath(): string;
        setPath(value: string): Location;

        hasRange(): boolean;
        clearRange(): void;
        getRange(): ValidationResult.Range | undefined;
        setRange(value?: ValidationResult.Range): Location;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Location.AsObject;
        static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Location;
        static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
    }

    export namespace Location {
        export type AsObject = {
            path: string,
            range?: ValidationResult.Range.AsObject,
        }
    }

    export class Message extends jspb.Message { 
        getLevel(): ValidationResult.Level;
        setLevel(value: ValidationResult.Level): Message;

        hasLocation(): boolean;
        clearLocation(): void;
        getLocation(): ValidationResult.Location | undefined;
        setLocation(value?: ValidationResult.Location): Message;
        getMessage(): string;
        setMessage(value: string): Message;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Message.AsObject;
        static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Message;
        static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
    }

    export namespace Message {
        export type AsObject = {
            level: ValidationResult.Level,
            location?: ValidationResult.Location.AsObject,
            message: string,
        }
    }


    export enum Level {
    DEFAULT = 0,
    HINT = 1,
    WARNING = 2,
    ERROR = 3,
    }

}

export class RuntimeStatus extends jspb.Message { 
    getState(): RuntimeStatus.State;
    setState(value: RuntimeStatus.State): RuntimeStatus;

    hasReportedAt(): boolean;
    clearReportedAt(): void;
    getReportedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReportedAt(value?: google_protobuf_timestamp_pb.Timestamp): RuntimeStatus;
    clearConditionsList(): void;
    getConditionsList(): Array<RuntimeStatus.Condition>;
    setConditionsList(value: Array<RuntimeStatus.Condition>): RuntimeStatus;
    addConditions(value?: RuntimeStatus.Condition, index?: number): RuntimeStatus.Condition;

    hasError(): boolean;
    clearError(): void;
    getError(): Error | undefined;
    setError(value?: Error): RuntimeStatus;

    hasProgress(): boolean;
    clearProgress(): void;
    getProgress(): RuntimeStatus.Progress | undefined;
    setProgress(value?: RuntimeStatus.Progress): RuntimeStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeStatus.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeStatus): RuntimeStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeStatus;
    static deserializeBinaryFromReader(message: RuntimeStatus, reader: jspb.BinaryReader): RuntimeStatus;
}

export namespace RuntimeStatus {
    export type AsObject = {
        state: RuntimeStatus.State,
        reportedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        conditionsList: Array<RuntimeStatus.Condition.AsObject>,
        error?: Error.AsObject,
        progress?: RuntimeStatus.Progress.AsObject,
    }


    export class Assistance extends jspb.Message { 

        hasRequest(): boolean;
        clearRequest(): void;
        getRequest(): google_protobuf_any_pb.Any | undefined;
        setRequest(value?: google_protobuf_any_pb.Any): Assistance;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Assistance.AsObject;
        static toObject(includeInstance: boolean, msg: Assistance): Assistance.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Assistance, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Assistance;
        static deserializeBinaryFromReader(message: Assistance, reader: jspb.BinaryReader): Assistance;
    }

    export namespace Assistance {
        export type AsObject = {
            request?: google_protobuf_any_pb.Any.AsObject,
        }
    }

    export class Condition extends jspb.Message { 
        getId(): string;
        setId(value: string): Condition;
        getSeverity(): RuntimeStatus.Condition.Severity;
        setSeverity(value: RuntimeStatus.Condition.Severity): Condition;

        hasReportedAt(): boolean;
        clearReportedAt(): void;
        getReportedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setReportedAt(value?: google_protobuf_timestamp_pb.Timestamp): Condition;
        getMessage(): string;
        setMessage(value: string): Condition;

        hasDetails(): boolean;
        clearDetails(): void;
        getDetails(): google_protobuf_any_pb.Any | undefined;
        setDetails(value?: google_protobuf_any_pb.Any): Condition;

        hasAssistance(): boolean;
        clearAssistance(): void;
        getAssistance(): RuntimeStatus.Assistance | undefined;
        setAssistance(value?: RuntimeStatus.Assistance): Condition;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Condition.AsObject;
        static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Condition;
        static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
    }

    export namespace Condition {
        export type AsObject = {
            id: string,
            severity: RuntimeStatus.Condition.Severity,
            reportedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            message: string,
            details?: google_protobuf_any_pb.Any.AsObject,
            assistance?: RuntimeStatus.Assistance.AsObject,
        }

        export enum Severity {
    UNSPECIFIED = 0,
    NOTICE = 1,
    WARNING = 2,
    ERROR = 3,
    CRITICAL = 4,
        }

    }

    export class Progress extends jspb.Message { 
        getPercentage(): number;
        setPercentage(value: number): Progress;

        hasQuantity(): boolean;
        clearQuantity(): void;
        getQuantity(): RuntimeStatus.Progress.Quantity | undefined;
        setQuantity(value?: RuntimeStatus.Progress.Quantity): Progress;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Progress.AsObject;
        static toObject(includeInstance: boolean, msg: Progress): Progress.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Progress, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Progress;
        static deserializeBinaryFromReader(message: Progress, reader: jspb.BinaryReader): Progress;
    }

    export namespace Progress {
        export type AsObject = {
            percentage: number,
            quantity?: RuntimeStatus.Progress.Quantity.AsObject,
        }


        export class Quantity extends jspb.Message { 
            getTotal(): number;
            setTotal(value: number): Quantity;
            getCompleted(): number;
            setCompleted(value: number): Quantity;
            getUnit(): string;
            setUnit(value: string): Quantity;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Quantity.AsObject;
            static toObject(includeInstance: boolean, msg: Quantity): Quantity.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Quantity, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Quantity;
            static deserializeBinaryFromReader(message: Quantity, reader: jspb.BinaryReader): Quantity;
        }

        export namespace Quantity {
            export type AsObject = {
                total: number,
                completed: number,
                unit: string,
            }
        }

    }


    export enum State {
    UNKNOWN = 0,
    PENDING = 1,
    RUNNING = 2,
    STOPPED = 3,
    }

}

export class TaskStatus extends jspb.Message { 
    getId(): string;
    setId(value: string): TaskStatus;
    getName(): string;
    setName(value: string): TaskStatus;
    getDescription(): string;
    setDescription(value: string): TaskStatus;
    clearActionsList(): void;
    getActionsList(): Array<TaskStatus.Action>;
    setActionsList(value: Array<TaskStatus.Action>): TaskStatus;
    addActions(value?: TaskStatus.Action, index?: number): TaskStatus.Action;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): google_protobuf_any_pb.Any | undefined;
    setDetails(value?: google_protobuf_any_pb.Any): TaskStatus;

    getDataMap(): jspb.Map<string, string>;
    clearDataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskStatus.AsObject;
    static toObject(includeInstance: boolean, msg: TaskStatus): TaskStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskStatus;
    static deserializeBinaryFromReader(message: TaskStatus, reader: jspb.BinaryReader): TaskStatus;
}

export namespace TaskStatus {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        actionsList: Array<TaskStatus.Action.AsObject>,
        details?: google_protobuf_any_pb.Any.AsObject,

        dataMap: Array<[string, string]>,
    }


    export class Action extends jspb.Message { 
        getName(): string;
        setName(value: string): Action;
        getDescription(): string;
        setDescription(value: string): Action;
        clearRequiresList(): void;
        getRequiresList(): Array<string>;
        setRequiresList(value: Array<string>): Action;
        addRequires(value: string, index?: number): string;

        hasDetails(): boolean;
        clearDetails(): void;
        getDetails(): google_protobuf_any_pb.Any | undefined;
        setDetails(value?: google_protobuf_any_pb.Any): Action;

        hasStartedAt(): boolean;
        clearStartedAt(): void;
        getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): Action;

        hasStatus(): boolean;
        clearStatus(): void;
        getStatus(): RuntimeStatus | undefined;
        setStatus(value?: RuntimeStatus): Action;
        getLogName(): string;
        setLogName(value: string): Action;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Action.AsObject;
        static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Action;
        static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
    }

    export namespace Action {
        export type AsObject = {
            name: string,
            description: string,
            requiresList: Array<string>,
            details?: google_protobuf_any_pb.Any.AsObject,
            startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            status?: RuntimeStatus.AsObject,
            logName: string,
        }
    }

}

export class Pagination extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pagination.AsObject;
    static toObject(includeInstance: boolean, msg: Pagination): Pagination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pagination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pagination;
    static deserializeBinaryFromReader(message: Pagination, reader: jspb.BinaryReader): Pagination;
}

export namespace Pagination {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 
        getNextKey(): string;
        setNextKey(value: string): Request;
        getPageSize(): number;
        setPageSize(value: number): Request;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            nextKey: string,
            pageSize: number,
        }
    }

    export class Response extends jspb.Message { 
        getNextKey(): string;
        setNextKey(value: string): Response;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            nextKey: string,
        }
    }

}

export class StringMatcher extends jspb.Message { 

    hasOptions(): boolean;
    clearOptions(): void;
    getOptions(): StringMatcher.Options | undefined;
    setOptions(value?: StringMatcher.Options): StringMatcher;

    hasEquals(): boolean;
    clearEquals(): void;
    getEquals(): string;
    setEquals(value: string): StringMatcher;

    hasContains(): boolean;
    clearContains(): void;
    getContains(): string;
    setContains(value: string): StringMatcher;

    hasPrefixed(): boolean;
    clearPrefixed(): void;
    getPrefixed(): string;
    setPrefixed(value: string): StringMatcher;

    hasSuffixed(): boolean;
    clearSuffixed(): void;
    getSuffixed(): string;
    setSuffixed(value: string): StringMatcher;

    hasPattern(): boolean;
    clearPattern(): void;
    getPattern(): string;
    setPattern(value: string): StringMatcher;

    hasRegexp(): boolean;
    clearRegexp(): void;
    getRegexp(): string;
    setRegexp(value: string): StringMatcher;

    getRuleCase(): StringMatcher.RuleCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: StringMatcher): StringMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringMatcher;
    static deserializeBinaryFromReader(message: StringMatcher, reader: jspb.BinaryReader): StringMatcher;
}

export namespace StringMatcher {
    export type AsObject = {
        options?: StringMatcher.Options.AsObject,
        equals: string,
        contains: string,
        prefixed: string,
        suffixed: string,
        pattern: string,
        regexp: string,
    }


    export class Options extends jspb.Message { 
        getCaseInsensitive(): boolean;
        setCaseInsensitive(value: boolean): Options;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Options.AsObject;
        static toObject(includeInstance: boolean, msg: Options): Options.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Options, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Options;
        static deserializeBinaryFromReader(message: Options, reader: jspb.BinaryReader): Options;
    }

    export namespace Options {
        export type AsObject = {
            caseInsensitive: boolean,
        }
    }


    export enum RuleCase {
        RULE_NOT_SET = 0,
        EQUALS = 2,
        CONTAINS = 3,
        PREFIXED = 4,
        SUFFIXED = 5,
        PATTERN = 6,
        REGEXP = 7,
    }

}

export class SimpleNameMatcher extends jspb.Message { 

    hasPattern(): boolean;
    clearPattern(): void;
    getPattern(): string;
    setPattern(value: string): SimpleNameMatcher;

    hasRegexp(): boolean;
    clearRegexp(): void;
    getRegexp(): string;
    setRegexp(value: string): SimpleNameMatcher;

    getRuleCase(): SimpleNameMatcher.RuleCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleNameMatcher.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleNameMatcher): SimpleNameMatcher.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleNameMatcher, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleNameMatcher;
    static deserializeBinaryFromReader(message: SimpleNameMatcher, reader: jspb.BinaryReader): SimpleNameMatcher;
}

export namespace SimpleNameMatcher {
    export type AsObject = {
        pattern: string,
        regexp: string,
    }

    export enum RuleCase {
        RULE_NOT_SET = 0,
        PATTERN = 1,
        REGEXP = 2,
    }

}

export class DailyTimeWindow extends jspb.Message { 
    getStartMinute(): number;
    setStartMinute(value: number): DailyTimeWindow;
    getDurationMinutes(): number;
    setDurationMinutes(value: number): DailyTimeWindow;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DailyTimeWindow.AsObject;
    static toObject(includeInstance: boolean, msg: DailyTimeWindow): DailyTimeWindow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DailyTimeWindow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DailyTimeWindow;
    static deserializeBinaryFromReader(message: DailyTimeWindow, reader: jspb.BinaryReader): DailyTimeWindow;
}

export namespace DailyTimeWindow {
    export type AsObject = {
        startMinute: number,
        durationMinutes: number,
    }
}

export class WeeklyTimeWindow extends jspb.Message { 
    getLocation(): string;
    setLocation(value: string): WeeklyTimeWindow;

    hasDailyWindow(): boolean;
    clearDailyWindow(): void;
    getDailyWindow(): DailyTimeWindow | undefined;
    setDailyWindow(value?: DailyTimeWindow): WeeklyTimeWindow;
    clearDaysList(): void;
    getDaysList(): Array<number>;
    setDaysList(value: Array<number>): WeeklyTimeWindow;
    addDays(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WeeklyTimeWindow.AsObject;
    static toObject(includeInstance: boolean, msg: WeeklyTimeWindow): WeeklyTimeWindow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WeeklyTimeWindow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WeeklyTimeWindow;
    static deserializeBinaryFromReader(message: WeeklyTimeWindow, reader: jspb.BinaryReader): WeeklyTimeWindow;
}

export namespace WeeklyTimeWindow {
    export type AsObject = {
        location: string,
        dailyWindow?: DailyTimeWindow.AsObject,
        daysList: Array<number>,
    }
}

export class TimeSeriesSpan extends jspb.Message { 

    hasStart(): boolean;
    clearStart(): void;
    getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStart(value?: google_protobuf_timestamp_pb.Timestamp): TimeSeriesSpan;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): TimeSeriesSpan;

    hasResolution(): boolean;
    clearResolution(): void;
    getResolution(): google_protobuf_duration_pb.Duration | undefined;
    setResolution(value?: google_protobuf_duration_pb.Duration): TimeSeriesSpan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSeriesSpan.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSeriesSpan): TimeSeriesSpan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSeriesSpan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSeriesSpan;
    static deserializeBinaryFromReader(message: TimeSeriesSpan, reader: jspb.BinaryReader): TimeSeriesSpan;
}

export namespace TimeSeriesSpan {
    export type AsObject = {
        start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        duration?: google_protobuf_duration_pb.Duration.AsObject,
        resolution?: google_protobuf_duration_pb.Duration.AsObject,
    }
}

export class TimeSeries extends jspb.Message { 
    getMetric(): string;
    setMetric(value: string): TimeSeries;
    clearPointsList(): void;
    getPointsList(): Array<TimeSeriesDataPoint>;
    setPointsList(value: Array<TimeSeriesDataPoint>): TimeSeries;
    addPoints(value?: TimeSeriesDataPoint, index?: number): TimeSeriesDataPoint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSeries.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSeries): TimeSeries.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSeries, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSeries;
    static deserializeBinaryFromReader(message: TimeSeries, reader: jspb.BinaryReader): TimeSeries;
}

export namespace TimeSeries {
    export type AsObject = {
        metric: string,
        pointsList: Array<TimeSeriesDataPoint.AsObject>,
    }
}

export class TimeSeriesDataPoint extends jspb.Message { 

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): TimeSeriesDataPoint;
    getValue(): number;
    setValue(value: number): TimeSeriesDataPoint;

    getLabelsMap(): jspb.Map<string, string>;
    clearLabelsMap(): void;

    getNamedValuesMap(): jspb.Map<string, number>;
    clearNamedValuesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSeriesDataPoint.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSeriesDataPoint): TimeSeriesDataPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSeriesDataPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSeriesDataPoint;
    static deserializeBinaryFromReader(message: TimeSeriesDataPoint, reader: jspb.BinaryReader): TimeSeriesDataPoint;
}

export namespace TimeSeriesDataPoint {
    export type AsObject = {
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        value: number,

        labelsMap: Array<[string, string]>,

        namedValuesMap: Array<[string, number]>,
    }
}

export class TimeSeriesQuery extends jspb.Message { 
    getMetric(): string;
    setMetric(value: string): TimeSeriesQuery;

    getLabelFiltersMap(): jspb.Map<string, SimpleNameMatcher>;
    clearLabelFiltersMap(): void;

    hasSpan(): boolean;
    clearSpan(): void;
    getSpan(): TimeSeriesSpan | undefined;
    setSpan(value?: TimeSeriesSpan): TimeSeriesQuery;

    hasAggregation(): boolean;
    clearAggregation(): void;
    getAggregation(): TimeSeriesQuery.Aggregation | undefined;
    setAggregation(value?: TimeSeriesQuery.Aggregation): TimeSeriesQuery;
    getNextKey(): string;
    setNextKey(value: string): TimeSeriesQuery;
    getLimit(): number;
    setLimit(value: number): TimeSeriesQuery;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSeriesQuery.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSeriesQuery): TimeSeriesQuery.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSeriesQuery, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSeriesQuery;
    static deserializeBinaryFromReader(message: TimeSeriesQuery, reader: jspb.BinaryReader): TimeSeriesQuery;
}

export namespace TimeSeriesQuery {
    export type AsObject = {
        metric: string,

        labelFiltersMap: Array<[string, SimpleNameMatcher.AsObject]>,
        span?: TimeSeriesSpan.AsObject,
        aggregation?: TimeSeriesQuery.Aggregation.AsObject,
        nextKey: string,
        limit: number,
    }


    export class Aggregation extends jspb.Message { 

        hasSum(): boolean;
        clearSum(): void;
        getSum(): TimeSeriesQuery.Aggregation.Sum | undefined;
        setSum(value?: TimeSeriesQuery.Aggregation.Sum): Aggregation;

        hasCount(): boolean;
        clearCount(): void;
        getCount(): TimeSeriesQuery.Aggregation.Count | undefined;
        setCount(value?: TimeSeriesQuery.Aggregation.Count): Aggregation;
        clearGroupByList(): void;
        getGroupByList(): Array<string>;
        setGroupByList(value: Array<string>): Aggregation;
        addGroupBy(value: string, index?: number): string;

        getMethodCase(): Aggregation.MethodCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Aggregation.AsObject;
        static toObject(includeInstance: boolean, msg: Aggregation): Aggregation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Aggregation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Aggregation;
        static deserializeBinaryFromReader(message: Aggregation, reader: jspb.BinaryReader): Aggregation;
    }

    export namespace Aggregation {
        export type AsObject = {
            sum?: TimeSeriesQuery.Aggregation.Sum.AsObject,
            count?: TimeSeriesQuery.Aggregation.Count.AsObject,
            groupByList: Array<string>,
        }


        export class Sum extends jspb.Message { 
            clearNamedValuesList(): void;
            getNamedValuesList(): Array<string>;
            setNamedValuesList(value: Array<string>): Sum;
            addNamedValues(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Sum.AsObject;
            static toObject(includeInstance: boolean, msg: Sum): Sum.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Sum, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Sum;
            static deserializeBinaryFromReader(message: Sum, reader: jspb.BinaryReader): Sum;
        }

        export namespace Sum {
            export type AsObject = {
                namedValuesList: Array<string>,
            }
        }

        export class Count extends jspb.Message { 
            clearDistinctLabelsList(): void;
            getDistinctLabelsList(): Array<string>;
            setDistinctLabelsList(value: Array<string>): Count;
            addDistinctLabels(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Count.AsObject;
            static toObject(includeInstance: boolean, msg: Count): Count.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Count, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Count;
            static deserializeBinaryFromReader(message: Count, reader: jspb.BinaryReader): Count;
        }

        export namespace Count {
            export type AsObject = {
                distinctLabelsList: Array<string>,
            }
        }


        export enum MethodCase {
            METHOD_NOT_SET = 0,
            SUM = 1,
            COUNT = 2,
        }

    }

}
