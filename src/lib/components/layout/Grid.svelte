<script lang="ts">
	import { MODE, currentMode } from "$lib/stores/mode";
	export let cols: number = 1;

	const _colClasses: {[key: number]:string} = {
		1: 'grid-cols-1',
		2: 'grid-cols-2',
		3: 'grid-cols-3',
		4: 'grid-cols-4',
		5: 'grid-cols-5',
		6: 'grid-cols-6',
		7: 'grid-cols-7',
		8: 'grid-cols-8',
		9: 'grid-cols-9',
		10: 'grid-cols-10',
		11: 'grid-cols-11',
		12: 'grid-cols-12',
	};
</script>

<div class={`grid ${_colClasses[cols]} ${$currentMode === MODE.EDIT && 'border border-dashed rounded border-black dark:border-white'}`}>
	<slot></slot>
</div>