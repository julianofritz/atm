"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueNotAuthorizedError = void 0;
class ValueNotAuthorizedError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ValueNotAuthorizedError = ValueNotAuthorizedError;
