<script lang="ts">
   import type { FormBuilderData } from "$lib/index.d";

	export let formBuilderData: FormBuilderData[] = [];
	export let debug: boolean = false;

	let children:any[] = [
				{
					type: 'div',
					name: '<div>',
					content: 'why does this work?',
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
</script>

{#each formBuilderData as element}
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
				{#if element.children}
					{#each element.children as childFormBuilderData}
						<p>{JSON.stringify(childFormBuilderData)}</p>
						<svelte:self formBuilderData={childFormBuilderData} debug={debug}/>
					{/each}
				{/if}
			</svelte:element>
		{:else}
			<svelte:component this={element.type} {...element.props}>
				<svelte:fragment slot="default">
					{element.content||''}
					<pre>{JSON.stringify(element.children, null, 4)}</pre>
					{#if element.children}
						{#each children as childFormBuilderData}
							child: {JSON.stringify(childFormBuilderData, null, 4)}
							<!-- <svelte:self formBuilderData={childFormBuilderData} debug={debug}/> -->
						{/each}
					{/if}
				</svelte:fragment>
			</svelte:component>
		{/if}
	</div>
{/each}