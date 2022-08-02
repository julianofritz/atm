export class ValueNotAuthorizedError extends Error {
    constructor(message: string) {
        super(message);
    }
}