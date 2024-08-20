"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUCCESS_DESCRIPTION = exports.INTERNAL_SERVER_ERROR_DESCRIPTION = exports.formatInvalidNumber = exports.formatInvalidEmailAddress = exports.formatInvalidProperty = exports.formatDataNotFound = exports.formatInvalidConfiguration = exports.formatResponseTable = void 0;
const response_messages_1 = require("./constants/response-messages");
function formatResponseTable(errors) {
    const errorCodes = Object.keys(errors);
    return (`
| Response message    | Description          |
| ------------------- | -------------------- |` +
        errorCodes
            .map((errorCode) => `
| \`${errorCode}\`    | ${errors[errorCode]} |`)
            .join(''));
}
exports.formatResponseTable = formatResponseTable;
function formatInvalidConfiguration(key) {
    return `\`${key}\` is not configured`;
}
exports.formatInvalidConfiguration = formatInvalidConfiguration;
function formatDataNotFound(key) {
    return `\`${key}\` does not match existing data`;
}
exports.formatDataNotFound = formatDataNotFound;
function formatInvalidProperty(key) {
    return `\`${key}\` is missing or invalid`;
}
exports.formatInvalidProperty = formatInvalidProperty;
function formatInvalidEmailAddress(key) {
    return `\`${key}\` is missing or invalid (must be an email address)`;
}
exports.formatInvalidEmailAddress = formatInvalidEmailAddress;
function formatInvalidNumber(key, min, max) {
    if (min && max) {
        return `\`${key}\` is missing or invalid (must be between ${Intl.NumberFormat('en-AU').format(min)} - ${Intl.NumberFormat('en-AU').format(max)})`;
    }
    else if (max) {
        return `\`${key}\` is missing or invalid (must be less than ${Intl.NumberFormat('en-AU').format(max)})`;
    }
    else if (min) {
        return `\`${key}\` is missing or invalid (must be greater than ${Intl.NumberFormat('en-AU').format(min)})`;
    }
    return `\`${key}\` is missing or invalid`;
}
exports.formatInvalidNumber = formatInvalidNumber;
exports.INTERNAL_SERVER_ERROR_DESCRIPTION = `Returns \`${response_messages_1.INTERNAL_SERVER_ERROR}\` when a request failed unexpectedly`;
exports.SUCCESS_DESCRIPTION = `Returns success when a request is completed successfully`;
//# sourceMappingURL=swagger.js.map