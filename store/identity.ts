import create from 'zustand'

export interface IdentityState {
    identity: Identity | null
    availableIdentities: Identity[]
    setIdentity: (identity: Identity) => void
    unsetIdentity: () => void
    appendIdentity: (identity: Identity) => void
}
export interface Identity {
    name: string
    avatar: string
}

const useIdentity = create<IdentityState>((set) => ({
    identity: null,
    availableIdentities: [],
    setIdentity: (identity: Identity) => set({ identity: identity }),
    unsetIdentity: () => set({ identity: null }),
    appendIdentity: (identity: Identity) => set((state) => ({ availableIdentities: [...state.availableIdentities, identity] })),
}))

export default useIdentity
