/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.1
 * source: events.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace events {
    export class CidStoredEvent extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            cid?: string;
            timestamp?: number;
            hid?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("cid" in data && data.cid != undefined) {
                    this.cid = data.cid;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
                if ("hid" in data && data.hid != undefined) {
                    this.hid = data.hid;
                }
            }
        }
        get cid() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set cid(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get timestamp() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set timestamp(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get hid() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set hid(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            cid?: string;
            timestamp?: number;
            hid?: number;
        }): CidStoredEvent {
            const message = new CidStoredEvent({});
            if (data.cid != null) {
                message.cid = data.cid;
            }
            if (data.timestamp != null) {
                message.timestamp = data.timestamp;
            }
            if (data.hid != null) {
                message.hid = data.hid;
            }
            return message;
        }
        toObject() {
            const data: {
                cid?: string;
                timestamp?: number;
                hid?: number;
            } = {};
            if (this.cid != null) {
                data.cid = this.cid;
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp;
            }
            if (this.hid != null) {
                data.hid = this.hid;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.cid.length)
                writer.writeString(1, this.cid);
            if (this.timestamp != 0)
                writer.writeInt64(2, this.timestamp);
            if (this.hid != 0)
                writer.writeInt64(3, this.hid);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CidStoredEvent {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CidStoredEvent();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.cid = reader.readString();
                        break;
                    case 2:
                        message.timestamp = reader.readInt64();
                        break;
                    case 3:
                        message.hid = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CidStoredEvent {
            return CidStoredEvent.deserialize(bytes);
        }
    }
    export class EventRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            sequence_number?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sequence_number" in data && data.sequence_number != undefined) {
                    this.sequence_number = data.sequence_number;
                }
            }
        }
        get sequence_number() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set sequence_number(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            sequence_number?: number;
        }): EventRequest {
            const message = new EventRequest({});
            if (data.sequence_number != null) {
                message.sequence_number = data.sequence_number;
            }
            return message;
        }
        toObject() {
            const data: {
                sequence_number?: number;
            } = {};
            if (this.sequence_number != null) {
                data.sequence_number = this.sequence_number;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sequence_number != 0)
                writer.writeInt64(1, this.sequence_number);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sequence_number = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventRequest {
            return EventRequest.deserialize(bytes);
        }
    }
    export class EventsRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            sequence_number?: number;
            event_type?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sequence_number" in data && data.sequence_number != undefined) {
                    this.sequence_number = data.sequence_number;
                }
                if ("event_type" in data && data.event_type != undefined) {
                    this.event_type = data.event_type;
                }
            }
        }
        get sequence_number() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set sequence_number(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get event_type() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set event_type(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            sequence_number?: number;
            event_type?: string;
        }): EventsRequest {
            const message = new EventsRequest({});
            if (data.sequence_number != null) {
                message.sequence_number = data.sequence_number;
            }
            if (data.event_type != null) {
                message.event_type = data.event_type;
            }
            return message;
        }
        toObject() {
            const data: {
                sequence_number?: number;
                event_type?: string;
            } = {};
            if (this.sequence_number != null) {
                data.sequence_number = this.sequence_number;
            }
            if (this.event_type != null) {
                data.event_type = this.event_type;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sequence_number != 0)
                writer.writeInt64(1, this.sequence_number);
            if (this.event_type.length)
                writer.writeString(2, this.event_type);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sequence_number = reader.readInt64();
                        break;
                    case 2:
                        message.event_type = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventsRequest {
            return EventsRequest.deserialize(bytes);
        }
    }
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[3]];
        constructor(data?: any[] | ({
            event_type?: string;
            sequence_number?: number;
        } & (({
            cid_stored?: CidStoredEvent;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("event_type" in data && data.event_type != undefined) {
                    this.event_type = data.event_type;
                }
                if ("sequence_number" in data && data.sequence_number != undefined) {
                    this.sequence_number = data.sequence_number;
                }
                if ("cid_stored" in data && data.cid_stored != undefined) {
                    this.cid_stored = data.cid_stored;
                }
            }
        }
        get event_type() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set event_type(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get sequence_number() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set sequence_number(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get cid_stored() {
            return pb_1.Message.getWrapperField(this, CidStoredEvent, 3) as CidStoredEvent;
        }
        set cid_stored(value: CidStoredEvent) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_cid_stored() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get event() {
            const cases: {
                [index: number]: "none" | "cid_stored";
            } = {
                0: "none",
                3: "cid_stored"
            };
            return cases[pb_1.Message.computeOneofCase(this, [3])];
        }
        static fromObject(data: {
            event_type?: string;
            sequence_number?: number;
            cid_stored?: ReturnType<typeof CidStoredEvent.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.event_type != null) {
                message.event_type = data.event_type;
            }
            if (data.sequence_number != null) {
                message.sequence_number = data.sequence_number;
            }
            if (data.cid_stored != null) {
                message.cid_stored = CidStoredEvent.fromObject(data.cid_stored);
            }
            return message;
        }
        toObject() {
            const data: {
                event_type?: string;
                sequence_number?: number;
                cid_stored?: ReturnType<typeof CidStoredEvent.prototype.toObject>;
            } = {};
            if (this.event_type != null) {
                data.event_type = this.event_type;
            }
            if (this.sequence_number != null) {
                data.sequence_number = this.sequence_number;
            }
            if (this.cid_stored != null) {
                data.cid_stored = this.cid_stored.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.event_type.length)
                writer.writeString(1, this.event_type);
            if (this.sequence_number != 0)
                writer.writeInt64(2, this.sequence_number);
            if (this.has_cid_stored)
                writer.writeMessage(3, this.cid_stored, () => this.cid_stored.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Event {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Event();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.event_type = reader.readString();
                        break;
                    case 2:
                        message.sequence_number = reader.readInt64();
                        break;
                    case 3:
                        reader.readMessage(message.cid_stored, () => message.cid_stored = CidStoredEvent.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Event {
            return Event.deserialize(bytes);
        }
    }
}
