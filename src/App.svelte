<script lang="ts">
import { Router, Route } from "svelte-routing";
import Divider from "./components/Divider.svelte";
import Footer from "./components/Footer.svelte";
import Navbar from "./components/Navbar.svelte";
import Home from "./routes/Home.svelte";
import Team from "./routes/Team.svelte";

</script>

<Router url="">
	<Navbar/>
	
	<main>
		<Route path="/"><Home /></Route>
		<Route path="team"><Team /></Route>
		<Route path="championship" component="{Home}" />
		<Route path="contact" component="{Home}" />
	</main>
	<Footer/>
</Router>

<style lang="scss">
main {
	margin-top: 3.5rem;
}
</style>