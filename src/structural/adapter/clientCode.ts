import {
    EmailValidatorClass,
    EmailValidatorFn
} from "./validatation/emailValidator"
import { EmailValidatorClassAdapter } from "./validatation/emailValidatorClassAdapter"
import { emailValidatorFnAdapter } from "./validatation/emailValidatorFnAdatpter"

function validateEmailClass(
    emailValidator: EmailValidatorClass,
    value: string
): void {
    if (emailValidator.isEmail(value)) {
        return console.log("Email válido! [CLASSE]")
    }
    console.log("Email inválido! [CLASSE]")
}

function validateEmailFn(
    emailValidator: EmailValidatorFn,
    value: string
): void {
    if (emailValidator(value)) {
        return console.log("Email válido! [CLASSE]")
    }
    console.log("Email inválido! [CLASSE]")
}

console.log("================================")
const email = "bruno@mail.com"
validateEmailClass(new EmailValidatorClassAdapter(), email)
validateEmailFn(emailValidatorFnAdapter, email)
