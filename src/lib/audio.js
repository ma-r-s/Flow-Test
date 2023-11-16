// import { nodes, edges } from './nodes-and-edges';
import * as Tone from 'tone';
let synth = new Tone.PolySynth(Tone.AMSynth, {}).toDestination();
export const play = () => {
	synth.triggerAttackRelease('C4', '2n');
};
