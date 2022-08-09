//div ids
const welcome = document.getElementById("welcome");
const starters = document.getElementById("starters");

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
const party = document.getElementById("partyDiv");
const pImg1 = document.getElementById("party1");
const pImg2 = document.getElementById("party2");
const pImg3 = document.getElementById("party3");
const pImg4 = document.getElementById("party4");
const pImg5 = document.getElementById("party5");
const pImg6 = document.getElementById("party6");

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
        pImg1.src = `assets/Popliopixel.png`;
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
        pImg1.src = `assets/scorbunnypixel.png`;
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
        story.innerHTML = "Snivy was added to your party!";
        pImg1.src = `assets/snivypixel.png`;
        pImg1.title = "Snivy";
        document.body.style.backgroundColor = "#75C45B";
        showTxtAndChangeBackground("#57A03F");
        btnFirstEncounter.style.display = "block";
    });
});

//add Switch
function firstEncounter(){
    //first encounter
    h1.innerHTML = "You encountered a Lillipup!";
    routeImg.src = `assets/lillipup.png`;
    story.innerHTML = "Story text here";
    pImg2.src = `assets/lillipuppixel.png`;
    pImg2.title = "Lillipup";
    btnFirstEncounter.style.display = "none";
    btnfirstTeamEncounter.style.display = "block";
}

function firstTeamEncounter(){
    routeImg.src = `assets/accumula_town.png`;
    h1.innerHTML = "You there!";
    story.innerHTML = "Story text here";
    btnfirstTeamEncounter.style.display = "none";
    btnsecEncounter.style.display = "block";
}

function secEncounter(){
    encounter("Purrloin");
    btnsecEncounter.style.display = "none";
    btnfirstGym.style.display = "block";
}

function firstGym(){
    h1.innerHTML = "Gym"
    if(pImg3.title = ""){
        story.innerHTML ="only 2 pokemon";
    }else if(pImg3.title != ""){
        story.innerHTML = "only 3 pokemon"
    }
}



function keep(){
    switch(pImg1.title){
        case "Snivy":
            if(pImg2.title != "" && pImg3.title == ""){
                pokename = "Purrloin";
                btnKeep.style.display = "none";
                btnLeave.style.display = "none";
                pImg3.src = `assets/snivypixel.png`
                
            }
            break;
        case "Scorbunny":
            break;
        case "Popplio":
            break;
    }

    h1.innerHTML = "Insert text here";
    story.innerHTML = pokename + " was added to your party!";
    pImg3.title = pokename;
}


function leave(){
    switch(pImg1.title){
        case "Snivy":
            if(pImg2.title != "" || pImg3 == ""){
                pokename = "Purrloin";
                btnKeep.style.display = "none";
                btnLeave.style.display = "none";
            }
            break;
        case "Scorbunny":
            break;
        case "Popplio":
            break;
    }

    h1.innerHTML = "Insert text here";
    story.innerHTML = "You left "+ pokename;
}

function box(pokename){

}

function encounter(pokename){
    h1.innerText = "You encountered " + pokename;
    encounterDiv.style.display = "block";
    btnKeep.style.display = "block";
    btnLeave.style.display = "block";
}

function showTxtAndChangeBackground(color){
    starterInfoDiv.style.display = "none";
    starters.style.display = "none";
    storyDiv.style.display = "block";
    routeImg.style.display = "none";
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