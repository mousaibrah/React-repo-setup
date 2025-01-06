import { create } from 'zustand';

export const useStore = create<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
