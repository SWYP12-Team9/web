import { create } from 'zustand'

interface User {
  userId: string | number
  nickname: string
  profileImage: string | null
}

interface AuthState {
  isLoggedIn: boolean
  user: User | null
  login: (userData: User) => void
  logout: () => void
  setLoggedIn: (status: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: true,
  user: null,

  login: (userData) =>
    set({
      isLoggedIn: true,
      user: userData,
    }),

  setLoggedIn: (status: boolean) => set({ isLoggedIn: status }),

  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
    }),
}))
