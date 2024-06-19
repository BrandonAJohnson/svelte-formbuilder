<script lang="ts">
   import type { FormBuilderData } from "$lib/index.d";
   import { debug } from "$lib/stores/debug";
	import { currentDraggable } from "$lib/stores/drag";
	import { get } from "svelte/store";

	export let formBuilderData: FormBuilderData[] = [];

	function onDragEnter(e: DragEvent, component: FormBuilderData) {
		console.log('onDragEnter', e, component);
	}

	function onDrop(e: DragEvent, component: FormBuilderData) {
		console.log('onDrop', e, component);
		const data: FormBuilderData|undefined = get(currentDraggable);
		if (data?.type && formBuilderData) {
			data.id = formBuilderData.length;
			let i = formBuilderData.findIndex(e => e.id === component.id);
			console.log("i", i, formBuilderData?.[i])
			if (formBuilderData[i] && formBuilderData[i].canBeDroppedInto) {
				if (!formBuilderData[i].children) {
					formBuilderData[i].children = [];
				}
				(<FormBuilderData[]>formBuilderData[i].children).push(data);
				formBuilderData = formBuilderData;
			}
		}
	}

	function onDragLeave(e: DragEvent, component: FormBuilderData) {
		console.log("onDragLeave", e, component);
	}

	function onDragOver(e: DragEvent, component: FormBuilderData) {
		e.preventDefault();
		console.log("onDragOver", e, component);
	}
</script>

{#if Array.isArray(formBuilderData)}
	{#each formBuilderData as component, i}
		{#if $debug}
			<div class="border-red-600 border-2 m-2 p-2">
				<p class="font-bold text-red-600">DEBUG:</p>
				<pre>{JSON.stringify(component, null, 4)}</pre>
			</div>
		{/if}
		{#if $debug}
			rendering {#if typeof component.type === 'string'}element{:else}component{/if} <b>{component.name}</b>
		{/if}

		{#if component.canBeDroppedInto}
			<div class={`${component.selected && 'border-2 border-green-600'}`}
				on:dragenter={(e) => {onDragEnter(e, component)}}
				on:drop={(e) => {onDrop(e, component)}}
				on:dragleave={(e) => {onDragLeave(e, component)}}
				on:dragover={(e) => {onDragOver(e, component)}}
				aria-dropeffect="copy" role="region">
				{#if typeof component.type === 'string'}
					<svelte:element this={component.type}>
						{component.content||''}
						{#if Array.isArray(component.children)}
							<div>
								<svelte:self formBuilderData={component.children}/>
							</div>
						{/if}
					</svelte:element>
				{:else}
					<svelte:component this={component.type} {...component.props}>
						<svelte:fragment slot="default">
							{component.content||''}
							{#if Array.isArray(component.children)}
								<div>
									<svelte:self formBuilderData={component.children}/>
								</div>
							{/if}
						</svelte:fragment>
					</svelte:component>
				{/if}
			</div>
		{:else}
			<div class={`${component.selected && 'border-2 border-green-600'}`}>
				{#if typeof component.type === 'string'}
					<svelte:element this={component.type}>
						{component.content||''}
						{#if Array.isArray(component.children)}
							<div>
								<svelte:self formBuilderData={component.children}/>
							</div>
						{/if}
					</svelte:element>
				{:else}
					<svelte:component this={component.type} {...component.props}>
						<svelte:fragment slot="default">
							{component.content||''}
							{#if Array.isArray(component.children)}
								<div>
									<svelte:self formBuilderData={component.children}/>
								</div>
							{/if}
						</svelte:fragment>
					</svelte:component>
				{/if}
			</div>
		{/if}
	{/each}
{/if}
