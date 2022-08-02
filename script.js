//div ids
const welcome = document.getElementById("welcome");
const starters = document.getElementById("starters");

//form ids
const form = document.getElementById("form");
const playerName = document.getElementById("PlayerName");
const submit = document.getElementById("submit");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(playerName.value != ''){
        localStorage.setItem("Name", playerName.value)
    welcome.style.display = "none";
    starters.style.display = "block";
    console.log(localStorage.getItem("Name"));
    //change map to the right map, higher quality img recommended
    document.body.style.backgroundImage = `url(assets/map.png)`;
    }
});