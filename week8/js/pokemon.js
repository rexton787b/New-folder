console.log("pokemon");

function showAlert() {
    alert("Annoying Message");
}

const confirmBtnRef =
document.querySelector
("#confirm-btn");

function showConfirm(){
    const userConfirmed =
    confirm("you are a robot rite");

    console.log(userConfirmed);
}

confirmBtnRef.onclick =
showConfirm;

console.log(confirmBtnRef)

function showPrompt(){
    const userInput = prompt(
        "what do you like"
    );

    console.log(userInput)
}
const journeyRef= document.querySelector("#journey")
function startJourney(){
journeyRef.innerHTML = 
"<p>today you get ur first pokeman! Bulbasaur, Charmander, Squirtle;</p>";

const starterPokemon = [
    {name: "Bulbasaur",
     img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",},
     {name: "Charmander", 
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
     },
     {name: "Squirtle",
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
     }
];

for (let i = 0; i < starterPokemon.length; i++) {
    const pokemon = starterPokemon[i];
    const newSection = document.createElement("section");
    newSection.innerHTML +=
    "<img height='100' src='"+
    pokemon.img +
    "' alt='" +
    pokemon.name +
    "' />";
    newSection.innerHTML += "<h4>" + pokemon.name + "</h4>"

    newSection.dataset.pokemonName = pokemon.name;
    newSection.dataset.pokemonImage = pokemon.img;
    newSection.onclick =choosePokemon;

    journeyRef.appendChild(newSection);
    console.log(pokemon);

    console.log(pokemon)
    
}
}

function choosePokemon(e) {
console.log(e.currentTarget);
const pokemonName = e.currentTarget.dataset.pokemonName;
const pokemonImage = e.currentTarget.dataset.pokemonImage;

const confirmChoice = confirm("You chose" + pokemonName);

if (confirmChoice) {
    journeyRef.innerHTML += 
    "You chose " + pokemonName + " as your starter.";

    myPokemon = {name: pokemonName, img: pokemonImage}
}
}