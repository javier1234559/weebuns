import { create } from 'zustand'

type SiderBarStore = {
  isOpen: boolean
  setOpen: () => void
  setClose: () => void
}

const useSiderBarStore = create<SiderBarStore>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}))

export const siderBarAction = {
  openSiderBar: useSiderBarStore.getState().setOpen,
  closeSiderBar: useSiderBarStore.getState().setClose,
}

export default useSiderBarStore
