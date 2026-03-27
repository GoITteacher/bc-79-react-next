import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FruitsStore {
  apples: number;
  lemons: number;

  //   setApples:(newValue: number)=>void;
  //   setLemons:(newValue: number)=>void;

  incrementApples: () => void;
  decrementApples: () => void;

  incrementLemons: () => void;
  decrementLemons: () => void;

  clearStore: () => void;
}

export const useFruitsStore = create<FruitsStore>()(
  persist(
    (setStore) => {
      return {
        apples: 0,
        lemons: 0,

        incrementApples: () => {
          setStore((prevStore) => {
            return { apples: prevStore.apples + 1 };
          });
        },

        decrementApples: () => {
          setStore((store) => {
            if (store.apples > 0) {
              return { apples: store.apples - 1 };
            } else {
              return {};
            }
          });
        },

        incrementLemons: () => {
          setStore((store) => {
            return { lemons: store.lemons + 1 };
          });
        },

        decrementLemons: () => {
          setStore((store) => {
            return { lemons: store.lemons - 1 };
          });
        },

        // clearStore: () => {
        //   setStore(() => {
        //     return { apples: 0, lemons: 0 };
        //   });
        // },

        clearStore: () => {
          setStore({ apples: 0, lemons: 0 });
        },
      };
    },
    {
      name: "fruits",
      partialize: (store) => {
        return {
          apples: store.apples,
        };
      },
    }
  )
);

//!=========================================

// const [x, setX] = useState(0);
// setX(25);
// setX(prev=>prev+1);
