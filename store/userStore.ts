import { User } from "@/types/user";
import { create } from "zustand";

interface UserStore {
  user: User | null;
  isAuth: boolean;

  setUser: (user: User) => void;
  clearUserInfo: () => void;
}

export const useUserStore = create<UserStore>()((set) => {
  return {
    user: null,
    isAuth: false,

    setUser: (user) => {
      set(() => {
        return { user: user, isAuth: true };
      });
    },

    clearUserInfo: () => {
      set(() => {
        return { user: null, isAuth: false };
      });
    },
  };
});
