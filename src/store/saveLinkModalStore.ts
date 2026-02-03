import { create } from 'zustand'

interface SaveLinkModalStore {
  url: string
  isOpen: boolean
  open: (url?: string) => void
  close: () => void
}

export const useSaveLinkModalStore = create<SaveLinkModalStore>((set) => ({
  url: '',
  isOpen: false,
  open: (url) => set({ isOpen: true, url: url ?? '' }),
  close: () => set({ isOpen: false }),
}))
