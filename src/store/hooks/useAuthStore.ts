import { createAppStore } from "..";

interface User {
    email: string;
    token: string
}

interface UserStore {
    user: User | null;
    items: number[],
    login: (user: User) => void;
    addItem: (item: number) => void;
    removeItem: () => void;
}

export const useAuthStore = createAppStore<UserStore>(
    (set) => ({
        user: null,
        items: [],
        login: (user) =>
            set((state) => {
                state.user = user;
            }),
        addItem: (newEl) =>
            set((state) => {
                state.items.push(newEl)
            }),
        removeItem: () =>
            set((state) => {
                if (state.items.length > 0) {
                    const randomIndex = Math.floor(Math.random() * state.items.length);
                    state.items.splice(randomIndex, 1);
                }
            }),
    }),
    "persist-key"
);