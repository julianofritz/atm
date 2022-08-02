"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debit = void 0;
const ValueNotAuhtorizedError_1 = require("../Exceptions/ValueNotAuhtorizedError");
class Debit {
    execute(accountBalance, value) {
        let finalBalance;
        finalBalance = accountBalance - value;
        if (finalBalance < 0) {
            throw new ValueNotAuhtorizedError_1.ValueNotAuthorizedError('This account does not have enough balance for this transaction');
        }
        return finalBalance;
    }
}
exports.Debit = Debit;
