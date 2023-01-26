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


<style>
    img {
        width: 100px;
        height: 100px;
    }

    p {
        margin: 0;
        font-size: 1.5em;
        font-weight: 700;
    }
</style>
