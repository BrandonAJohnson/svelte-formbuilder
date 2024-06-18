<script lang="ts">
    import type { ToolBarItem } from "$lib/index.d";
    import Draggable from "./Draggable.svelte";
    import Panel from "./builder/Panel.svelte";

	const toolBarItems: ToolBarItem[] = [
		{
			type: 'Layout',
			draggableItems: [],
		},
		{
			type: 'Elements',
			draggableItems: [{
				name: 'p',
				type: 'p',
				content: '',
				class: 'border p-4 rounded border-dashed border-black',
			}],
		},
		{
			type: 'Components',
			draggableItems: [{
				name: 'Panel',
				type: Panel
			}],
		},
		{
			type: 'Alerts',
			draggableItems: [],
		},
		{
			type: 'Logic',
			draggableItems: [],
		},
	];
</script>

<div class="mr-2 p-2 h-full bg-gray-200 dark:bg-gray-950">ComponentToolBar
	<div class="join join-vertical w-full">
		{#each toolBarItems as item}
			<div class="collapse collapse-arrow join-item">
				<input type="radio" name="my-accordion-4" />
				<div class="collapse-title text-xl font-medium">
					{item.type}
				</div>
				<div class="collapse-content">
					{#each item.draggableItems as component}
						<Draggable bind:component={component}/>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>