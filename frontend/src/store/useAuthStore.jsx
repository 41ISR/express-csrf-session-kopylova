import { create } from "zustand"

export const useAuthStore = create((set, get) => ({
    user: undefined,
    checkAuth: async () => {
        try {
            const res = await fetch("https://bug-free-space-palm-tree-4jw4vg55g646hqww9-3001.app.github.dev/auth/me", {
                credentials: "include"
            })

            if (!res.ok) throw new Error(res.error)

            const data = await res.json()
            
            if (!res.body) return

            set((state) => ({ ...state, user: data }))
        } catch (error) {
            console.error(error)
        }
    },
    clearUser: () => {
        set((state) => ({...state, user: undefined}))
    }
}))