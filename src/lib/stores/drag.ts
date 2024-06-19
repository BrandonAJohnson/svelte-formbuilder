import type { FormBuilderData } from "$lib/index.d";
import { writable } from "svelte/store";

export const currentDraggable = writable<FormBuilderData|undefined>(undefined);

export function setCurrentDraggable(draggable: FormBuilderData) {
	currentDraggable.set(draggable);
}