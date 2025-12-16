import { useEffect } from "react"
import { useAuthStore } from "../store/useAuthStore"
import { useNavigate } from "react-router-dom"

const Logout = () => {
    const { clearUser } = useAuthStore()
    const navigate = useNavigate()
    useEffect(() => {
        const logUserOut = async () => {
            await fetch("https://bug-free-space-palm-tree-4jw4vg55g646hqww9-3001.app.github.dev/auth/logout", {
                credentials: "include"
            })
            clearUser()
            navigate("/signin")
        }
        logUserOut()
    }, [])

    return <></>
}

export default Logout