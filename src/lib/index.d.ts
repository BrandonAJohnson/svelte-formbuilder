import type Panel from "./components/builder/Panel.svelte";

/**
 * @property type: A SvelteComponent or string for an html tag
 * @property children: Children FromBuilderData that appear in the slot for this component
 * @property props: props to pass along with a svelte component
 * @property content: static content to include inside of the FormBuilder Component
 * @property class: list of css classes to apply to the component
 */
type FormBuilderData = {
	type: any,
	name: string,
	selected?: boolean = false,
	children?: FormBuilderData[] = [],
	props?: any,
	content?: any,
	class?: string,
}