import { writable } from 'svelte/store';
import { useConnection } from '@xyflow/svelte';
let id = 4;
const edgeDefaults = {
	type: 'smoothstep'
};
const connection = useConnection();
export let getID = () => {
	id++;
	return id.toString();
};
export const nodes = writable([
	{
		id: '1',
		position: { x: 0, y: 0 },
		data: {
			label: '⬛️'
		},
		type: 'Trigger'
	},
	{
		id: '2',
		position: { x: 200, y: 100 },
		data: {
			label: '⬛️'
		},
		type: 'Pitch'
	},
	{
		id: '3',
		position: { x: 400, y: 100 },
		data: {
			label: '⬛️'
		},
		type: 'Oscilator'
	},
	{
		id: '4',
		position: { x: 450, y: 50 },
		data: {
			label: '⬛️'
		},
		type: 'Out'
	}
]);

export const edges = writable([
	{
		id: '1-2',
		source: '1',
		target: '2',
		...edgeDefaults
	},
	{
		id: '2-3',
		source: '2',
		target: '3',
		...edgeDefaults
	},
	{
		id: '3-4',
		source: '3',
		target: '4',
		...edgeDefaults
	}
]);
