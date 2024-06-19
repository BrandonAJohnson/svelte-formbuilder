<script lang="ts">
   import type { FormBuilderData } from "$lib/index.d";
   import FormRenderer from "$lib/components/FormRenderer.svelte";
	import { debug, setDebug } from "$lib/stores/debug";
   import Grid from "$lib/components/layout/Grid.svelte";
	import Col from "$lib/components/layout/Col.svelte";
   import { setCurrentComponent } from "$lib/stores/component";

	let formBuilderData: FormBuilderData[] = [
		{
			name: 'Grid',
			type: Grid,
			id: 0,
			props: {
				cols: 1,
			},
			children: [
				{
					name: 'Col',
					type: Col,
					id: 1,
					canBeDroppedInto: true,
					children: []
				}
			],
			canBeDroppedInto: false,
		}
	];

	setCurrentComponent(formBuilderData[0]);
</script>

<input type="checkbox" id="debug" on:click={()=> {setDebug(!$debug)}}/>
<label for="debug">Debug</label><br>

<div id="edit-area" class="h-full">
	<FormRenderer formBuilderData={formBuilderData} />
</div>
