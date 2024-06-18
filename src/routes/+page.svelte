<script lang="ts">
   import type { FormBuilderData } from "$lib/index.d";

   import FormRenderer from "$lib/components/FormRenderer.svelte";

	let _debug = false;

	const formBuilderData: FormBuilderData[] = [
		// {
		// 	type: 'p',
		// 	name: '<p>',
		// 	content: 'This is a paragraph',
		// 	class: 'font-bold text-xl',
		// },
		// {
		// 	type: Panel,
		// 	name: 'Panel',
		// 	props: {
		// 		collapsible: true,
		// 		headerText: 'This is a Header',
		// 	},
		// 	children: [
		// 		{
		// 			type: 'div',
		// 			name: '<div>',
		// 			children: [
		// 				{
		// 					type: 'p',
		// 					name: '<p>',
		// 					content: 'This is a double nested body',
		// 					props: {
		// 						class: 'text-blue',
		// 					}
		// 				}
		// 			],
		// 		},
		// 	]
		// },
	];


	function onDragEnter(e: any) {
		console.log('onDragEnter', e);
	}

	function onDrop(e: any) {
		console.log('onDrop', e);
	}

	function onDragLeave(e: DragEvent) {
		console.log("onDragLeave", e);
	}
</script>

<input type="checkbox" id="debug" on:click={()=> {_debug = !_debug}}/>
<label for="debug">Debug</label><br>

<div id="edit-area"
	on:dragenter={onDragEnter}
	on:drop={onDrop}
	on:dragleave={onDragLeave}
	aria-dropeffect="copy" role="region" class="h-full border border-slate-900">
	<FormRenderer formBuilderData={formBuilderData} debug={_debug}/>
</div>
