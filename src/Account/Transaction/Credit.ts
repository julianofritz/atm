import { ITransaction } from "./ITransaction";

export class Credit implements ITransaction {

    public execute(accountBalance: number, value: number): number {
        return accountBalance + value;
    }
}