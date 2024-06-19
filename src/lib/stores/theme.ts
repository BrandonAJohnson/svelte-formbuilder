import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

const userTheme = browser && localStorage.getItem('color-scheme');
export const theme:Writable<string> = writable(userTheme || 'dark');

export function toggleTheme(): void {
	theme.update(currentTheme => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('color-scheme', newTheme);
		localStorage.setItem('color-scheme', newTheme);
		return newTheme;
	});
}

export function setTheme(newTheme: 'dark' | 'light'): void {
	theme.set(newTheme);
}
