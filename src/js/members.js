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

setInterval(()=> { // MEGA ROMANEASCA -> TREBUIE FCT MAI BN
    let transform = document.getElementById(yr).getBoundingClientRect();
    let space = transform.height + transform.top + transform.y;
    console.log(transform.height + " " + transform.top + " " + transform.y);
    document.getElementById("footer").style.top = `${transform.height+43}px`;
},10)

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
    if(year=="2018") p3.classList.add("desc-small");
    else p3.classList.add("desc");
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

generateMember(2021,"../src/img/member/mihnea-manta.png","Manta Mihnea Vasile","Team Leader","I like hiking and organising my co-workers.")
generateMember(2021,"../src/img/member/manta-stefan.png","Manta Mădălin Ștefan","Pilot/Hardware","I am in this team beacuse of my passion for the new technology.")
generateMember(2021,"../src/img/member/meserus.png","Meseruș Mihai Adrian","Hardware","I joined this team beacuse I want to develop my skills.")
generateMember(2021,"../src/img/member/calmac-stefan.png","Calmâc Ștefan","Hardware","I like playing basketball, programming and building robots.")
generateMember(2021,"../src/img/member/manea-alex.png","Manea Gabriel Alexandru","Hardware","I like building robots, that`s why I am in this team.")
generateMember(2021,"../src/img/member/coman-david.png","Coman David Ilie","Hardware","I enjoy both technology and sport.")
generateMember(2021,"../src/img/member/caldararu-denisa.png","Căldăraru Denisa Elena","Pilot/Programming","My hobbies are playing the guitar,video games,travelling and programming.")
generateMember(2021,"../src/img/member/cristea-bianca.png","Cristea Elena Bianca","Programming","I am friendly and I enjoy working with others.")
generateMember(2021,"../src/img/member/stoian-tudor.png","Stoian Tudor Andrei","Programming","I am a good teammate nd I adapt easily to new situations.")
generateMember(2021,"../src/img/member/traian.png","Dobrescu Traian Andrei","Programming","Some of the things that I like are money, programming and maths.")
generateMember(2021,"../src/img/member/patric.png","Tîrîlă Patric Gabriel","Programming","My hobbies are programming and editing in photoshop.")
generateMember(2021,"../src/img/member/plesa-alexia.png","Pleșa Alexia Gabriela","Engineering Notebook","I like reading and I consider myself a creative person.")
generateMember(2021,"../src/img/member/vulpe-diana.png","Vulpe Diana Gabriela","Engineering Notebook","I like trying new things so I decided to join the team.")
generateMember(2021,"../src/img/member/gilma-alesia.png","Gîlmă Alesia Florina","Engineering Notebook","I like reading and I consider myself a creative person.")
generateMember(2021,"../src/img/member/badea-irina.png","Badea Irina Gabriela","Marketing","I wanted to be part of this team to help promoting it on social media.")
generateMember(2021,"../src/img/member/tache.png","Tache Bogdan Gabriel","Volunteer - Hardware","Robotics is one of my dearest hobbies beacuse I`ve always been interested in it.")
generateMember(2021,"../src/img/member/george-geana.png","Geană George Gabriel","Volunteer - Hardware","I enjoy finfing out new things about technology and doing some form of sport.")
generateMember(2021,"../src/img/member/maria-radu.png","Radu Bianca Maria","Volunteer - Marketing","I like trying out new things so that i can find new passions of me.")



generateMember(2020,"../src/img/member/mihnea-manta.png","Manta Mihnea Vasile","Team Leader","It is my third season in this team. I like hiking and organizing my co-workers. I also enjoy 3D printing.")
generateMember(2020,"../src/img/member/manta-stefan.png","Manta Mădălin Ștefan","Pilot/Hardware","I enjoy playing Racing Games, riding my bike with my friends or playing football.")
generateMember(2020,"../src/img/member/calmac-stefan.png","Calmâc Ștefan","Hardware","I like playing basketball, programming and building robots. I am quite a boring person considering that I usually sleep in my free time.")
generateMember(2020,"../src/img/member/manea-alex.png","Manea Alexandru","Hardware","I like spending my free time cycling or listening to music. I like building robots, so that’s why I am in this team.")
generateMember(2020,"../src/img/member/coman-david.png","Coman David Ilie","Hardware","I am keen on technology and sports. I joined the team to gain experience about robotics and to develop my teamwork abilities.")
generateMember(2020,"../src/img/member/patric.png","Tîrîlă Patric","Programming","I enjoy learning new things and working with other people which are the 2 biggest reasons I joined this team.")
generateMember(2020,"../src/img/member/cristea-bianca.png","Cristea Bianca","Programming","I consider myself a serious and hardworking person, these being the traits that recommend me for this team.")
generateMember(2020,"../src/img/member/radu-cristian.png","Radu Cristian","Programming","I am an introvert and I like programming. I decided to join the team beacuse I want to be a part of anything that involves technology.")
generateMember(2020,"../src/img/member/carol.png","Bazga Carol","Programming","I`m passionate about computer science, math and physics. I can`t live without music, especially hard work.")
generateMember(2020,"../src/img/member/gilma-alesia.png","Gîlmă Alesia","Engineering Notebook","I like reading and writing and I consider myself a creative person. I enjoy working in a team and  I also am the shortest one here.")
generateMember(2020,"../src/img/member/vulpe-diana.png","Vulpe Diana","Engineering Notebook","My sister told me about this team and because I like trying new things I decided to join it. I also enjoy singing and dancing.")
generateMember(2020,"../src/img/member/plesa-alexia.png","Pleșa Alexia","Engineering Notebook","I like writing a lot and keeping things organized so that’s the reason I wanted to be in this team.")
generateMember(2020,"../src/img/member/anghel-rares.png","Anghel Rareș","Marketing","I like video games and everything that has to do with social media. I like helping others, even though I don`t know how to help them.")
generateMember(2020,"../src/img/member/bunea-maria.png","Bunea Maria","Marketing","This year I would like to learn as much as possible in the field of leadership to inspire my colleagues.")
generateMember(2020,"../src/img/member/badea-irina.png","Badea Irina","Marketing","Given the fact that I am passionate about everything related to the online environment, I wanted to be part of this team to help promote on social media.")
generateMember(2020,"../src/img/member/bogdan-burlan.png","Burlan Bogdan","Volunteer - Programming","I want to work in this group to improve my teamwork abilities. I also like programming.")
generateMember(2020,"../src/img/member/meserus.png","Meseruș Mihai","Volunteer - Hardware","I like riding the bike and cooking. I want to be on this team to spend more time with my friends and improve my robotics skill.")
generateMember(2020,"../src/img/member/tache.png","Tache Bogdan","Volunteer - Hardware","I like this crew, particularly the robots. It has always been my dream to work in a team that specializes in robotics.")




generateMember(2018,"../src/img/member/enoae-andrei.png","Enoae Andrei","Team Leader","I am the captain and founder of UNDEFINED, so basically I do a bit of everything and I make sure everybody’s ideas are heard. I love coming up with new innovative designs to solve problems, it’s a way of applying my other passion for physics into the real world.")
generateMember(2018,"../src/img/member/narcis.png","Pescaru Narcis","Hardware","I’m the guy who tries to repair everything I can. I like to work with my team and I enjoy building robots. My main goal is to learn a little bit of everything so I can help everyone in my team.")
generateMember(2018,"../src/img/member/manta-stefan.png","Manta Mădălin Ștefan","Hardware","I’m a new member of UNDEFINED. I like playing video games, driving cars and also being a robot pilot. I have a creative mind and I love to work along the team to achieve the best results.")
generateMember(2018,"../src/img/member/kushymr.png","Brebeanu Alexandru","Hardware","I have only joined Team UNDEFINED this year and I am part of the hardware department. I am looking forward to learning all sorts of new things and meeting many awesome people.")
generateMember(2018,"../src/img/member/mihnea-manta.png","Manta Mihnea","Hardware","I joined the team last year and I’m also the youngest member. My job is to design a functional and reliable robot with the help of the rest of the hardware team and 3D printing which helps us because we can create new parts that are specific to our robot.")
generateMember(2018,"../src/img/member/calin.png","Froicu Călin","Hardware","I am passionate about video games and technology and I’m keen on learning new things. I am real proud of being a part of this project as it is a very interesting topic that will play a big role in the future. I am looking forward to meeting even more amazing people during the FTC contests.")
generateMember(2018,"../src/img/member/enache-andrei.png","Enache Andrei","Hardware","I’m a member of the hardware team, and my mission is to make my colleagues’ ideas about the robot’s structure come to life. Also, this year I would like to learn as much as I can about what it takes to be a leader, so I can inspire my teammates.")
generateMember(2018,"../src/img/member/victor-brinzea.png","Brînzea Victor","Hardware","I joined this project in order to increase my creativity and my logical thinking. I am a big fan of the evolution of technology and I am proud to be a part of it.")
generateMember(2018,"../src/img/member/goran-alex.png","Goran Alexandru","Hardware","")
generateMember(2018,"../src/img/member/patric.png","Tîrîlă Patrci","Programming","I am one of the programmers and pilots of this team. I love programming and learning new things about hardware and software. In the past, I worked with Python, JavaScript, Html, Css and C++ and I can’t wait to help my teammates win as many competitions as we can.")
generateMember(2018,"../src/img/member/lungu-rares.png","Lungu Rareș","Programming","I’m a member of Team UNDEFINED and also the Head Programmer. I love showing new members that there’s nothing scary in Java programming, you just have to be passionate about it. We made some first steps towards great goals- I am thrilled to have joined this project and I’m ready to give the best I’ve got.")
generateMember(2018,"../src/img/member/marin-andreea.png","Marin Andreea","Programming","I’m a new programmer at Team UNDEFINED. I love challenges and I’m a very fast learner. Although, it’s my first time programming a robot, I’m looking forward to learning and discovering the beauty of programming.")
generateMember(2018,"../src/img/member/bunea-maria.png","Bunea Maria","Engineering Notebook","My job is to maintain the social media accounts and help with the notebook. I do a bit of marketing too. I can’t help with the construction of the robot but I gave a plus to the team anyway.")
generateMember(2018,"../src/img/member/coman-david.png","Postovaru Ștefania","Engineering Notebook","Some fun facts about me are inability to sleep unless I am laying face down and that I tend to do a lot of things, like tying my shoelaces backwards. I’ve recently moved to Câmpina from Constanța, where I practiced handball for 6 years. Moving from the place where I spent my hole life was surprisingly easier than I thought.")

