<script lang="ts">
import Carousel from 'svelte-carousel'
</script>

<Carousel>
    <div class="slide-content">Slide 1</div>
    <div class="slide-content">Slide 2</div>
    <div class="slide-content">Slide 3</div>
    <div class="slide-content">Slide 4</div>
</Carousel>

<p>test-home</p>

<style lang="scss">
.slide-content {
    height: 400px;
    background-color: bisque;
    width: 100%;
}

</style>