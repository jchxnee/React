import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  isLoggedIn: false,

  login: (userData) => set({ user: userData, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),

  getUser: () => set((state) => state.user),
  isAuthenticated: () => set((state) => state.isLoggedIn),

  updateUser: (newUserData) => set({ user: newUserData }),
}));

export default useUserStore;
