import {app} from "./app.js";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const hadCollection = collection(db,"hopesdreams");

const hadRef = document.querySelector("#had");
const dreamFormRef = document.querySelector("#new-dream");
const dreamTextRef = document.querySelector("#dream-text");

async function getHad() {
const hadDocs = await getDocs(hadCollection);
console.log(hadDocs.docs.length);

for(let i=0; i < hadDocs.docs.length; i++){
    const currentHad = hadDocs.docs[i];
    console.log(currentHad.id, currentHad.data());

    const hadData = currentHad.data();
    hadRef.innerHTML += "<li>" + hadData.text + "</li>";
}
}

async function addNewDreams(e) {
    e.preventDefault();

    const dreamTextValue = dreamTextRef.value;

    const newDream = await addDoc(dreamsCollection, {text: dreamTextValue});

    console.log(newDream);

    getDreams();

    dreamFormRef.reset();
}
dreamFormRef.onsubmit = addNewDreams

getHad()