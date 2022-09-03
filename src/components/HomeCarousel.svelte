<script lang="ts">
    import Carousel from 'svelte-carousel'

</script>
<Carousel autoplay
duration={1000}
autoplayDuration={5000}
let:showPrevPage
let:showNextPage>
<div slot="prev" on:click={showPrevPage} class="custom-arrow">⮜</div>
    <slot/>
<div slot="next" on:click={showNextPage} class="custom-arrow right-0">⮞</div>
</Carousel>

<style lang="scss">
    .custom-arrow {
    height: 100%;
    position: absolute;
    width: 40px;
    color: white;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    user-select: none;
}

.right-0 {
    right:0;
}

</style>