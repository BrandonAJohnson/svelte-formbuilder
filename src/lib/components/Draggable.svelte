<script lang="ts">
   import type { FormBuilderData } from "$lib/index.d";
	import { setCurrentDraggable } from "$lib/stores/drag";

	export let component: FormBuilderData;

	function onDragStart(e: DragEvent) {
		console.log("onDragStart",e)

		setCurrentDraggable(component);
		setTimeout(() => {
			document?.getElementById(component.name+'-container')?.classList.add('opacity-30', 'border', 'border-2', 'rounded', 'border-dashed', 'border-slate-950');
		});
	}

	function onDragEnd(e: DragEvent) {
		console.log("onDragEnd",e)
		setTimeout(() => {
			document?.getElementById(component.name+'-container')?.classList.remove('opacity-30', 'border', 'border-2', 'rounded', 'border-dashed', 'border-slate-950');
		});
	}
</script>

<h2 class="font-bold">{component.name}</h2>
<div id={`${component.name}-container`} draggable="true" class="w-full cursor-move" on:dragstart={onDragStart} on:dragend={onDragEnd} role="form">
	{#if typeof component.type === 'string'}
		<svelte:element this={component.type} {...component.props}>{component.content}</svelte:element>
	{:else}
		<svelte:component this={component.type} {...component.props}/>
	{/if}
</div>