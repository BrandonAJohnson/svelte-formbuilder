<script>
	import { ChevronDown, ChevronRight } from "lucide-svelte";
	export let collapsible = false;
	let _collapsed = false;

	function toggleCollapsed() {
		_collapsed = !_collapsed;
	}
</script>

<div class="flex flex-col w-10/12 m-auto shadow-lg border dark:border-gray-50 border-gray-50 bg-white dark:bg-white dark:text-black p-2">
	<div class="text-lg sm:text-3xl font-medium p-2 inline-block">
		{#if collapsible}
			<button on:click={toggleCollapsed} aria-label="Collapse Panel">
				{#if _collapsed}
					<ChevronRight />
				{:else}
					<ChevronDown />
				{/if}
			</button>
		{/if}
		<slot name="header">Header</slot>
	</div>
	<hr>
	<div class="p-2"><slot name="body">Body</slot></div>
	<hr>
	<div class="p-2"><slot name="footer">Footer</slot></div>
</div>