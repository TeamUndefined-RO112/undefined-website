<script lang="ts">

    type Member = {
        src: string,
        name: string,
        department: "Team Leader" | "Team Leader - Software" | "Team Leader - Hardware" | "Pilot/Hardware" | "Hardware" | "Pilot/Programming" | "Programming" | "Engineering Notebook" | "Marketing" | "Volunteer",
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
        if(arg[sel]=="Team Leader" || arg[sel]=="Team Leader - Software" || arg[sel]=="Team Leader - Hardware") return "blue";
    }

    let accentColor = function (department:string) {
        let sel = 0;
        let arg = department.split("/");
        if(arg.length != 1) sel = 1;
        if(arg[sel][0]=="V") return "rgba(150, 150, 150, 0.3)";
        if(arg[sel]=="Hardware") return "rgba(81, 146, 89, 0.3)";
        if(arg[sel]=="Programming") return "rgba(247, 144, 30, 0.3)";
        if(arg[sel]=="Engineering Notebook") return "rgba(220, 76, 76, 0.3)";
        if(arg[sel]=="Marketing") return "rgba(138, 86, 172, 0.3)";
        if(arg[sel]=="Team Leader" || arg[sel]=="Team Leader - Software" || arg[sel]=="Team Leader - Hardware") return "rgba(100, 149, 237, 0.3)";
    }
</script>

<div class="member-card {colorOfDepartment(member.department)}">
    <!-- Corner accents -->
    <div class="corner-accent top-left"></div>
    <div class="corner-accent top-right"></div>
    <div class="corner-accent bottom-left"></div>
    <div class="corner-accent bottom-right"></div>

    <!-- Accent line -->
    <div class="accent-border" style="background: {accentColor(member.department)}"></div>

    <!-- Image container with overlay -->
    <div class="image-container">
        <img src={member.src} alt={member.name}>
        <div class="image-overlay"></div>
    </div>

    <!-- Content -->
    <div class="content">
        <div class="title-wrap">
            <h3 class="title">{member.name}</h3>
            <span class="department-badge {colorOfDepartment(member.department)}">{member.department}</span>
        </div>
        <p class="desc">{member.desc}</p>
    </div>
</div>

<style>
.member-card {
    position: relative;
    background: linear-gradient(135deg, rgba(24, 24, 24, 0.98) 0%, rgba(18, 18, 18, 0.98) 100%);
    border: 1px solid rgba(81, 146, 89, 0.2);
    clip-path: polygon(
        0 0,
        calc(100% - 15px) 0,
        100% 15px,
        100% 100%,
        15px 100%,
        0 calc(100% - 15px)
    );
    padding: 24px;
    color: #ffffff;
    width: 100%;
    max-width: 520px;
    display: flex;
    gap: 20px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden;
    font-family: 'Rajdhani', 'Exo 2', sans-serif;
}

.member-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(81, 146, 89, 0.08), transparent);
    transition: left 0.6s ease;
}

.member-card:hover::before {
    left: 100%;
}

.member-card:hover {
    transform: translateY(-5px);
    border-color: rgba(81, 146, 89, 0.5);
    box-shadow: 0 10px 40px rgba(81, 146, 89, 0.2),
                0 0 20px rgba(81, 146, 89, 0.1);
}

/* Corner accents */
.corner-accent {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 2px solid rgba(81, 146, 89, 0.4);
    transition: all 0.3s ease;
}

.corner-accent.top-left {
    top: 8px;
    left: 8px;
    border-right: none;
    border-bottom: none;
}

.corner-accent.top-right {
    top: 8px;
    right: 8px;
    border-left: none;
    border-bottom: none;
}

.corner-accent.bottom-left {
    bottom: 8px;
    left: 8px;
    border-right: none;
    border-top: none;
}

.corner-accent.bottom-right {
    bottom: 8px;
    right: 8px;
    border-left: none;
    border-top: none;
}

.member-card:hover .corner-accent {
    border-color: rgba(81, 146, 89, 0.8);
    width: 16px;
    height: 16px;
}

/* Accent border on left */
.accent-border {
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: rgba(81, 146, 89, 0.3);
    transition: width 0.3s ease;
}

.member-card:hover .accent-border {
    width: 6px;
}

/* Image container */
.image-container {
    position: relative;
    flex-shrink: 0;
}

img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 2px;
    border: 2px solid rgba(81, 146, 89, 0.3);
    transition: all 0.3s ease;
}

.member-card:hover img {
    border-color: rgba(81, 146, 89, 0.6);
    transform: scale(1.02);
}

.image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(81, 146, 89, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.member-card:hover .image-overlay {
    opacity: 1;
}

/* Content */
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 0;
}

.title-wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.title {
    font-family: 'Orbitron', monospace;
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    color: #ffffff;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    line-height: 1.2;
}

.department-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 4px 10px;
    border-radius: 2px;
    width: fit-content;
    font-family: 'Rajdhani', sans-serif;
}

.department-badge.green {
    background: rgba(81, 146, 89, 0.2);
    color: rgb(81, 146, 89);
    border: 1px solid rgba(81, 146, 89, 0.4);
}

.department-badge.orange {
    background: rgba(247, 144, 30, 0.2);
    color: rgb(247, 144, 30);
    border: 1px solid rgba(247, 144, 30, 0.4);
}

.department-badge.gray {
    background: rgba(150, 150, 150, 0.2);
    color: rgb(180, 180, 180);
    border: 1px solid rgba(150, 150, 150, 0.4);
}

.department-badge.red {
    background: rgba(220, 76, 76, 0.2);
    color: rgb(220, 76, 76);
    border: 1px solid rgba(220, 76, 76, 0.4);
}

.department-badge.purple {
    background: rgba(138, 86, 172, 0.2);
    color: rgb(138, 86, 172);
    border: 1px solid rgba(138, 86, 172, 0.4);
}

.department-badge.blue {
    background: rgba(100, 149, 237, 0.2);
    color: rgb(100, 149, 237);
    border: 1px solid rgba(100, 149, 237, 0.4);
}

.desc {
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    margin: 0;
}

/* Responsive */
@media screen and (max-width: 640px) {
    .member-card {
        flex-direction: column;
        max-width: 100%;
        padding: 20px;
    }

    img {
        width: 100%;
        height: 200px;
    }

    .title {
        font-size: 1.1rem;
    }
}

</style>