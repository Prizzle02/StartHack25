import { create } from "zustand";

const UseGlobalStore = create((set) => ({
    showAnalysisMarker: false,
    setShowAnalysisMarker: (value) => set({ showAnalysisMarker: value }),
}));

export default UseGlobalStore;