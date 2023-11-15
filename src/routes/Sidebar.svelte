<script>
	const nodeTypes = ['input', 'default'];

	const onDragStart = (event, nodeType) => {
		if (!event.dataTransfer) {
			return null;
		}
		event.dataTransfer.setData('application/svelteflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};
</script>

<div class="bg-base-200 p-4 h-screen">
	<div class="text-sm mb-4">Drag nodes from here:</div>
	{#each nodeTypes as type}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			id={`drag-${type}`}
			class="bg-white border p-2 w-32 mb-2 cursor-move"
			draggable="true"
			on:dragstart={(event) => onDragStart(event, type)}
		>
			{type} Node
		</div>
	{/each}
</div>
