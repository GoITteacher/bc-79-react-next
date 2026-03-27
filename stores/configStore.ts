import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ConfigStore {
  theme: string;
  lang: string;
  setTheme: (newTheme: string) => void;
  toggleTheme: () => void;
  setLang: (newLang: string) => void;
}

export const useConfigStore = create<ConfigStore>()(
  persist(
    (setStore) => {
      return {
        theme: "light",
        lang: "en",

        setTheme: (newTheme) => {
          setStore(() => {
            return { theme: newTheme };
          });
        },

        toggleTheme: () => {
          console.log("TEST");
          setStore((store) => {
            return { theme: store.theme === "dark" ? "light" : "dark" };
          });
        },

        setLang: (newLang) => {
          setStore({ lang: newLang });
        },
      };
    },
    {
      name: "config",
    }
  )
);
