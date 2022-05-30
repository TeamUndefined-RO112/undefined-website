<script lang="ts">
import Carousel from 'svelte-carousel'

const scrollPage = () => {
    console.log("tt")
    window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
}

</script>

<Carousel autoplay
duration={1000}
autoplayDuration={5000}
let:showPrevPage
let:showNextPage>

    <div slot="prev" on:click={showPrevPage} class="custom-arrow">⮜</div>

    <img src="/img/support_labs06.jpg" class="slide-content" alt="bg">
    <img src="/img/support_labs06.jpg" class="slide-content" alt="bg">
    <img src="/img/support_labs06.jpg" class="slide-content" alt="bg">

    <div slot="next" on:click={showNextPage} class="custom-arrow right-0">⮞</div>
</Carousel>

<div class="hero">
    <img src="/img/long-logo.png" class="image" alt="bg">
    <div class="description">Cea mai jmek echipa de robo evăr!!</div>
</div>

<p class="down-arrow" on:click|preventDefault="{scrollPage}">⮟</p>

<img src="/img/support_labs06.jpg" class="slide-content" alt="bg">

<style lang="scss">

.down-arrow {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 3em;
    color: white;
}

.hero {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;

    display: flex;
    align-items: center;
    flex-direction: column;
    .image {
        width: 40vmax;
    }
    .description {
        color: white;
        font-size: 1.5em;
    }
}

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

.slide-content {
    height:calc(100vh - 3.5rem - 20px);
    background-color: bisque;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
}

nav {
    background-color: aqua;
}

</style>