import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        handwritten: ['Great Vibes', 'cursive'],
        elegant: ['Playfair Display', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        rose: {
          light: "hsl(350 60% 92%)",
          DEFAULT: "hsl(350 80% 50%)",
          dark: "hsl(350 70% 35%)",
        },
        blush: {
          light: "hsl(350 50% 95%)",
          DEFAULT: "hsl(350 60% 85%)",
          dark: "hsl(350 50% 75%)",
        },
        peach: {
          light: "hsl(20 60% 96%)",
          DEFAULT: "hsl(20 50% 90%)",
          dark: "hsl(20 40% 80%)",
        },
        ivory: {
          DEFAULT: "hsl(40 30% 96%)",
          dark: "hsl(40 20% 90%)",
        },
        gold: {
          light: "hsl(45 90% 70%)",
          DEFAULT: "hsl(45 80% 55%)",
          dark: "hsl(45 70% 45%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },
        "heartbeat": {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.15)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.15)" },
          "70%": { transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(350 80% 60% / 0.4), 0 0 40px hsl(350 80% 60% / 0.2)",
            filter: "brightness(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(350 80% 60% / 0.6), 0 0 80px hsl(350 80% 60% / 0.3)",
            filter: "brightness(1.1)"
          },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "petal-fall": {
          "0%": { 
            transform: "translateY(-10vh) rotate(0deg) translateX(0)",
            opacity: "1"
          },
          "100%": { 
            transform: "translateY(110vh) rotate(720deg) translateX(100px)",
            opacity: "0.3"
          },
        },
        "twinkle": {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "float-particle": {
          "0%": { 
            transform: "translateY(100vh) translateX(0) scale(0)",
            opacity: "0"
          },
          "10%": {
            opacity: "1",
            transform: "translateY(90vh) translateX(10px) scale(1)"
          },
          "90%": {
            opacity: "0.8",
            transform: "translateY(10vh) translateX(-10px) scale(1)"
          },
          "100%": { 
            transform: "translateY(0) translateX(0) scale(0)",
            opacity: "0"
          },
        },
        "typewriter": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink": {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "currentColor" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-down": "fade-in-down 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "shimmer": "shimmer 3s linear infinite",
        "petal-fall": "petal-fall 10s linear infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "float-particle": "float-particle 15s ease-in-out infinite",
        "typewriter": "typewriter 3s steps(40) forwards",
        "blink": "blink 1s step-end infinite",
        "slide-in-left": "slide-in-left 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.8s ease-out forwards",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
