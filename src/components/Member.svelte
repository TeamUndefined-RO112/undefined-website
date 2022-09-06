<script lang="ts">

    type Member = {
        src: string,
        name: string,
        department: "Team Leader" | "Pilot/Hardware" | "Hardware" | "Pilot/Programming" | "Programming" | "Engineering Notebook" | "Marketing" | "Volunteer",
        desc: string
    }
    export let member: Member;

    let colorOfDepartment= function (department:string) {
        let sel = 0;
        let arg = department.split("/");
        if(arg.length != 1) sel = 1;
        if(arg[sel][0]=="V") return "gray";
        if(arg[sel]=="Hardware") return "green";
        if(arg[sel]=="Programming") return "orange";
        if(arg[sel]=="Engineering Notebook") return "red";
        if(arg[sel]=="Marketing") return "purple";
        if(arg[sel]=="Team Leader") return "blue";
    }
</script>

<div class="wrapper {colorOfDepartment(member.department)}">
    <img src={member.src} alt={member.name}>
    <div class="content">
        <div class="title-wrap">
            <p class="title">{member.name}</p>
            <p class="dep">{member.department}</p>
        </div>
        <p class="desc">{member.desc}</p>
    </div>


</div>

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

.wrapper {
    box-shadow: 0px 4px 10px gray;
    border-radius: 5px;
    padding: 16px;
    color: #ffffff;
    width: 500px;

    display: flex;
    justify-content: start;
    gap: 20px;
    .content {
        align-items: baseline;
        justify-content: end;
        gap: 0px;

        .desc {
            font-weight: 300;
            font-size: 0.85em;
        }
    }

    .title-wrap {
        justify-content: end;
        gap: 0px;
        margin-bottom: 10px;

        .dep {
            font-size: 0.8em;
            color: rgba(255, 255, 255, 0.8);
        }

        .title {
            font-size: 1.2em;
        }


    }
}

.green {
  background-color: rgb(79, 165, 86);
}

.orange {
  background-color: rgb(219, 115, 46);
}

.gray {
  background-color: rgb(92, 92, 92);
}

.red {
  background-color: rgb(194, 52, 52);
}

.black {
  background-color: rgb(15, 15, 15);
}

.purple {
  background-color: rgb(75, 40, 104);
}

.blue {
  background-color: rgb(57, 45, 160);
}

@media screen and (max-width: 532px) {
    .wrapper {
        width: 90%;
    }
}

</style>