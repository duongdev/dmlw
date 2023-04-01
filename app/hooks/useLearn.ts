import { create } from 'zustand'

interface LearnStore {
  videoTimestamp: number
  // eslint-disable-next-line no-unused-vars
  setVideoTimestamp: (timestamp: number) => void
}

export const useLearn = create<LearnStore>((set) => ({
  videoTimestamp: 0,
  setVideoTimestamp: (timestamp: number) => set({ videoTimestamp: timestamp }),
}))
