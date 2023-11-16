<script>
	import Note from '~icons/ph/music-note-simple-fill';
	import { play } from '$lib/audio.js';
</script>

<button on:click={play} class="btn btn-square btn-secondary">
	<Note />
</button>
