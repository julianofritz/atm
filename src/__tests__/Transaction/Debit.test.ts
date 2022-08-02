import { ValueNotAuthorizedError } from '../../Exceptions/ValueNotAuhtorizedError';
import { Debit } from '../../Transaction/Debit';

describe('Testing Transaction class', () => {
    test('test execute debit with balance grater than value and integer values', () => {
        let debit = new Debit();
        expect(debit.execute(10, 5)).toBe(5);
    });

    test('test execute debit with balance grater than value and float values', () => {
        let debit = new Debit();
        expect(debit.execute(9.5, 0.5)).toBe(9);
    });

    test('test execute debit with balance less than value', () => {
        let debit = new Debit();
        expect(() => debit.execute(5, 10)).toThrow('This account does not have enough balance for this transaction');
        expect(() => debit.execute(5, 10)).toThrow(ValueNotAuthorizedError);
    });
});