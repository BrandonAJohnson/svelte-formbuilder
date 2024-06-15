<script lang="ts">
	import { ChevronDown, ChevronRight } from "lucide-svelte";
	export let collapsible:boolean = false;
	export let headerText:string = '';

	let _collapsed:boolean = false;

	function toggleCollapsed() {
		_collapsed = !_collapsed;
	}
</script>

<div class="flex flex-col w-10/12 mx-auto shadow-xl border dark:border-gray-50 border-gray-50 bg-white dark:bg-white dark:text-black p-2 mb-5 min-w-min max-w-screen-xl">
	<div class="text-lg sm:text-3xl font-medium p-2 flex flex-row">
		{#if collapsible}
			<button on:click={toggleCollapsed} aria-label="Collapse Panel">
				{#if _collapsed}
					<ChevronRight />
				{:else}
					<ChevronDown />
				{/if}
			</button>
		{/if}
		<div class="px-2"><div class="font-bold text-2xl">{headerText||''}</div></div>
	</div>
	<hr>
	{#if !_collapsed}
		<div class="p-2 duration-200"><slot></slot></div>
		<hr>
		<div class="p-2"></div>
	{/if}
</div>