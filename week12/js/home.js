import {app} from "./app.js";

import {
    getFirestore,
    collection,
    getDocs,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const hadCollection = collection(db,"hopesdreams");

const hadRef = document.querySelector("#had");

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

getHad()