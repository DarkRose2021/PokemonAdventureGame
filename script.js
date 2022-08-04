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
const img = document.getElementById("routeImg");
const storyDiv = document.getElementById("storyTxtDiv");
const story = document.getElementById("storytxt");
const btnContinue = document.getElementById("Continue");

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

        starterInfoDiv.style.display = "none";
        starters.style.display = "none";
        storyDiv.style.display = "block";
        btnContinue.style.backgroundColor = "#2B556F";

        //party
        party.style.display = "block";
        party.style.backgroundColor = "#2B556F";
        pImg1.src = `assets/Popliopixel.png`;
        pImg1.title = "Popplio";

        document.body.style.backgroundColor = "#457B9D";
        document.body.style.backgroundImage = "none";
        document.body.style.color = "#F1FAEE";
    });
});

//Scorbunny
scorbunny.addEventListener("click", () =>{
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "Scorbunny: The Rabbit Pokemon, a Fire Type";

    btnChoose.addEventListener("click", () =>{
        h1.innerHTML = "You choose Scorbunny";
        btnContinue.style.backgroundColor = "#8E2731";

        //party
        party.style.backgroundColor = "#8E2731";
        pImg1.src = `assets/scorbunnypixel.png`;
        pImg1.title = "Scorbunny";

        document.body.style.backgroundColor = "#C24B57";
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

        //changing colors to green
        btnContinue.style.backgroundColor = "#57A03F";
        document.body.style.backgroundColor = "#75C45B";
        party.style.backgroundColor = "#57A03F";

        //party imgs
        pImg1.src = `assets/snivypixel.png`;
        pImg1.title = "Snivy";
        showTxtAndChangeBackground();
    });
});

function keep(pokename){

}

function leave(pokename){

}

function box(pokename){

}

function encounter(pokename){
    
}

function showTxtAndChangeBackground(){
    starterInfoDiv.style.display = "none";
    starters.style.display = "none";
    storyDiv.style.display = "block";
    img.style.display = "none";
    document.body.style.backgroundImage = "none";
    document.body.style.color = "#F1FAEE";
    party.style.display = "block";
}