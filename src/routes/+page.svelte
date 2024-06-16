<script lang="ts">
   import type { FormBuilderData } from "$lib/index.d";
   import Panel from "$lib/components/builder/Panel.svelte";
   import FormRenderer from "$lib/components/FormRenderer.svelte";

	let _debug = false;

	const formBuilderData: FormBuilderData[] = [
		{
			type: 'p',
			name: '<p>',
			content: 'This is a paragraph',
			class: 'font-bold text-xl',
		},
		{
			type: Panel,
			name: 'Panel',
			props: {
				collapsible: true,
				headerText: 'This is a Header',
			},
			children: [
				{
					type: 'div',
					name: '<div>',
					children: [
						{
							type: 'p',
							name: '<p>',
							content: 'This is a double nested body',
							props: {
								class: 'text-blue',
							}
						}
					],
				},
			]
		},
	];

</script>
<h1 class="text-3xl font-bold">Example</h1>
<input type="checkbox" id="debug" on:click={()=> {_debug = !_debug}}/>
<label for="debug">Debug</label><br>

<FormRenderer formBuilderData={formBuilderData} debug={_debug}/>
