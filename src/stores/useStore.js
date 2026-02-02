import { create } from 'zustand';

// Définition du store
const useStore = create((set) => ({
  counter: 0,  // Valeur initiale
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
}));

export default useStore;
