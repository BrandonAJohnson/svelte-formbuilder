/**
 * @type {FormBuilderData}
 * @property {any} type - A SvelteComponent or string for an html tag
 * @property {string} name - A name to display as text
 * @property {number} id - The unique ID for this element within the renderer
 * @property {boolean} canBeDroppedInto - determines if this components allows other components to be dropped into it
 * @property {FormBuilderData[]} children - Children FromBuilderData that appear in the slot for this component
 * @property {any} props - props to pass along with a svelte component
 * @property {any} content - static content to include inside of the FormBuilder Component
 */
export type FormBuilderData = {
	type: any,
	name: string,
	id?: number,
	canBeDroppedInto: boolean = false,
	selected?: boolean = false,
	children?: FormBuilderData[] = [],
	props?: any,
	content?: any,
}

/**
 * @type {ToolBarItem}
 * @property {string} type - the type of item
 * @property {FormBuilderData[]} - draggableItems - the list of components that can be dragged into the interface
 */
export type ToolBarItem = {
	type: string,
	draggableItems: FormBuilderData[]
}
