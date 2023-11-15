<script>
	import Sine from '~icons/mdi/sine-wave';
	import Square from '~icons/mdi/square-wave';
	import Triangle from '~icons/mdi/triangle-wave';
	import Sawtooth from '~icons/mdi/sawtooth-wave';
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
	<div class="bg-neutral w-32 h-20 rounded-lg flex flex-col justify-evenly">
		<div class="flex justify-evenly">
			<button class="btn btn-sm p-1">
				<Sine />
			</button>
			<button class="btn btn-sm p-1">
				<Square />
			</button>
			<button class="btn btn-sm p-1">
				<Triangle />
			</button>
			<button class="btn btn-sm p-1">
				<Sawtooth />
			</button>
		</div>
		<div class="px-2">
			<input type="range" min="0" max="100" value="50" class="range range-sm" />
		</div>
	</div>
</div>
