import { Account } from '../../Account/Account';
import { Debit } from '../../Account/Transaction/Debit'

describe('Testing Account class', () => {
    test('test get class parameters', () => {
        let account = new Account(
            'Juliano Fritz',
            1862458962,
            1,
            12345678,
            100
        );

        expect(account.getName()).toBe('Juliano Fritz');
        expect(account.getDocument()).toBe(1862458962);
        expect(account.getAgency()).toBe(1);
        expect(account.getAccountNumber()).toBe(12345678);
        expect(account.getBalance()).toBe(100);
    });

    test('test set balance on account', () => {
        let account = new Account(
            'Juliano Fritz',
            1862458962,
            1,
            12345678,
            100
        );

        account.setBalance(50);

        expect(account.getBalance()).toBe(50);
    });

    test('test set balance on account', () => {
        let account = new Account(
            'Juliano Fritz',
            1862458962,
            1,
            12345678,
            100
        );

        let debit = new Debit();
        account.makeTransaction(debit, 10);

        expect(account.getBalance()).toBe(90);
    });
});