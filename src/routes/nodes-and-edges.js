import { Position, MarkerType } from '@xyflow/svelte';
import { writable } from 'svelte/store';

const nodeDefaults = {
	sourcePosition: Position.Right,
	targetPosition: Position.Left,
	class: 'rounded-full aspect-square w-20 bg-white flex items-center justify-center'
};

export const nodes = writable([
	{
		id: '1',
		position: { x: 0, y: 0 },
		data: {
			label: '⬛️'
		},

		...nodeDefaults
	},
	{
		id: '2',
		position: { x: 250, y: -100 },
		data: {
			label: '🟩'
		},
		...nodeDefaults
	},
	{
		id: '3',
		position: { x: 250, y: 100 },
		data: {
			label: '🟧'
		},
		...nodeDefaults
	},
	{
		id: '4',
		position: { x: 500, y: 0 },
		data: {
			label: '🟦'
		},
		...nodeDefaults
	}
]);

export const edges = writable([
	{
		id: '1-2',
		type: 'default',
		source: '1',
		target: '2'
	},
	{
		id: '1-3',
		type: 'default',
		source: '2',
		target: '3'
	}
]);
