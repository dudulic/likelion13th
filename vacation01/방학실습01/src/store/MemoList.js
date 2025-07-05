import { create } from "zustand";

export const useMemoStore = create((set) => ({
  memoList: [], //리턴되는 상태
  addMemo: (val) =>
    set((prev) => ({
      memoList: [
        ...prev.memoList,
        { content: val, id: new Date().getMilliseconds() + val },
      ],
    })),
  removeMemo: (id) =>
    set((prev) => ({ memoList: prev.memoList.filter((e) => e.id !== id) })),
}));
