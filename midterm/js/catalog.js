const catalogRef = document.querySelector("#catalog");

const catalogItems = [
    {
        image:"https://picsum.photos/200/200",       
        name: "My First Fire",
    },
    {
        image: "https://picsum.photos/200/200",
        name: "Handy Hand"
    },
    {        image: "https://picsum.photos/200/200",
        name: "NapSack"
    },
    {
                image: "https://picsum.photos/200/200",
        name: "Hot Tub Wildlife Feeder"
    },
    {
                image: "https://picsum.photos/200/200",
        name: "Toilet Meadow"
    },
           { image: "https://picsum.photos/200/200",
        name: "Pudding Pouch"}
];

catalogRef.innerHTML="";

for (let index = 0; index< catalogItems.length; index++){
    const item = catalogItems[index];

    const newArticle = document.createElement("article");
    const newImg = document.createElement("img");
    newImg.src = item.image;
    newArticle.appendChild(newImg);

    const newP = "<p>" + item.name + "</p>";
    newArticle.innerHtml += newP;

    catalogRef.appendChild(newArticle);
}