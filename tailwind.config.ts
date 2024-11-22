import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin'

export default {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            colors: {
                // Flowbite-Svelte
                primary: {
                    50: '#F3FAFF', // Lightest blue, calm and soothing
                    100: '#E7F4FF', // Light blue
                    200: '#C9E7FF', // Gentle blue for accessibility
                    300: '#93CEFF', // Medium blue
                    400: '#56A8FF', // Friendly and engaging
                    500: '#1F84FF', // Main interactive color
                    600: '#1B6BD8', // Trustworthy darker shade
                    700: '#1656B1', // Deeper blue for accents
                    800: '#123F88', // Strong blue for focus areas
                    900: '#0C2A5D'  // Darkest blue for contrast
                },
                accent: {
                    50: '#FFF9F5', // Light peach, comforting
                    100: '#FFF2EB', // Peach
                    200: '#FFDCCB', // Gentle accent
                    300: '#FFC4A5', // Warm and engaging
                    400: '#FF9C6D', // Highlighted accents
                    500: '#FF7535', // Main accent color
                    600: '#DB601E', // Deeper contrast
                    700: '#B44E18', // Accent for active states
                    800: '#8E3E14', // Strong for minimal use
                    900: '#692E0F'  // Deepest shade
                },
                neutral: {
                    50: '#F9FAFB', // Very light gray
                    100: '#F4F5F7', // Soft background
                    200: '#E5E7EB', // Subtle dividers
                    300: '#D1D5DB', // Form fields
                    400: '#9CA3AF', // Text for muted areas
                    500: '#6B7280', // Secondary text
                    600: '#4B5563', // Neutral for headings
                    700: '#374151', // Strong neutral
                    800: '#1F2937', // Dark contrast
                    900: '#111827'  // Deepest neutral
                }
            }
        }
    },
    
    plugins: [typography, forms, containerQueries, aspectRatio, flowbitePlugin]
} satisfies Config;
