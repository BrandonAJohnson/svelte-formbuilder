import type { FormBuilderData } from "$lib/index.d";
import { writable } from "svelte/store";

export const debug = writable<boolean>(false);

export function setDebug(d: boolean) {
	debug.set(d);
}