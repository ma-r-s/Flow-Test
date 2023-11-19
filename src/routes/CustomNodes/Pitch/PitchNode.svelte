<script>
	import * as Tone from 'tone';
	import { nodes, edges } from '$lib/nodes-and-edges.js';
	import Pitch from './Pitch.svelte';
	import { Handle, Position } from '@xyflow/svelte';
	import { onMount } from 'svelte';
	export let id;
	export let data;
	let nodesData;

	let currNote;
	let currOct;
	let synth;
	onMount(() => {
		data.trigger = trig;
		synth = new Tone.Synth().toDestination(); //out.data.synth;
	});

	const trig = () => {
		synth.triggerAttackRelease(currNote + currOct, '8n');
	};

	let inp;
	let out;

	nodes.subscribe((value) => {
		nodesData = value;
	});

	edges.subscribe((value) => {
		//Check for changes on the input
		let edge = value.find((edge) => edge.target === id);
		let node = nodesData.find((node) => node.id == edge?.source);
		if (node != inp) {
			inp = node;
		}
		//Check for changes on the output
		edge = value.find((edge) => edge.source === id);
		node = nodesData.find((node) => node.id == edge?.target);
		if (node != out) {
			out = node;
		}
	});
</script>

<Pitch bind:currNote bind:currOct />
<Handle type="source" position={Position.Right} />
<Handle type="target" position={Position.Left} />
