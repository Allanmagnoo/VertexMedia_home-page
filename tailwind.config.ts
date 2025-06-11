import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Unificada para "Inter"
        // body: ['Inter', 'sans-serif'], // Removida
        // headline: ['Inter', 'sans-serif'], // Removida
        code: ['monospace'],
      },
      colors: {
        // From referencia.html
        background: 'hsl(var(--background))', // bg-gray-900 #111827
        foreground: 'hsl(var(--foreground))', // text-gray-300 #D1D5DB
        card: {
          DEFAULT: 'hsl(var(--card))', // bg-gray-800 #1F2937
          foreground: 'hsl(var(--card-foreground))', // text-gray-100 (similar to foreground)
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: { // Azul do referencia.html #60A5FA
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))', // Um branco ou cinza muito claro para contraste
        },
        secondary: { // Roxo do referencia.html #C084FC
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))', // Um branco ou cinza muito claro
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', // bg-gray-700 #374151
          foreground: 'hsl(var(--muted-foreground))', // text-gray-400 #9CA3AF
        },
        accent: { // Pode ser o Teal do referencia.html #2DD4BF ou o Amber do PRD #FFB300. Vou manter o Teal por enquanto.
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))', // border-gray-700 #374151 ou #4B5563
        input: 'hsl(var(--input))', // bg-gray-700 com border-gray-600
        ring: 'hsl(var(--ring))', // Azul primário para anéis de foco
        // Gradient colors from referencia.html (already primary and secondary)
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 0.125rem)',
        sm: 'calc(var(--radius) - 0.25rem)',
        xl: 'calc(var(--radius) + 0.25rem)',
      },
      boxShadow: { 
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // Usado no referencia.html
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // Usado no referencia.html
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': { 
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)', // M3 easing
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
