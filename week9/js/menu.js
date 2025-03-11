const menuRef = document.querySelector("#menu");

const menuItems = [
    {
        image:
        "http://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1509_MediumChocolateShake_Glass_A1_1564x1564-1:nutrition-calculator-tile",
        name: "shake",

    },
    {
        image:http:"https://s7d1.scene7.com/is/image/mcdonalds/DC_202106_0336_LargeVanillaCone_1564x1564-1:nutrition-calculator-tile",
        name: "cone"

    }
];

menuRef.innerHTML="";

for (let index = 0; index< menuItems.length; index++){
    const item = menuItems[index];

    const newArticle = document.createElement("article");
    const newImg = document.createElement("img");
    newImg.src = item.image;
    newArticle.appendChild(newImg);

    const newP = "<p>" + item.name + "</p>";
    newArticle.innerHtml += newP;

    menuRef.appendChild(newArticle);
}
