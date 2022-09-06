<script lang="ts">
    import Content from "../../components/Content.svelte";
    import Title from "../../components/Title.svelte";
    import Contact from "../../components/Contact.svelte";
    </script>
    
    <Content column big>
        <Title>Contact us!</Title>
        <Title secondary>You can contact us on Instagram or Facebook</Title>
        <Content wrap>
            <a href="https://www.instagram.com/team_undefined/"><Contact image="img/ig.webp" text="Instagram"></Contact></a>
            <a href="https://www.facebook.com/teamundefinedcnng/"><Contact image="img/fb.webp" text="Facebook"></Contact></a>
        </Content>
    </Content>
    
    <svelte:head>
        <title>Team Undefined - Contact</title>
    </svelte:head>
    
    <style lang="scss">
        a {
            text-decoration: none;
            color: initial;
        }
    </style>
    