import type { FormBuilderData } from "$lib/index.d";
import { writable } from "svelte/store";

export const currentComponent = writable<FormBuilderData|undefined>(undefined);

export function setCurrentComponent(component: FormBuilderData) {
	currentComponent.set(component);
}