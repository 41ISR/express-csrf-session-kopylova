import { create } from "zustand"

export const useAuthStore = create((set, get) => ({
    user: undefined,
    
  signout: async () => {
    try {
      await fetch('https://shiny-broccoli-7r4gg65p9gr2xxr6-3000.app.github.dev/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })
      set({ user: null, isAuthenticated: false })
      return true
    } catch (error) {
      console.error('Logout error:', error)
      // Clear local state anyway
      set({ user: null, isAuthenticated: false })
      return false
    }},
    checkAuth: async () => {
        try {
            const res = await fetch("https://shiny-broccoli-7r4gg65p9gr2xxr6-3000.app.github.dev/auth/me", {
                credentials: "include"
            })

            if (!res.ok) throw new Error(res.error)

            if (!res.body) return

            set((state) => ({ ...state, user: res.body }))
        } catch (error) {
            console.error(error)
        }
    }
}))