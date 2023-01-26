<script lang="ts">
import NavbarButton from "./NavbarButton.svelte";

export let url: URL;
</script>

<nav class="fixed top-0 w-full h-14 flex justify-center items-center shadow-xl font-normal bg-[#1a1a1a] z-[500] text-xs md:text-base">
    <a href="/" class="h-10 w-10 mx-2 flex justify-center"><img src="/logo_undefined_white.svg" alt="team logo"></a>
    <div class="w-px h-1/2 mx-0 md:mx-6 bg-gray-300"></div>
    <NavbarButton href="/" path={url.pathname}>Home</NavbarButton>
    <NavbarButton href="/team" path={url.pathname}>About Us</NavbarButton>
    <NavbarButton href="/team/apply" path={url.pathname}>Apply</NavbarButton>
    <NavbarButton href="/team/sponsors" path={url.pathname}>Sponsors</NavbarButton>
    <div class="w-px h-1/2 mx-0 md:mx-6 bg-gray-300"></div>
    <NavbarButton href="/contact" path={url.pathname}>Contact</NavbarButton>
</nav>