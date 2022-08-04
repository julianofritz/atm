import { Credit } from '../../../Account/Transaction/Credit';

describe('Testing Debit Transaction class', () => {
    test('test execute debit with balance grater than value and integer values', () => {
        let debit = new Credit();
        expect(debit.execute(10, 5)).toBe(15);
    });
});