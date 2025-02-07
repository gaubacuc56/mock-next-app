"use client";

import { useTheme } from "@/provider/theme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 border rounded-lg"
        >
            {theme === "light" ? "Switch to Dark Mode 🌙" : "Switch to Light Mode ☀️"}
        </button>
    );
}
