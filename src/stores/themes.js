import { writable } from 'svelte/store';
const browser = typeof window !== 'undefined';

const themes = ['default', 'orange', 'purple', 'green'];

const defaultTheme = 'default';

function createThemeStore() {
    const { subscribe, set, update } = writable(defaultTheme);

    if (browser) {
        const saved = localStorage.getItem('user-theme');
        if (saved && themes.includes(saved)) {
            set(saved);
        }
    }

    return {
        subscribe,
        set: (theme) => {
            if (browser) {
                localStorage.setItem('user-theme', theme);
            }
            set(theme);
        },
        reset: () => {
            if (browser) {
                localStorage.removeItem('user-theme');
            }
            set(defaultTheme);
        }
    };
}

export const theme = createThemeStore();
export const availableThemes = themes;
