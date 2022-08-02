export class Account {
    private name: string;
    private document: number;
    private agency: number;
    private accountNumber: number;

    public constructor(
        name: string, 
        document: number,
        agency: number,
        accountNumber: number
    ) {
        this.name = name;
        this.document = document,
        this.agency = agency,
        this.accountNumber = accountNumber
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
}
