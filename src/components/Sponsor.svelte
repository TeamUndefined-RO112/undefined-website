<script lang="ts">
    export let image: string;
    export let text: string;
</script>

<div class="sponsor">
    <img src={image} alt="sponsor">
    <p>{text}</p>
</div>

<style>
    .sponsor {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    img {
        width: 400px;
        height: 200px;
        object-fit: scale-down;
    }

    p {
        font-size: 1.5em;
        font-weight: 700;
    }
</style>
