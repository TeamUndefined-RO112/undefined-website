

<script lang="ts">
	import { Router, Route } from "svelte-routing";
import Navbar from "./components/Navbar.svelte";
	import Home from "./routes/Home.svelte";

	export let url = "";
	let path;
	const test = () => {
		console.log(path);
	}
</script>

<Router url="{url}">
	<Navbar/>
	
	<main>
		<Route path="/"><Home /></Route>
		<Route path="team" component="{Home}" />
		<Route path="championship" component="{Home}" />
		<Route path="contact" component="{Home}" />
	</main>
</Router>
<button on:click|preventDefault="{test}">ye</button>


<style lang="scss">
main {
	margin-top: 3.5rem;
}
</style>