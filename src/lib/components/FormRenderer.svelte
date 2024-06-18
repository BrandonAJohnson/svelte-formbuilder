<script lang="ts">
   import type { FormBuilderData } from "$lib/index.d";
	export let formBuilderData: FormBuilderData[] = [];
	export let debug: boolean = false;
</script>

{#if Array.isArray(formBuilderData)}
	{#each formBuilderData as element, i}
		{#if debug}
			<div class="border-red-600 border-2 m-2 p-2">
				<p class="font-bold text-red-600">DEBUG:</p>
				<pre>{JSON.stringify(element, null, 4)}</pre>
			</div>
		{/if}
		{#if debug}
			rendering {#if typeof element.type === 'string'}element{:else}component{/if} <b>{element.name}</b>
		{/if}
		<div class={`${element.selected && 'border-2 border-green-600'}`}>
			{#if typeof element.type === 'string'}
				<svelte:element this={element.type} class={element.class}>
					{element.content||''}
					{#if Array.isArray(element.children)}
							<div>
								<svelte:self formBuilderData={element.children} debug={debug}/>
							</div>
						{/if}
				</svelte:element>
			{:else}
				<svelte:component this={element.type} {...element.props}>
					<svelte:fragment slot="default">
						{element.content||''}
						{#if Array.isArray(element.children)}
							<div>
								<svelte:self formBuilderData={element.children} debug={debug}/>
							</div>
						{/if}
					</svelte:fragment>
				</svelte:component>
			{/if}
		</div>
	{/each}
{/if}
