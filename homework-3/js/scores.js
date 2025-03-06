const scoresUlRef = document.querySelector("#scores");

const scores = ["95","72","88","45","60","79","82","91","50","38"]
const images=[

];

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    console.log(score);

    const image= images[i];

    const imageHtml = "<img src='"+ image +"' alt='' />";

    scoresUlRef.innerHTML += "<li>" + score + imageHtml + "</li>";    
}