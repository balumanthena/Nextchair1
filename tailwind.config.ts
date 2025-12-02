import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#FF9933", // Saffron
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#153E90", // Deep Blue
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#E63946", // Red
                    foreground: "#FFFFFF",
                },
                background: "#FFFFFF",
                foreground: "#1F2937", // Gray-800
                muted: {
                    DEFAULT: "#F3F4F6", // Gray-100
                    foreground: "#6B7280", // Gray-500
                },
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#1F2937",
                },
                border: "#E5E7EB", // Gray-200
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-outfit)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-gradient": "linear-gradient(135deg, #FFF5E6 0%, #FFFFFF 100%)", // Light saffron tint
            },
        },
    },
    plugins: [],
};
export default config;
