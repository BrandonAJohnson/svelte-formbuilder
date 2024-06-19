<script>
   import { currentComponent } from "$lib/stores/component";

</script>

<div class="mr-2 p-2 h-full bg-gray-200 dark:bg-gray-950 flex flex-col">
	PropertiesToolBar
	{#if $currentComponent}
		{$currentComponent.name}
	{/if}
</div>