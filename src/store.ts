import { create } from 'zustand'
interface STORE {
    scorered: number,
    scoreblue: number,
    setscorered: () => void,
    setscoreblue: () => void,
}
export const useStore = create<STORE>((set) => ({
    scorered: 0,
    scoreblue: 0,
    setscorered: () => set((state: {scorered: number}) => ({ scorered: state.scorered + 1 })),
    setscoreblue: () => set((state: {scoreblue: number}) => ({ scoreblue: state.scoreblue + 1 })),

}))