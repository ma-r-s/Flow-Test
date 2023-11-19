<script>
	import { nodes, edges } from '$lib/nodes-and-edges.js';
	import Trigger from './Trigger.svelte';
	import { Handle, Position } from '@xyflow/svelte';
	export let id;
	let out;

	$: trigger = () => {
		out.data?.trigger();
	};
	let nodesData;

	nodes.subscribe((value) => {
		nodesData = value;
	});

	edges.subscribe((value) => {
		//Check for changes on the output
		let edge = value.find((edge) => edge.source === id);
		let node = nodesData.find((node) => node.id == edge?.target);
		if (node != out) {
			out = node;
		}
	});
</script>

<Trigger on:click={trigger} />
<Handle type="source" position={Position.Right} />
