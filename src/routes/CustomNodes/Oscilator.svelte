<script>
	import { Handle, Position, useNodes } from '@xyflow/svelte';
	import Sine from '~icons/mdi/sine-wave';
	import Square from '~icons/mdi/square-wave';
	import Triangle from '~icons/mdi/triangle-wave';
	import Sawtooth from '~icons/mdi/sawtooth-wave';
	export let data;
	export let id;

	const nodes = useNodes();

	function handleInput(evt, handleId) {
		nodes.set(
			Array.from($nodes.values()).map((node) => {
				if (node.id === id) {
					node.data = {
						...node.data,
						selects: {
							...node.data.selects,
							[handleId]: evt.target?.value
						}
					};
				}

				return node;
			})
		);
	}
</script>

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
	<Handle type="source" position={Position.Right} />
</div>
