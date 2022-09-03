<script lang="ts">
    import Content from "../components/Content.svelte";
    import TextBox from "../components/TextBox.svelte";
    import Title from "../components/Title.svelte";
</script>

<Content column uncentered big>
    <Title>Apply</Title>
    <Title secondary>Join us!</Title>
    <TextBox>We take new members every year, from the more experienced students to the beginner middle schoolers. You can apply today by completing the form below. It takes 2 minutes to complete! <a href="https://forms.gle/PaddngZuDx6NyQ4K8">Click here for a direct link to the Form</a></TextBox>
</Content>


<Content>
    <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOaniZyB3sQac6tJ7pb6t48ipFRU7VPJ5ThmOdJbbKE4qSPw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
</Content>


<svelte:head>
    <title>Team Undefined - Apply</title>
</svelte:head>

<style lang="scss">
    div {
        display: flex;
        justify-content: center;
        width: 80vw;
        height: 1640px;
    }
    iframe {
        width: 100%;
    height: 100%;
    }
</style>
