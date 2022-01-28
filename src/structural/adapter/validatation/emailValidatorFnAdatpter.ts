import { EmailValidatorFn } from "./emailValidator"
import isEmailLib from "validator/lib/isEmail"

export const emailValidatorFnAdapter: EmailValidatorFn = value => {
    return isEmailLib(value)
}
