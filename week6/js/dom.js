const titleRef = document.getElementById("title")

console.log(titleRef);

const itemsRef = document.getElementsByClassName("items");

console.log(itemsRef);

const altTitleRef = document.querySelector("#title");

console.log(itemsAltRef);

console.log(titleRef.innerHTML)

console.log(ulRef.innerHTML)

ulRef.innerHTML=""

const fruit = [
    "apple",
    "pear" ,
]

for (let i = 0; i < fruit.length; i++) {
    const fruit = fruit[i];
    ulRef.innerHTML += "<li class='item'>"+ fruit + "</li>"
    
}

titleRef.style.backgroundColor = "red"