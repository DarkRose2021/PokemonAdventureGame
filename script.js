//div ids
const welcome = document.getElementById("welcome");
const starters = document.getElementById("starters");

//form ids
const form = document.getElementById("form");
const playerName = document.getElementById("PlayerName");
const submit = document.getElementById("submit");
var Name;

//starterbtn ids
const poplio = document.getElementById("poplio");
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

poplio.addEventListener("click",() => {
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "Poplio info text";

    btnChoose.addEventListener("click", () =>{
        h1.innerHTML = "You chose Poplio";
        starterInfoDiv.style.display = "none";
        starters.style.display = "none";
        storyDiv.style.display = "block";
        document.body.style.backgroundColor = "#457B9D";
        document.body.style.backgroundImage = "none";
        document.body.style.color = "#F1FAEE";
    });
});

scorbunny.addEventListener("click", () =>{
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "Lorem ipsum dolor sit amet. Ut error galisum nam nostrum atque et eius perspiciatis? Id animi tempore qui suscipit voluptates est minus similique ab reiciendis voluptas ut voluptates culpa non repellat sapiente sit autem ratione. Non voluptatibus quod a dolorem modi id maxime quia id veritatis rerum! Est consequatur iste sed quia quod id aspernatur rerum in itaque sequi! A maxime nostrum eum aliquam provident a omnis internos et iure quibusdam quo blanditiis asperiores. Ex voluptas dolores sed neque minus est dolorem placeat rem ullam officiis vel earum autem qui dignissimos quia.Sit repellat adipisci quaerat dolorem quo nihil ratione est omnis modi sit quibusdam eaque eos quia nisi hic perferendis ducimus. Ea sequi facilis qui iure nisi sed error quam.";

    btnChoose.addEventListener("click", () =>{
        h1.innerHTML = "You chose Scorbunny";
        starterInfoDiv.style.display = "none";
        starters.style.display = "none";
        storyDiv.style.display = "block";
        document.body.style.backgroundColor = "#C24B57";
        document.body.style.backgroundImage = "none";
        document.body.style.color = "#F1FAEE";
    });
});

snivy.addEventListener("click", () =>{
    starterInfoDiv.style.display = "block";
    //change
    starterInfo.innerHTML = "snivy info text";

    btnChoose.addEventListener("click", () =>{
        h1.innerHTML = "You chose Snivy";
        starterInfoDiv.style.display = "none";
        starters.style.display = "none";
        storyDiv.style.display = "block";
        document.body.style.backgroundColor = "#75C45B";
        document.body.style.backgroundImage = "none";
        document.body.style.color = "#F1FAEE";
    });
});