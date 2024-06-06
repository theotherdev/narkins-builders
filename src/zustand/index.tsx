import { create } from "zustand";

export const useGlobalLeadFormState = create<{
    open: boolean, setOpen: (b: boolean) => void
}>((set) => ({
    open: false, setOpen: (b: boolean) => set({open: b})
}));