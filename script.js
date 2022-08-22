//div ids
const welcome = document.getElementById("welcome");
const starters = document.getElementById("starters");
const start = document.getElementById("start");
const btnStart = document.getElementById("btnStart");
const btnStart2 = document.getElementById("btnStart2");
const startTxt = document.getElementById("starttxt");

//form ids
const form = document.getElementById("form");
const playerName = document.getElementById("PlayerName");
const submit = document.getElementById("submit");
var Name;

//starterbtn ids
const popplio = document.getElementById("popplio");
const scorbunny = document.getElementById("scorbunny");
const snivy = document.getElementById("snivy");

const starterInfoDiv = document.getElementById("starterSelection");
const starterInfo = document.getElementById("starterInfo");
const btnChoose = document.getElementById("choose");

const h1 = document.getElementById("gameTxtTitle");
const routeImg = document.getElementById("routeImg");
const storyDiv = document.getElementById("storyTxtDiv");
const story = document.getElementById("storytxt");
const btnFirstEncounter = document.getElementById("firstEncounter");
const btnfirstTeamEncounter = document.getElementById("firstTeamEncounter");
const btnsecEncounter = document.getElementById("secEncounter");
const btnfirstGym = document.getElementById("firstGym");

//Encounter ids
const encounterDiv = document.getElementById("encounter");
const encounterTxt = document.getElementById("encounterTxt");
const btnKeep = document.getElementById("keep");
const btnLeave = document.getElementById("leave");
const fullPartyDiv = document.getElementById("partyFullDiv");
const btnAdd = document.getElementById("Add");
const btnBox = document.getElementById("box");

//party ids
const party = document.getElementById("partyImg");
const pImg1 = document.getElementById("party1");
const pImg2 = document.getElementById("party2");
const pImg3 = document.getElementById("party3");
const pImg4 = document.getElementById("party4");
const pImg5 = document.getElementById("party5");
const pImg6 = document.getElementById("party6");

function beginning(){
    startTxt.innerHTML = `You suddenly hear a voice calling your name, yelling about going to Professor Oak. You startle out of bed, falling onto the hard-wood floor. Of course! How could you forget!? You yeet your blanket back onto the bed and throw on some clothes before rushing out of the house, absolutely booking it to the professor’s lab. This is it! The start of your adventure! Who knows what it has in store!`;
    btnStart.style.display = "none";
    btnStart2.style.display = "block";
}

function getname(){
    document.body.style.backgroundImage = `url(assets/map.jpg)`;
    welcome.style.display = "block";
    start.style.display = "none";
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(playerName.value != ''){

        localStorage.setItem("Name", playerName.value)
        welcome.style.display = "none";
        starters.style.display = "block";
    }
});

//Popplio
popplio.addEventListener("click",() => {
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "Popplio: The Sea Lion Pokemon, a Water Type";

    btnChoose.addEventListener("click", () =>{
        h1.innerHTML = "You choose Popplio";
        story.innerHTML = "Popplio was added to your party!";
        pImg1.src = `assets/Popplio/Popliopixel.png`;
        pImg1.title = "Popplio";
        document.body.style.backgroundColor = "#457B9D";
        showTxtAndChangeBackground("#2B556F");
        btnFirstEncounter.style.display = "block";
    });
});

//Scorbunny
scorbunny.addEventListener("click", () =>{
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "Scorbunny: The Rabbit Pokemon, a Fire Type";

    btnChoose.addEventListener("click", () =>{
        h1.innerHTML = "You choose Scorbunny";
        story.innerHTML = "Scorbunny was added to your party!";
        pImg1.src = `assets/Scorbunny/scorbunnypixel.png`;
        pImg1.title = "Scorbunny";
        document.body.style.backgroundColor = "#C24B57";
        showTxtAndChangeBackground("#8E2731");
        btnFirstEncounter.style.display = "block";
    });
});

//Snivy
snivy.addEventListener("click", () =>{
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "Snivy: The Grass Snake Pokemon, a Grass Type";

    btnChoose.addEventListener("click", () =>{
        //changing text
        h1.innerHTML = "You choose Snivy";
        story.innerHTML = `The little grass Pokémon shyly approaches you. You slowly reach your hand out, a Pokémon ball laying upon it. You let the snivy make the first move. Snivy was added to your party!`;
        pImg1.src = `assets/Snivy/snivypixel.png`;
        pImg1.title = "Snivy";
        document.body.style.backgroundColor = "#75C45B";
        showTxtAndChangeBackground("#57A03F");
        btnFirstEncounter.style.display = "block";
    });
});

function firstEncounter(){
    //first encounter
    switch(pImg1.title){
        case "Snivy":
            pokename = "Lillipup";
            routeImg.src = `assets/Snivy/lillipup.png`;
            story.innerHTML = `While walking along route 1 you hear a rambunctious barking. A Lillipup runs out in front of you, causing you to fall backwards. The Lillipup continues to run around, barking, before running up to your face. It’s a little ball of energy and seems to be concerned that you’re on the ground. You pet the dog Pokémon and slowly raise from the ground. The pup circles you, barking, making you smile. It seems to want to go with you. You smile, presenting a poke-ball to the little fella. It boops it with his nose, disappearing into the ball. Lillipup joins your team!`;
            pImg2.src = `assets/Snivy/lillipuppixel.png`;
            pImg2.title = "Lillipup";
            break;
        case "Scorbunny":
            pokename = "";
            routeImg.src = `assets/Scorbunny/.png`;
            story.innerHTML = "Story text here";
            pImg2.src = `assets/Scorbunny/audinopixel.png`;
            pImg2.title = "Audino";
            break;
        case "Popplio":
            pokename = "Patrat";
            routeImg.src = `assets/Popplio/patrat.png`;
            story.innerHTML = "Story text here";
            pImg2.src = `assets/Popplio/patratpixel.png`;
            pImg2.title = "Patrat";
            break;
    }
    h1.innerHTML = "You encountered a "+ pokename+ "!";
    btnFirstEncounter.style.display = "none";
    btnfirstTeamEncounter.style.display = "block";
}

function firstTeamEncounter(){
    routeImg.src = `assets/accumula_town.png`;
    h1.innerHTML = "You there!";
    story.innerHTML = `Continuing along on your adventure you stop by a town to give your Pokémon a chance to rest up. On your way to the center you notice a crowd gathered, clearly antsy. You walk over and are presented with a group of people talking about setting Pokémon free. You bring your companions in close and quickly move along, not interested in their propaganda.`;
    btnfirstTeamEncounter.style.display = "none";
    btnsecEncounter.style.display = "block";
}

function secEncounter(){
    switch(pImg1.title){
        case "Snivy":
            pokename = "Purrloin";
            routeImg.src = `assets/Snivy/purloin.png`;
            story.innerHTML = `Continuing along the next route, you and you companions stop for a lunch break. As you stir the heavenly smelling soup you are approached by a confident looking purrloin. The cheeky creature struts towards the pot of soup and sits down, staring directly at you, as if waiting. You sigh but pour the creature a serving. It happily digs in`;
            break;
        case "Scorbunny":
            pokename = "Pidove";
            routeImg.src = `assets/Scorbunny/pidove.png`;
            break;
        case "Popplio":
            pokename = "Wynaut";
            routeImg.src = `assets/Popplio/wynaut.png`;
            break;
    }
    h1.innerText = "You encountered " + pokename;
    
    encounterDiv.style.display = "block";
    btnKeep.style.display = "block";
    btnLeave.style.display = "block";
    btnfirstGym.style.display = "none";
    btnsecEncounter.style.display = "none";
}

function firstGym(){
    h1.innerHTML = "Gym";

    switch(pImg1.title){
        case "Snivy":
            routeImg.src = `assets/Snivy/SnivyGym1.png`;
            if(pImg3.title == ""){
                story.innerHTML = "After training for several days, it’s finally time! You approach your first gym, giddy with nervous excitement. Your snivy walks by your side, ever the loyal friend. You take a deep breath and open the door. Inside you are greeted by three guys and their partner pokemon. This is it. The red head steps forward and introduces himself as Chilli. He will be your opponent. Here goes nothing!";
            }else if(pImg3.title != ""){
                story.innerHTML = "only 3 pokemon";
            }
            break;
        case "Scorbunny":
            routeImg.src = `assets/Scorbunny/ScorbunnyGym1.png`;
            if(pImg3.title == ""){
                story.innerHTML = "only 2 pokemon";
            }else if(pImg3.title != ""){
                story.innerHTML = "only 3 pokemon";
            }
            break;
        case "Popplio":
            routeImg.src = `assets/Popplio/PopplioGym1.png`;
            if(pImg3.title == ""){
                story.innerHTML = "only 2 pokemon";
            }else if(pImg3.title != ""){
                story.innerHTML = "only 3 pokemon";
            }
            break;
    }
}



function keep(){
    switch(pImg1.title){
        case "Snivy":
            if(pImg2.title != "" && pImg3.title == ""){
                pokename = "Purrloin";
                pImg3.src = `assets/Snivy/purloinpixel.png`;
                pImg3.title = "Purrloin";
                story.innerHTML = `You slowly pull out a poke ball and offer it to the purrloin. It is hesitant but slowly boops the ball with its nose. It disappears in a flash of red, quickly reappearing as you let it out to continue its meal`
            }
            break;
        case "Scorbunny":
            if(pImg2.title != "" && pImg3.title == ""){
                pokename = "Wynaut";
                pImg3.src = `assets/Scorbunny/wynautpixel.png`;
                pImg3.title = "Wynaut";
            }
        case "Popplio":
            if(pImg2.title != "" && pImg3.title == ""){
                pokename = "Wynaut";
                pImg3.src = `assets/Popplio/wynautpixel.png`;
                pImg3.title = "Wynaut";
            }
            break;
    }

    btnKeep.style.display = "none";
    btnLeave.style.display = "none";
    h1.innerHTML = "You caught " +pokename;
    story.append(pokename + " was added to your party!");
    btnfirstGym.style.display = "block";
}


function leave(){
    switch(pImg1.title){
        case "Snivy":
            if(pImg2.title != "" || pImg3.title == ""){
                pokename = "Purrloin";
                story.innerHTML = "You stroke the creatures head gently, enthralled by its purring. It happily continues to eat before wandering off after giving you an affectionate headbutt.";
            }
            break;
        case "Scorbunny":
            if(pImg2.title != "" || pImg3.title == ""){
                pokename = "Wynaut";
            }
            break;
        case "Popplio":
            if(pImg2.title != "" || pImg3.title == ""){
                pokename = "Wynaut";
            }
            break;
    }

    btnKeep.style.display = "none";
    btnLeave.style.display = "none";
    h1.innerHTML = "Insert text here";
    story.append("You left "+ pokename);
    btnfirstGym.style.display = "block";
}

function showTxtAndChangeBackground(color){
    h1.style.backgroundColor = "none";
    starterInfoDiv.style.display = "none";
    starters.style.display = "none";
    storyDiv.style.display = "block";
    routeImg.style.display = "block";
    document.body.style.backgroundImage = "none";
    document.body.style.color = "#F1FAEE";
    party.style.display = "block";
    party.style.backgroundColor = color;
    story.style.backgroundColor = color;
    btnAdd.style.backgroundColor = color;
    btnBox.style.backgroundColor = color;
    btnLeave.style.backgroundColor = color;
    btnKeep.style.backgroundColor = color;
    btnFirstEncounter.style.backgroundColor = color;
    btnfirstTeamEncounter.style.backgroundColor = color;
    btnsecEncounter.style.backgroundColor = color;
    btnfirstGym.style.backgroundColor = color;
    btnFirstEncounter.style.display = "none";
    btnfirstTeamEncounter.style.display = "none";
    btnsecEncounter.style.display = "none";
    btnfirstGym.style.display = "none";
}