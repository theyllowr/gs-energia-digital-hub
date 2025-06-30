
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0C4B33',
					foreground: '#FFFFFF',
					dark: '#3AF58A'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				gs: {
					light: {
						bg: '#FFFFFF',
						text: '#0E0E0E',
						accent: '#0C4B33'
					},
					dark: {
						bg: '#0E0E0E',
						text: '#F5F5F5',
						accent: '#3AF58A'
					}
				}
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			fontSize: {
				'responsive-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
				'responsive-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
				'responsive-base': 'clamp(1rem, 3vw, 1.125rem)',
				'responsive-lg': 'clamp(1.125rem, 3.5vw, 1.25rem)',
				'responsive-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
				'responsive-2xl': 'clamp(1.5rem, 5vw, 2rem)',
				'responsive-3xl': 'clamp(1.875rem, 6vw, 2.5rem)',
				'responsive-4xl': 'clamp(2.25rem, 7vw, 3rem)',
				'responsive-5xl': 'clamp(3rem, 8vw, 4rem)'
			},
			animation: {
				'fade-up': 'fadeUp 0.6s ease-out forwards',
				'counter': 'counter 2s ease-out forwards',
				'parallax': 'parallax 20s linear infinite'
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				counter: {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				parallax: {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-10px)' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
