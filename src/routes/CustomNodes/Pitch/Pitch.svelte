<script>
	let notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
	let octaves = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
	export let currNote = 'A';
	export let currOct = '1';
</script>

<div class="bg-neutral rounded-lg p-2">
	<select bind:value={currNote} class="select select-sm">
		{#each notes as note}
			<option>{note}</option>
		{/each}
	</select>
	<select bind:value={currOct} class="select select-sm">
		{#each octaves as octave}
			<option>{octave}</option>
		{/each}
	</select>
</div>
