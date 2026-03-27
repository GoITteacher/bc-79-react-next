import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ExampleStore {
  value: number;
  setValue: (newValue: number) => void;
}

export const useExampleStore = create<ExampleStore>()(
  persist(
    (setStore) => {
      return {
        value: 0,

        setValue: (newValue) => {
          setStore({ value: newValue });
        },

        increment: () => {
          setStore((s) => {
            return { value: s.value + 1 };
          });
        },

        clearValue: () => {
          setStore({ value: 0 });
        },
      };
    },
    {
      name: "example",
    }
  )
);
