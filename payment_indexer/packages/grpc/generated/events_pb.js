// source: events.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.events.Event', null, global);
goog.exportSymbol('proto.events.Event.EventCase', null, global);
goog.exportSymbol('proto.events.EventRequest', null, global);
goog.exportSymbol('proto.events.EventsRequest', null, global);
goog.exportSymbol('proto.events.PaymentStoredEvent', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.PaymentStoredEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.PaymentStoredEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.events.PaymentStoredEvent.displayName = 'proto.events.PaymentStoredEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.EventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.EventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.events.EventRequest.displayName = 'proto.events.EventRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.EventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.events.EventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.events.EventsRequest.displayName = 'proto.events.EventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.events.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.events.Event.oneofGroups_);
};
goog.inherits(proto.events.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.events.Event.displayName = 'proto.events.Event';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.PaymentStoredEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.events.PaymentStoredEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.PaymentStoredEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.PaymentStoredEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    cid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    payerAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    payeeAddress: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.PaymentStoredEvent}
 */
proto.events.PaymentStoredEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.PaymentStoredEvent;
  return proto.events.PaymentStoredEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.PaymentStoredEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.PaymentStoredEvent}
 */
proto.events.PaymentStoredEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayerAddress(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeeAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.PaymentStoredEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.PaymentStoredEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.PaymentStoredEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.PaymentStoredEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getHid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPayerAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPayeeAddress();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string cid = 1;
 * @return {string}
 */
proto.events.PaymentStoredEvent.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.events.PaymentStoredEvent} returns this
 */
proto.events.PaymentStoredEvent.prototype.setCid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.events.PaymentStoredEvent.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.events.PaymentStoredEvent} returns this
 */
proto.events.PaymentStoredEvent.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 hid = 3;
 * @return {number}
 */
proto.events.PaymentStoredEvent.prototype.getHid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.events.PaymentStoredEvent} returns this
 */
proto.events.PaymentStoredEvent.prototype.setHid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 amount = 4;
 * @return {number}
 */
proto.events.PaymentStoredEvent.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.events.PaymentStoredEvent} returns this
 */
proto.events.PaymentStoredEvent.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string payer_address = 5;
 * @return {string}
 */
proto.events.PaymentStoredEvent.prototype.getPayerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.events.PaymentStoredEvent} returns this
 */
proto.events.PaymentStoredEvent.prototype.setPayerAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string payee_address = 6;
 * @return {string}
 */
proto.events.PaymentStoredEvent.prototype.getPayeeAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.events.PaymentStoredEvent} returns this
 */
proto.events.PaymentStoredEvent.prototype.setPayeeAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.EventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.events.EventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.EventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.EventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.EventRequest}
 */
proto.events.EventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.EventRequest;
  return proto.events.EventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.EventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.EventRequest}
 */
proto.events.EventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.EventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.EventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.EventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.EventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 sequence_number = 1;
 * @return {number}
 */
proto.events.EventRequest.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.events.EventRequest} returns this
 */
proto.events.EventRequest.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.EventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.events.EventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.EventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.EventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    eventType: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.EventsRequest}
 */
proto.events.EventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.EventsRequest;
  return proto.events.EventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.EventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.EventsRequest}
 */
proto.events.EventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSequenceNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.EventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.EventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.EventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.EventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 sequence_number = 1;
 * @return {number}
 */
proto.events.EventsRequest.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.events.EventsRequest} returns this
 */
proto.events.EventsRequest.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string event_type = 2;
 * @return {string}
 */
proto.events.EventsRequest.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.events.EventsRequest} returns this
 */
proto.events.EventsRequest.prototype.setEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.events.Event.oneofGroups_ = [[3]];

/**
 * @enum {number}
 */
proto.events.Event.EventCase = {
  EVENT_NOT_SET: 0,
  PAYMENT_STORED: 3
};

/**
 * @return {proto.events.Event.EventCase}
 */
proto.events.Event.prototype.getEventCase = function() {
  return /** @type {proto.events.Event.EventCase} */(jspb.Message.computeOneofCase(this, proto.events.Event.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.events.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.events.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.events.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    paymentStored: (f = msg.getPaymentStored()) && proto.events.PaymentStoredEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.events.Event}
 */
proto.events.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.events.Event;
  return proto.events.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.events.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.events.Event}
 */
proto.events.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSequenceNumber(value);
      break;
    case 3:
      var value = new proto.events.PaymentStoredEvent;
      reader.readMessage(value,proto.events.PaymentStoredEvent.deserializeBinaryFromReader);
      msg.setPaymentStored(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.events.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.events.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.events.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.events.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPaymentStored();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.events.PaymentStoredEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string event_type = 1;
 * @return {string}
 */
proto.events.Event.prototype.getEventType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.events.Event} returns this
 */
proto.events.Event.prototype.setEventType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 sequence_number = 2;
 * @return {number}
 */
proto.events.Event.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.events.Event} returns this
 */
proto.events.Event.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional PaymentStoredEvent payment_stored = 3;
 * @return {?proto.events.PaymentStoredEvent}
 */
proto.events.Event.prototype.getPaymentStored = function() {
  return /** @type{?proto.events.PaymentStoredEvent} */ (
    jspb.Message.getWrapperField(this, proto.events.PaymentStoredEvent, 3));
};


/**
 * @param {?proto.events.PaymentStoredEvent|undefined} value
 * @return {!proto.events.Event} returns this
*/
proto.events.Event.prototype.setPaymentStored = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.events.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.events.Event} returns this
 */
proto.events.Event.prototype.clearPaymentStored = function() {
  return this.setPaymentStored(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.events.Event.prototype.hasPaymentStored = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.events);
