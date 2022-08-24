<script lang="ts">
import Content from "./Content.svelte";

    type Member = {
        src: string,
        name: string,
        department: "Team Leader" | "Pilot/Hardware" | "Hardware" | "Pilot/Programming" | "Programming" | "Engineering Notebook" | "Marketing" | "Volunteer",
        desc: string
    }
    export let member: Member;
</script>

<Content>
    <img src={member.src} alt={member.name}>
    <div>
        <p>{member.name}</p>
        <p>{member.department}</p>
        <p>{member.desc}</p>
    </div>


</Content>

<style lang="scss">
img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgb(0, 0, 0);
}

p {
    margin: 0;
}

div {
    display: flex;
    flex-direction: column;
}
</style>