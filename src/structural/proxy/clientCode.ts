import { SystemUserProxy } from "./systemUser/SystemUserProxy"

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy("Bruno", "brunohubner")
    console.log("aguardando...")
    console.log(await user.getAdresses())

    console.log("repetindo... [CACHE]")
    for (let i = 0; i < 5; i++) {
        console.log(await user.getAdresses())
    }
}

clientCode()
