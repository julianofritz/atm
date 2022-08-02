"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(name, document, agency, accountNumber) {
        this.name = name;
        this.document = document,
            this.agency = agency,
            this.accountNumber = accountNumber;
    }
    getName() {
        return this.name;
    }
    getDocument() {
        return this.document;
    }
    getAgency() {
        return this.agency;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
}
exports.Account = Account;
