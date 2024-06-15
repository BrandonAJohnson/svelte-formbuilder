<script>
	import "../app.css";
	import ComponentToolBar from "$lib/components/ComponentToolBar.svelte";
	import PropertiesToolBar from "$lib/components/PropertiesToolBar.svelte";
   import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<svelte:head>
	<title>Form Builder</title>
</svelte:head>

<nav class="w-100 flex flex-row p-2 items-space place-content-between">
	<h1>Form Builder</h1>
	<ThemeToggle />
</nav>
<main class="w-100 flex flex-row">
	<div class="basis-1/6"><ComponentToolBar/></div>
	<div class="basis-8/12"><slot/></div>
	<div class="basis-1/6"><PropertiesToolBar/></div>
</main>