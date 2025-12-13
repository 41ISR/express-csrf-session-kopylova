import { useEffect } from "react"

const Logout = () => {
    useEffect(() => {
        const logUserOut = async () => {
            // пишем фетч с await на /auth/logout
            // добавляем в AuthStore метод clearUser и вызываем его
            // navigate на "/signin"
        }
        logUserOut()
    }, [])
}

export default Logout