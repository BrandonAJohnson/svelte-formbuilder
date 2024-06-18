<script>
	import "../app.css";
	import ComponentToolBar from "$lib/components/ComponentToolBar.svelte";
	import PropertiesToolBar from "$lib/components/PropertiesToolBar.svelte";
   import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<svelte:head>
	<title>Form Builder</title>
</svelte:head>

<nav class="text-2xl bg-blue-70 w-full flex flex-row p-2 items-space place-content-between">
	<h1>Form Builder</h1>
	<ThemeToggle />
</nav>
<main class="w-full h-full flex flex-row bg-gray-50 dark:bg-gray-950 text-black dark:text-white">
	<div class="basis-1/6 h-full"><ComponentToolBar/></div>
	<div class="basis-8/12 h-full"><slot/></div>
	<div class="basis-1/6 h-full"><PropertiesToolBar/></div>
</main>