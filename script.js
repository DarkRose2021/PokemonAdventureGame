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
var encounterInt;

//starters
const popplio = document.getElementById("popplio");
const scorbunny = document.getElementById("scorbunny");
const snivy = document.getElementById("snivy");
const starterInfoDiv = document.getElementById("starterSelection");
const starterInfo = document.getElementById("starterInfo");
const btnChoose = document.getElementById("choose");

//text
const h1 = document.getElementById("gameTxtTitle");
const routeImg = document.getElementById("routeImg");
const storyDiv = document.getElementById("storyTxtDiv");
const story = document.getElementById("storytxt");

//buttons
const btnFirstEncounter = document.getElementById("firstEncounter");
const btnfirstTeamEncounter = document.getElementById("firstTeamEncounter");
const btnsecEncounter = document.getElementById("secEncounter");
const btnfirstGym = document.getElementById("firstGym");
const btncompgym1 = document.getElementById("compgym1");
const btnthirEncounter = document.getElementById("thirdEncounter");
const btnsecTeamEncounter = document.getElementById("secTeamEncounter");
const btnpopEncounter = document.getElementById("popEncounter");
const btnsecGym = document.getElementById("secGym");
const btnend = document.getElementById("end");

//Encounter ids
const encounterDiv = document.getElementById("encounter");
const encounterTxt = document.getElementById("encounterTxt");
const btnKeep = document.getElementById("keep");
const btnLeave = document.getElementById("leave");

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
        story.innerHTML = "You choose Popplio! The little water Pokémon slowly approaches you. You slowly reach your hand out, a Pokémon ball laying upon it. You let the Popplio make the first move. Popplio was added to your party!";
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
        story.innerHTML = "You choose Scorbunny! The little fire Pokémon boldly approaches you. You reach your hand out, a Pokémon ball laying upon it. The rabbit Pokémon hops up and eagerly taps the ball. Scorbunny was added to your party!";
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
            story.innerHTML = `While walking along route 1 you hear a rambunctious barking. A Lillipup runs out in front of you, causing you to fall backwards. The Lillipup continues to run around, barking, before running up to your face. It’s a little ball of energy and seems to be concerned that you’re on the ground. You pet the pup Pokémon and slowly raise from the ground. The pup circles you, barking, making you smile. It seems to want to go with you. You smile, presenting a poke-ball to the little fella. It boops it with his nose, disappearing into the ball. Lillipup joins your team!`;

            pImg2.src = `assets/Snivy/lillipuppixel.png`;
            pImg2.title = "Lillipup";
            break;

        case "Scorbunny":
            pokename = "Audino";
            routeImg.src = `assets/Scorbunny/audino.png`;
            story.innerHTML = "While walking along route 1 you hear a quite humming noise. You decide to take a break from training and investigate. Its there that you encounter a dazed Audino. It appears to have been hurt recently. Deciding it would be best to get it to a center, you decide to catch it and hurry along to the nerest Pokémon center. ";
            pImg2.src = `assets/Scorbunny/audinopixel.png`;
            pImg2.title = "Audino";
            break;

        case "Popplio":
            pokename = "Patrat";
            routeImg.src = `assets/Popplio/patrat.png`;
            story.innerHTML = "While walking along route 1 you hear a rambunctious barking. A Patrat runs out in front of you, causing you to fall backwards. The Patrat continues to run around, chattering, before running up to your face. It’s a little ball of energy and seems to be concerned that you’re on the ground. You pet the creature and slowly raise from the ground. The Pokémon circles you, chattering, making you smile. It seems to want to go with you. You smile, presenting a poke-ball to the little fella. It boops it with his nose, disappearing into the ball. Patrat joins your team!";
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

function firstGym(){
    h1.innerHTML = "Gym";

    switch(pImg1.title){
        case "Snivy":
            routeImg.src = `assets/Snivy/SnivyGym1.png`;
            story.innerHTML = "After training for several days, it’s finally time! You approach your first gym, giddy with nervous excitement. Your Snivy walks by your side, ever the loyal friend. You take a deep breath and open the door. Inside you are greeted by three trainers and their partner pokemon. This is it. The red head steps forward and introduces himself as Chilli. He will be your opponent. Here goes nothing!";
            break;

        case "Scorbunny":
            routeImg.src = `assets/Scorbunny/ScorbunnyGym1.png`;
            story.innerHTML = "After training for several days, it’s finally time! You approach your first gym, giddy with nervous excitement. Your Scorbunny walks by your side, ever the loyal friend. You take a deep breath and open the door. Inside you are greeted by three guys and their partner pokemon. This is it. The Blue head steps forward and introduces himself as Cress. He will be your opponent. Here goes nothing!";
            break;

        case "Popplio":
            routeImg.src = `assets/Popplio/PopplioGym1.png`;
            story.innerHTML = "After training for several days, it’s finally time! You approach your first gym, giddy with nervous excitement. Your Popplio walks by your side, ever the loyal friend. You take a deep breath and open the door. Inside you are greeted by three guys and their partner pokemon. This is it. The Green head steps forward and introduces himself as Cilan. He will be your opponent. Here goes nothing!";
    }
    
    btnfirstGym.style.display = "none";
    btncompgym1.style.display = "block";
}

function gym1Complete(){
    story.innerHTML = "You beat the first gym and earned your first badge!";
    btncompgym1.style.display = "none";
    btnthirEncounter.style.display = "block";
}

function secTeamEncounter(){
    h1.innerHTML = "Second team encounter";
    story.innerHTML ="On your adventures you discover and explore a cave, known as the well spring cave. Its quite beautiful and there are a ton of sights to take in! While investigating a rock wall you begin to hear commotion. Peering around the corner you see the same group from the town. Its unclear what they’re doing but you, wisely, quickly skedaddle. ";
    routeImg.src = "assets/wellspringcave.png";
    btnsecTeamEncounter.style.display = "none";
    if(pImg1.title == "Popplio" && encounterInt == 3){
        btnpopEncounter.style.display = "block"
    }else{
        btnsecGym.style.display = "block";
    }
}

function secGym(){
    h1.innerHTML = "Gym";
    story.innerHTML = "The cave was a great place to train and you now feel confident that you can take on the next gym! You’re partners are fired up and ready to go, trusting that you can come up with an ample strategy. With your Pokémon’s confidence you enter the gym, hyped for the battle ahead!";
    btnsecGym.style.display = "none";
    btnend.style.display = "block";
}

function end(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
    start.style.display = "block";
    btnend.style.display = "none";
    story.style.display = "none";
    startTxt.innerHTML = "After beating two gyms you and your team take a break. There is no rush for you and everyone deserves some downtime. You rent a nice hotel and spend a few days there. You rest up and bond with your Pokémon while you can. After all, who knows what the future holds? And so, the adventure continues!";
    party.style.display = "none";
    routeImg.style.display = "none";
    h1.style.display = "none";
    btnStart.style.display = "none";
    btnStart2.style.display = "none";
}

function encounters(encounterNum){
    switch(pImg1.title){
        case "Snivy":
            if(encounterNum == 2){
                pokename = "Purrloin";
                routeImg.src = `assets/Snivy/purloin.png`;
                story.innerHTML = `Continuing along the next route, you and you companions stop for a lunch break. As you stir the heavenly smelling soup you are approached by a confident looking purrloin. The cheeky creature struts towards the pot of soup and sits down, staring directly at you, as if waiting. You sigh but pour the creature a serving. It happily digs in`;
                encounterInt = 2;
                btnsecEncounter.style.display = "none"

            }else if(encounterNum == 3){
                pokename = "Blitzle";
                routeImg.src = `assets/Snivy/blitzle.png`;
                story.innerHTML = `Following the high of beating your first gym, you decide to explore the nearby routes. While exploring in the tall grass, you begin to hear a rustling. Suddenly a Blitzle comes stomping out, staring directly at you while impatiently pawing at the ground. It’s a feisty thing that would certainly fit great into your team.`;
                btnthirEncounter.style.display = "none"
                encounterInt = 3;
            }
            break

        case "Scorbunny":
            if(encounterNum == 2){
                pokename = "Wynaut";
                routeImg.src = `assets/Scorbunny/wynaut.png`;
                story.innerHTML = `Continuing along the next route, you and you companions stop for a lunch break. As you stir the heavenly smelling soup you are approached by a curious looking Wynaut. The cheeky creature hobbles towards the pot of soup and sits down, staring directly at you, as if waiting. You sigh but pour the creature a serving. It happily digs in`;
                btnsecEncounter.style.display = "none"
                encounterInt = 2;
            }else if(encounterNum == 3){
                pokename = "Pidove";
                routeImg.src = `assets/Scorbunny/pidove.png`;
                story.innerHTML = `Following the high of beating your first gym, you decide to explore the nearby routes. While exploring in the tall grass, you begin to hear a rustling. Suddenly a Pidove comes flying out, staring directly at you while impatiently flapping its wings. It’s a feisty thing that would certainly fit great into your team.`;
                btnthirEncounter.style.display = "none"
                encounterInt = 3;
            }
            break

        case "Popplio":
            if(encounterNum == 2){
                pokename = "Wynaut";
                routeImg.src = `assets/Popplio/wynaut.png`;
                story.innerHTML = `Continuing along the next route, you and you companions stop for a lunch break. As you stir the heavenly smelling soup you are approached by a curious looking Wynaut. The cheeky creature hobbles towards the pot of soup and sits down, staring directly at you, as if waiting. You sigh but pour the creature a serving. It happily digs in`;
                btnsecEncounter.style.display = "none"
                encounterInt = 2;
            }else if(encounterNum == 3){
                pokename = "Blitzle";
                routeImg.src = `assets/Snivy/blitzle.png`;
                story.innerHTML = `Following the high of beating your first gym, you decide to explore the nearby routes. While exploring in the tall grass, you begin to hear a rustling. Suddenly a Blitzle comes stomping out, staring directly at you while impatiently pawing at the ground. It’s a feisty thing that would certainly fit great into your team.
                (Leave)
                The Blitzle quickly trots away after its little staring contest. You watch it stomp off, curious as to where its going. `;
                btnthirEncounter.style.display = "none"
                encounterInt = 3;
            }else if(encounterNum == 4){
                pokename = "Drilbur";
                routeImg.src = `assets/Popplio/drilbur.png`;
                story.innerHTML = `While training in the cave a Pokémon suddenly digs up from the ground in front of you. You startle, still on edge from the group from earlier. The drilbur waves at you, a cheeky grin on its face. You gve a hesitant smile back. `;
                btnpopEncounter.style.display = "none"
                encounterInt = 4;
            }
            break
    }
    if(pImg1.title == "Popplio" && encounterInt == 3){
        btnsecTeamEncounter.style.display = "block"
    }else{
        encounterDiv.style.display = "block";
        btnKeep.style.display = "block";
        btnLeave.style.display = "block";
    }
    h1.innerHTML = "You encountered a " +pokename
    console.log("encounter "+encounterNum);
    console.log("encounterint "+encounterInt);
}

function keep(){
    switch(pImg1.title){
        case "Snivy":
            if(pImg3.title == "" && encounterInt == 2){
                pokename = "Purrloin";
                pImg3.src = `assets/Snivy/purloinpixel.png`;
                pImg3.title = pokename;
                story.innerHTML = `You slowly pull out a poke ball and offer it to the Purrloin. It is hesitant but slowly boops the ball with its nose. It disappears in a flash of red, quickly reappearing as you let it out to continue its meal. `;

            }else if(pImg3.title == "" && encounterInt == 3){
                pokename = "Blitzle";
                pImg3.src = `assets/Snivy/blitzlepixel.png`;
                story.innerHTML = `You throw a poke ball and catch the blitzle!`;
                pImg3.title = pokename;

            }else if(pImg3 != "" && encounterInt == 3){
                pokename = "Blitzle";
                pImg4.src = `assets/Snivy/blitzlepixel.png`;
                pImg4.title = pokename;
                story.innerHTML = `You throw a poke ball and catch the blitzle!`;
            }
            break;

        case "Scorbunny":
            if(encounterInt == 2 && pImg3.title == ""){
                pokename = "Wynaut";
                pImg3.src = `assets/Scorbunny/wynautpixel.png`;
                pImg3.title = "Wynaut";
                story.innerHTML = `You slowly pull out a poke ball and offer it to the Wynaut. It is hesitant but slowly boops the ball with its arm. It disappears in a flash of red, quickly reappearing as you let it out to continue its meal`;
            }else if(pImg3.title == "" && encounterInt == 3){
                pokename = "Pidove";
                pImg3.src = `assets/Scorbunny/pidovepixel.png`;
                story.innerHTML = `You throw a poke ball and catch the Pidove!`;
                pImg3.title = pokename;

            }else if(pImg3 != "" && encounterInt == 3){
                pokename = "Pidove";
                pImg4.src = `assets/Scorbunny/pidovepixel.png`;
                pImg4.title = pokename;
                story.innerHTML = `You throw a poke ball and catch the Pidove!`;
            }
            break;

        case "Popplio":
            if(encounterInt == 2 && pImg3.title == ""){
                pokename = "Wynaut";
                pImg3.src = `assets/Popplio/wynautpixel.png`;
                pImg3.title = "Wynaut";
                story.innerHTML = `You slowly pull out a poke ball and offer it to the Wynaut. It is hesitant but slowly boops the ball with its arm. It disappears in a flash of red, quickly reappearing as you let it out to continue its meal`;
            }else if(pImg3.title == "" && encounterInt == 4){
                pokename = "Drilbur";
                pImg3.src = `assets/Popplio/drilburpixel.png`;
                story.innerHTML = `The Drilbur seems to want to accompany you. You toss a ball and catch it first try!`;
                pImg3.title = pokename;

            }else if(pImg3 != "" && encounterInt == 4){
                pokename = "Drilbur";
                pImg4.src = `assets/Popplio/drilburpixel.png`;
                pImg4.title = pokename;
                story.innerHTML = `The Drilbur seems to want to accompany you. You toss a ball and catch it first try!`;
            }
            break;
    }

    btnKeep.style.display = "none";
    btnLeave.style.display = "none";
    h1.innerHTML = "You caught " +pokename;
    story.append(pokename + " was added to your party!");

    if(encounterInt == 2){
        btnfirstGym.style.display = "block";
    }else if(encounterInt == 3){
        btnsecTeamEncounter.style.display = "block";
    }else if(encounterInt ==4){
        btnsecGym.style.display = "block";
    }

    console.log("keep: "+encounterInt);
}

function leave(){
    switch(pImg1.title){
        case "Snivy":
            if(encounterInt == 2){
                pokename = "Purrloin";
                story.innerHTML = "You stroke the creatures head gently, enthralled by its purring. It happily continues to eat before wandering off after giving you an affectionate headbutt.";
            }else if(encounterInt == 3){
                pokename = "Blitzle";
                story.innerHTML = `The Blitzle quickly trots away after its little staring contest. You watch it stomp off, curious as to where its going.`;
            }
            break;

        case "Scorbunny":
            if(encounterInt == 2 ){
                pokename = "Wynaut";
                story.innerHTML = `You stroke the creatures head gently as it eats. It happily continues to eat before wandering off.`;
            }else if(encounterInt == 3){
                pokename = "Pidove";
                story.innerHTML = `The Pidove quickly flys away after its little staring contest. You watch it fly off, curious as to where it’s going. `;
            }
            break;

        case "Popplio":
            if(encounterInt == 2){
                pokename = "Wynaut";
                story.innerHTML = `You stroke the creatures head gently as it eats. It happily continues to eat before wandering off.`;
            }else if(encounterInt == 4){
                pokename = "Drilbur";
                story.innerHTML = `The Drilbur stares at you, waiting. You stare back. This goes on for five minutes before the Drilbur leaves, giving you the side-eye. You shrug and move on. `;
            }
            break;
    }

    btnKeep.style.display = "none";
    btnLeave.style.display = "none";
    h1.innerHTML = " You left "+ pokename;
    story.append(" You left "+ pokename);

    if(encounterInt == 2){
        btnfirstGym.style.display = "block";
    }else if(encounterInt == 3){
        btnsecTeamEncounter.style.display = "block";
    }else if(encounterInt == 4){
        btnsecGym.style.display = "block";
    }

    console.log("leave: "+encounterInt);
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
    btnLeave.style.backgroundColor = color;
    btnKeep.style.backgroundColor = color;
    btnFirstEncounter.style.backgroundColor = color;
    btnfirstTeamEncounter.style.backgroundColor = color;
    btnsecEncounter.style.backgroundColor = color;
    btnthirEncounter.style.backgroundColor = color;
    btnfirstGym.style.backgroundColor = color;
    btnsecGym.style.backgroundColor = color;
    btnsecTeamEncounter.style.backgroundColor = color;
    btnpopEncounter.style.backgroundColor = color;
    btnend.style.backgroundColor = color;
    btncompgym1.style.backgroundColor = color;
    btnFirstEncounter.style.display = "none";
    btnfirstTeamEncounter.style.display = "none";
    btnsecEncounter.style.display = "none";
    btnthirEncounter.style.display = "none";
    btnfirstGym.style.display = "none";
    btnsecGym.style.display = "none";
    btnpopEncounter.style.display = "none"
    btnend.style.display = "none";
    btncompgym1.style.display = "none";
};