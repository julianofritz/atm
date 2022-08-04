import { ITransaction } from "./Transaction/ITransaction";

export class Account {
    private name: string;
    private document: number;
    private agency: number;
    private accountNumber: number;
    private balance: number;

    public constructor(
        name: string, 
        document: number,
        agency: number,
        accountNumber: number,
        balance: number
    ) {
        this.name = name;
        this.document = document,
        this.agency = agency,
        this.accountNumber = accountNumber
        this.balance = balance;
    }

    public setBalance(balance: number): void {
        this.balance = balance;
    }

    public getName(): string {
        return this.name
    }

    public getDocument(): number {
        return this.document
    }

    public getAgency(): number {
        return this.agency;
    }

    public getAccountNumber(): number {
        return this.accountNumber;
    }

    public getBalance(): number {
        return this.balance;
    }

    public makeTransaction(transaction: ITransaction, value: number): void {
        this.balance = transaction.execute(this.balance, value);
    }
}
