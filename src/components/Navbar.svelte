<script lang="ts">
import NavbarButton from "./NavbarButton.svelte";

export let url: URL;
let mobileMenuOpen = false;

function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
}

function closeMenu() {
    mobileMenuOpen = false;
}
</script>

<nav class="fixed top-0 w-full h-16 md:h-20 flex justify-center items-center z-[500] text-xs md:text-base backdrop-blur-md bg-black/80 border-b border-primary-green/30 shadow-glow">
    <!-- Animated accent line at top -->
    <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-green to-transparent opacity-50"></div>

    <!-- Corner accents -->
    <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-green/40"></div>
    <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-green/40"></div>

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
    <div class="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-primary-green/30 animate-fade-in-up">
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