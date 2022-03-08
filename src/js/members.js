let yr = 2021;
let changingYear = false;
let animtime = 500;
let changeYear = function (newYr) {
    if(changingYear) return;
    document.getElementById(yr).style.opacity=0;
    changingYear = true;
    setTimeout(() => {
        document.getElementById(newYr).style.opacity=1;
        setTimeout(() => {
            yr = newYr;
            changingYear = false;

        let transform = document.getElementById(newYr).getBoundingClientRect();
        let space = transform.height + transform.top + transform.y;
        console.log(transform.height + " " + transform.top + " " + transform.y);
        document.getElementById("footer").style.top = `${transform.height+43}px`;
        },animtime);
        
    },animtime);
}


let generateMember = function (year, img, name, department, desc) {
    let block = document.createElement("div");
    block.classList.add("member-cont");
    block.classList.add(colorOfDepartment(department));
    let image = document.createElement("img");
    image.classList.add("pfp");
    image.src = img;

    block.appendChild(image);

    let content = document.createElement("div");
    content.classList.add("member-content");


    let title = document.createElement("div");
    title.classList.add("textbox");

    let p1 = document.createElement("p");
    p1.classList.add("name");

    let b = document.createElement("b");
    b.innerHTML = name;
    p1.appendChild(b);
    title.appendChild(p1);


    let p2 = document.createElement("p");
    p2.classList.add("department");
    p2.innerHTML = department;
    title.appendChild(p2);

    let descr = document.createElement("div");
    descr.classList.add("textbox");

    let p3 = document.createElement("p");
    p3.classList.add("desc");
    p3.innerHTML = "\""+desc+"\"";
    descr.appendChild(p3);

    content.appendChild(title);
    content.appendChild(descr);

    block.appendChild(content);


    document.getElementById(year).appendChild(block);
}

let colorOfDepartment=function (department) {
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

generateMember(2022,"../src/img/member/mihnea-manta.png","Manta Mihnea Vasile","Team Leader","I like hiking and organising my co-workers.")
generateMember(2022,"../src/img/member/manta-stefan.png","Manta Mădălin Ștefan","Pilot/Hardware","I am in this team beacuse of my passion for the new technology.")
generateMember(2022,"../src/img/member/meserus.png","Meseruș Mihai Adrian","Hardware","I joined this team beacuse I want to develop my skills.")
generateMember(2022,"../src/img/member/calmac-stefan.png","Calmâc Ștefan","Hardware","I like playing basketball, programming and building robots.")
generateMember(2022,"../src/img/member/manea-alex.png","Manea Gabriel Alexandru","Hardware","I like building robots, that`s why I am in this team.")
generateMember(2022,"../src/img/member/coman-david.png","Coman David Ilie","Hardware","I enjoy both technology and sport.")
generateMember(2022,"../src/img/member/caldararu-denisa.png","Căldăraru Denisa Elena","Pilot/Programming","My hobbies are playing the guitar,video games,travelling and programming.")
generateMember(2022,"../src/img/member/cristea-bianca.png","Cristea Elena Bianca","Programming","I am friendly and I enjoy working with others.")
generateMember(2022,"../src/img/member/stoian-tudor.png","Stoian Tudor Andrei","Programming","I am a good teammate nd I adapt easily to new situations.")
generateMember(2022,"../src/img/member/traian.png","Dobrescu Traian Andrei","Programming","Some of the things that I like are money, programming and maths.")
generateMember(2022,"../src/img/member/patric.png","Tîrîlă Patric Gabriel","Programming","My hobbies are programming and editing in photoshop.")
generateMember(2022,"../src/img/member/plesa-alexia.png","Pleșa Alexia Gabriela","Engineering Notebook","I like reading and I consider myself a creative person.")
generateMember(2022,"../src/img/member/vulpe-diana.png","Vulpe Diana Gabriela","Engineering Notebook","I like trying new things so I decided to join the team.")
generateMember(2022,"../src/img/member/gilma-alesia.png","Gîlmă Alesia Florina","Engineering Notebook","I like reading and I consider myself a creative person.")
generateMember(2022,"../src/img/member/badea-irina.png","Badea Irina Gabriela","Marketing","I wanted to be part of this team to help promoting it on social media.")
generateMember(2022,"../src/img/member/tache.png","Tache Bogdan Gabriel","Volunteer - Hardware","Robotics is one of my dearest hobbies beacuse I`ve always been interested in it.")
generateMember(2022,"../src/img/member/george-geana.png","Geană George Gabriel","Volunteer - Hardware","I enjoy finfing out new things about technology and doing some form of sport.")
generateMember(2022,"../src/img/member/maria-radu.png","Radu Bianca Maria","Volunteer - Marketing","I like trying out new things so that i can find new passions of me.")

/*generateMember(2021,"../src/img/member/coman-david.png","Manta Mihnea Vasile","Team Leader","It is my third season in this team. I like hiking and organizing my co-workers. I also enjoy 3D printing.")
generateMember(2021,"../src/img/member/coman-david.png","Manta Mădălin Ștefan","Pilot/Hardware","I enjoy playing Racing Games, riding my bike with my friends or playing football. These are the things that make me stay creative and bring me ideas to build a better robot.")
generateMember(2021,"../src/img/member/coman-david.png","Calmâc Ștefan","Hardware","I like playing basketball, programming and building robots. I am quite a boring person considering that I usually sleep in my free time.")
generateMember(2021,"../src/img/member/coman-david.png","Manea Alexandru","Hardware","I like spending my free time cycling or listening to music. I like building robots, so that’s why I am in this team.")
generateMember(2021,"../src/img/member/coman-david.png","Coman David Ilie","Hardware","I am keen on technology and sports. I joined the team to gain experience about robotics and to develop my teamwork abilities.")
generateMember(2021,"../src/img/member/coman-david.png","Tîrîlă Patric","Programming","I enjoy learning new things and working with other people which are the 2 biggest reasons I joined this team. My hobbies are programming, editing in photoshop, swimming and I also love english.")
generateMember(2021,"../src/img/member/coman-david.png","Manea Alexandru","Hardware","I like spending my free time cycling or listening to music. I like building robots, so that’s why I am in this team.")
*/


