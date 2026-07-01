<script lang="ts">
import NavbarButton from "./NavbarButton.svelte";

export let url: URL;
let mobileMenuOpen = false;

let y = 0;
let lastY = 0;
let hidden = false;

$: {
    if (y > lastY && y > 80) {
        hidden = true;
    } else if (y < lastY) {
        hidden = false;
    }
    lastY = y;
}

function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
}

function closeMenu() {
    mobileMenuOpen = false;
}
</script>

<svelte:window bind:scrollY={y} />

<nav class="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl h-14 md:h-16 flex justify-center items-center z-[500] text-xs md:text-base backdrop-blur-md hover:backdrop-blur-[24px] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(34,197,94,0.3)] shadow-lg hover:shadow-[0_24px_80px_rgba(34,197,94,0.15)] rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] {hidden ? '-translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'}">
    <!-- Mobile menu button inside nav -->

    <div class="container mx-auto px-4 flex justify-between md:justify-center items-center">
        <!-- Logo with glow effect -->
        <a href="/" class="flex items-center gap-2 md:gap-0 relative group">
            <div class="h-10 w-10 md:h-12 md:w-12 mx-2 flex justify-center items-center relative">
                <div class="absolute inset-0 bg-primary-green/20 blur-xl group-hover:bg-primary-green/40 transition-all duration-300"></div>
                <img src="/logo_undefined_white.svg" alt="team logo" class="relative z-10 transition-transform duration-300 group-hover:scale-110">
            </div>
            <span class="md:hidden text-primary-green font-orbitron font-bold text-base tracking-wider">#19112</span>
        </a>

        <!-- Desktop menu -->
        <div class="hidden md:flex items-center">
            <div class="w-px h-8 mx-4 bg-primary-green/30"></div>
            <NavbarButton href="/" path={url.pathname}>Home</NavbarButton>
            <NavbarButton href="/team" path={url.pathname}>About Us</NavbarButton>
            <NavbarButton href="/robots" path={url.pathname}>Robots</NavbarButton>
            <NavbarButton href="/team/apply" path={url.pathname}>Apply</NavbarButton>
            <NavbarButton href="/team/sponsors" path={url.pathname}>Sponsors</NavbarButton>
            <NavbarButton href="/donate" path={url.pathname}>Donate</NavbarButton>
            <div class="w-px h-8 mx-4 bg-primary-green/30"></div>
            <NavbarButton href="/contact" path={url.pathname}>Contact</NavbarButton>
        </div>

        <!-- Mobile menu button -->
        <button
            class="md:hidden flex flex-col gap-1.5 p-2 hover:bg-primary-green/10 rounded transition-colors relative z-[501]"
            on:click={toggleMenu}
            aria-label="Toggle menu"
        >
            <span class="w-6 h-0.5 bg-primary-green transition-all" class:rotate-45={mobileMenuOpen} class:translate-y-2={mobileMenuOpen}></span>
            <span class="w-6 h-0.5 bg-primary-green transition-all" class:opacity-0={mobileMenuOpen}></span>
            <span class="w-6 h-0.5 bg-primary-green transition-all" class:-rotate-45={mobileMenuOpen} class:-translate-y-2={mobileMenuOpen}></span>
        </button>
    </div>

    <!-- Mobile menu dropdown -->
    {#if mobileMenuOpen}
    <div class="md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-[rgba(10,10,10,0.4)] backdrop-blur-[24px] border border-[rgba(255,255,255,0.08)] shadow-[0_24px_80px_rgba(0,0,0,0.3)] rounded-2xl animate-fade-in-up overflow-hidden">
        <div class="flex flex-col py-4" on:click={closeMenu}>
            <NavbarButton href="/" path={url.pathname}>Home</NavbarButton>
            <NavbarButton href="/team" path={url.pathname}>About Us</NavbarButton>
            <NavbarButton href="/robots" path={url.pathname}>Robots</NavbarButton>
            <NavbarButton href="/team/apply" path={url.pathname}>Apply</NavbarButton>
            <NavbarButton href="/team/sponsors" path={url.pathname}>Sponsors</NavbarButton>
            <NavbarButton href="/donate" path={url.pathname}>Donate</NavbarButton>
            <NavbarButton href="/contact" path={url.pathname}>Contact</NavbarButton>
        </div>
    </div>
    {/if}
</nav>