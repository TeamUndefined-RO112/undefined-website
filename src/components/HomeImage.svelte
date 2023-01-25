<script lang="ts">
    export let src: string;
    export let alt: string = "alt";
</script>

<img src={src} alt={alt}>

<style>
img {
    height: 20em;
    width: 30em;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

@media screen and (max-width: 600px) {
    img {
        height: 14em;
        width: 20em;
    }
}
</style>
