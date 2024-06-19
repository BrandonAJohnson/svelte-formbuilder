import { writable } from "svelte/store";

export enum MODE {
	EDIT,
	VIEW,
};

export const currentMode = writable<MODE>(MODE.EDIT);

export function setCurrentMode(mode: MODE) {
	currentMode.set(mode);
}