export interface ITransaction { 
    execute: (accountBalance: number, value: number) => number,
}