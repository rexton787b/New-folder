const dogsUlRef = document.querySelector("#dogs");

const dogs = ["hyena","wolf","fox","coyote","jackal"]
const images=[
    "https://picsum.photos/200",
    "https://picsum.photos/210",
    "https://picsum.photos/220",
    "https://picsum.photos/230",
    "https://picsum.photos/240"
];

for (let i = 0; i < dogs.length; i++) {
    const dog = dogs[i];
    console.log(dog);

    const image= images[i];

    const imageHtml = "<img src='"+ image +"' alt='' />";

    dogsUlRef.innerHTML += "<li>" + dog + imageHtml + "</li>";    
}