
export class ValidationError extends Error {
    public validationErrors: Array<Record<string, string>>;

    constructor(validationErrors: Array<Record<string, string>>) {
        super('Validation failed');
        this.validationErrors = validationErrors;
    }
}
