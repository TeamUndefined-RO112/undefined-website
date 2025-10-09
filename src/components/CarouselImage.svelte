<script lang="ts">
    export let src: string;
</script>

<img src={src} alt="carousel" class="h-carousel w-full object-cover overflow-hidden transition-transform duration-700 ease-out">

<style>
    img {
        transform-origin: center;
        will-change: transform;
    }
</style>