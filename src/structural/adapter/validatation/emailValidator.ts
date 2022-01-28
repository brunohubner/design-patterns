export interface EmailValidatorFn {
    (value: string): boolean
}

export interface EmailValidatorClass {
    isEmail: EmailValidatorFn
}
