import { EmailValidatorClass } from "./emailValidator"
import isEmailLib from "validator/lib/isEmail"

export class EmailValidatorClassAdapter implements EmailValidatorClass {
    isEmail(value: string): boolean {
        return isEmailLib(value)
    }
}
