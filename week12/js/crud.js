import {app} from "./app.js";

import {
    getFirestore,
    getDocs,
    collection,
    updateDoc,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


const db = getFirestore(app);

const dreamsCollection = collection(db, "hopesdreams");

const dreamsRef = document.querySelector("#dreams")

async function getDreams(params) {
    
}