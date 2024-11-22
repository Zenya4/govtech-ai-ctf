export interface User {
    host: boolean;
    name: string;
    avatar: string;
    color: string;
}

export const DinoBoy: User = {
    host: true,
    name: 'Dino Boy',
    avatar: 'dino.png',
    color: 'variant-soft-primary'
}

export const OpenAI: User = {
    host: false,
    name: 'OpenAI',
    avatar: 'openai.svg',
    color: 'variant-soft-primary'
}