<script lang="ts">
    import Content from "../components/Content.svelte";
    import TextBox from "../components/TextBox.svelte";
    import Title from "../components/Title.svelte";

export let image: string;
export let text: string;
</script>

<Content column>
    <img src={image} alt="sponsor">
    <p>{text}</p>
</Content>


<style lang="scss">
    img {
        width: 400px;
        height: 200px;
        object-fit:scale-down;
    }

    p {
        font-size: 1.5em;
        font-weight: 700;
    }
</style>
