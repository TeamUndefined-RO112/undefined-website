<script lang="ts">
import { Router, Route } from "svelte-routing";
import Divider from "./components/Divider.svelte";
import Footer from "./components/Footer.svelte";
import Navbar from "./components/Navbar.svelte";
import Apply from "./routes/Apply.svelte";
import Championship from "./routes/Championship.svelte";
import Contact from "./routes/Contact.svelte";
import Home from "./routes/Home.svelte";
import Sponsors from "./routes/Sponsors.svelte";
import Team from "./routes/Team.svelte";

</script>

<Router url="">
	<Navbar/>
	
	<main>
		<Route path="/"><Home /></Route>
		<Route path="team"><Team /></Route>
		<Route path="team/sponsors"><Sponsors /></Route>
		<Route path="team/apply"><Apply /></Route>
		<Route path="championship"><Championship /></Route>
		<Route path="contact"><Contact /></Route>
	</main>
	<Footer/>
</Router>

<style lang="scss">
main {
	margin-top: 3.5rem;
	min-height: calc(100vh - 150px - 3.5em);
}
</style>