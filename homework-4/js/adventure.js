console.log("quest");

const questRef= document.querySelector("#quest")
function startQuest()

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
{
questRef.innerHTML = 
"<p>A hero named Avanti is going on an epic quest! Choose a weapon for him;</p>";

const weaponSelect = [
    {name: "Sword",
    },
     {name: "Gun", 
     },
     {name: "Shield",
     },
     {name: "Club",
     }
];

for (let i = 0; i < weaponSelect.length; i++) {
    const quest = weaponSelect[i];
    const newSection = document.createElement("section");
    newSection.innerHTML +=
    weapon.name +
    "' />";
    newSection.innerHTML += "<h4>" + weapon.name + "</h4>"

    newSection.dataset.weaponName = weapon.name;
    newSection.onclick =chooseWeapon;
    questRef.appendChild(newSection);
    console.log(quest);

    console.log(quest)
    
}
}

function chooseWeapon(e) {
console.log(e.currentTarget);
const weaponName = e.currentTarget.dataset.weaponName;

const confirmChoice = confirm("You chose" + weaponName);

if (confirmChoice) {
    questRef.innerHTML += 
    "You chose " + weaponName + " as your weapon.";

    myWeapon = {name: weaponName}
}
}