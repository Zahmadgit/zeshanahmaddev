import { create } from "zustand";
import type { FileState } from "../types/zustandTypes";

const useCurrentFileState = create<FileState>()((set) => ({
  currentFile: "Home.md",
  changeFile: (fileName: string) => {
    set({ currentFile: fileName });
  },
}));

export default useCurrentFileState;
