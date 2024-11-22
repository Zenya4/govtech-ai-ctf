import { writable } from 'svelte/store';

export const lastLogin = writable(new Date());
export const daysLogged = writable(0);