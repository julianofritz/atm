import { ValueNotAuthorizedError } from "../../Exceptions/ValueNotAuhtorizedError";
import { ITransaction } from "./ITransaction";

export class Debit implements ITransaction {

    public execute(accountBalance: number, value: number): number {
        let finalBalance: number; 
        finalBalance = accountBalance - value;

        if (finalBalance < 0) {
            throw new ValueNotAuthorizedError('This account does not have enough balance for this transaction');
        }

        return finalBalance;
    }
}