"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("../../../Account/Account");
describe('Testing Account class', () => {
    test('test get class parameters', () => {
        let account = new Account_1.Account('Juliano Fritz', 1862458962, 1, 12345678);
        expect(account.getName()).toBe('Juliano Fritz');
        expect(account.getDocument()).toBe(1862458962);
        expect(account.getAgency()).toBe(1);
        expect(account.getAccountNumber()).toBe(12345678);
    });
});
