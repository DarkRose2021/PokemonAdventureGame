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
const storyDiv = document.getElementById("storyTxtDiv");
const story = document.getElementById("storytxt");
const btnContinue = document.getElementById("Continue");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(playerName.value != ''){

        localStorage.setItem("Name", playerName.value)
        welcome.style.display = "none";
        starters.style.display = "block";
    }
});

popplio.addEventListener("click",() => {
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "Popplio: The Sea Lion Pokemon, a Water Type";

    btnChoose.addEventListener("click", () =>{
        h1.innerHTML = "You choose Popplio";
        starterInfoDiv.style.display = "none";
        starters.style.display = "none";
        storyDiv.style.display = "block";
        document.body.style.backgroundColor = "#457B9D";
        document.body.style.color = "#F1FAEE";
    });
});

scorbunny.addEventListener("click", () =>{
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "Scorbunny: The Rabbit Pokemon, a Fire Type";

    btnChoose.addEventListener("click", () =>{
        h1.innerHTML = "You choose Scorbunny";
        starterInfoDiv.style.display = "none";
        starters.style.display = "none";
        storyDiv.style.display = "block";
        document.body.style.backgroundColor = "#C24B57";
        document.body.style.color = "#F1FAEE";
    });
});

snivy.addEventListener("click", () =>{
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "Snivy: The Grass Snake Pokemon, a Grass Type";

    btnChoose.addEventListener("click", () =>{
        h1.innerHTML = "You choose Snivy";
        starterInfoDiv.style.display = "none";
        starters.style.display = "none";
        storyDiv.style.display = "block";
        document.body.style.backgroundColor = "#75C45B";
        document.body.style.color = "#F1FAEE";
    });
});