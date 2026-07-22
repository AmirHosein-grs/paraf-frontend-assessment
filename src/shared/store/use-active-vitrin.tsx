import { create } from "zustand";

interface ActiveVitrinStore {
  activeVitrin: number | null;
  setActiveVitrin: (id: number) => void;
}

export const useActiveVitrinStore = create<ActiveVitrinStore>((set) => ({
  activeVitrin: null,

  setActiveVitrin: (id) =>
    set({
      activeVitrin: id,
    }),
}));
