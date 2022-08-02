"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValueNotAuhtorizedError_1 = require("../../../Exceptions/ValueNotAuhtorizedError");
const Debit_1 = require("../../../Transaction/Debit");
describe('Testing Transaction class', () => {
    test('test execute debit with balance grater than value and integer values', () => {
        let debit = new Debit_1.Debit();
        expect(debit.execute(10, 5)).toBe(5);
    });
    test('test execute debit with balance grater than value and float values', () => {
        let debit = new Debit_1.Debit();
        expect(debit.execute(9.5, 0.5)).toBe(9);
    });
    test('test execute debit with balance less than value', () => {
        let debit = new Debit_1.Debit();
        expect(() => debit.execute(5, 10)).toThrow('This account does not have enough balance for this transaction');
        expect(() => debit.execute(5, 10)).toThrow(ValueNotAuhtorizedError_1.ValueNotAuthorizedError);
    });
});
