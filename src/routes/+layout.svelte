<script lang="ts">
    import Footer from "../components/Footer.svelte";
    import Navbar from "../components/Navbar.svelte";
</script>

<Navbar/>
<main>
    <slot/>
</main>
<Footer/>

<style lang="scss">

    main {
        margin-top: 3.5rem;
        min-height: calc(100vh - 150px - 3.5em);
    }
    </style>