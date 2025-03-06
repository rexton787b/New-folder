const instrumentsUlRef = document.querySelector("#instruments");

const instruments = ["Piano","Guitar","Violin","Guitar","Saxophone","Flute"]
const images=[

];

for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    console.log(instrument);

    const image= images[i];

    const imageHtml = "<img src='"+ image +"' alt='' />";

    instrumentsUlRef.innerHTML += "<li>" + instrument + imageHtml + "</li>";    
}