<script lang="ts">
    export let href:string="/";
    export let path: string;

    $: isActive = path === href;
</script>

<a
    href={href}
    class="relative mx-2 md:mx-4 px-3 py-2 font-rajdhani font-medium text-sm md:text-base uppercase tracking-wide transition-all duration-300 group"
    class:active={isActive}
>
    <!-- Background glow on hover -->
    <div class="absolute inset-0 bg-primary-green/0 group-hover:bg-primary-green/10 transition-all duration-300 -z-10"></div>

    <!-- Text -->
    <span
        class="relative transition-colors duration-300"
        class:text-primary-green={isActive}
        class:text-gray-300={!isActive}
        class:group-hover:text-primary-green={!isActive}
    >
        <slot/>
    </span>

    <!-- Bottom border accent -->
    <div
        class="absolute bottom-0 left-0 h-[2px] bg-primary-green transition-all duration-300"
        class:w-full={isActive}
        class:w-0={!isActive}
        class:group-hover:w-full={!isActive}
    ></div>

    <!-- Corner accents (only on active) -->
    {#if isActive}
        <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary-green"></div>
        <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary-green"></div>
    {/if}
</a>

<style>
    .active {
        text-shadow: 0 0 10px rgba(81, 146, 89, 0.5);
    }
</style>