import { create } from "zustand";

interface ThemeChange {
      theme: string;
      changeTheme: () => void
}

export const useThemeStore = create<ThemeChange>((set) => ({
      theme: 'light',
      changeTheme() {
            set((state) => {
                  const newTheme = state.theme === 'light' ? 'dark' : 'light';

                  // 1. Accedemos al elemento raíz (html)
                  const root = window.document.documentElement;

                  // 2. Quitamos la clase anterior y ponemos la nueva
                  root.classList.remove(state.theme);
                  root.classList.add(newTheme);

                  return { theme: newTheme };

            })
      }
}))