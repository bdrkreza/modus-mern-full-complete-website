
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAOTBZYvHvloRpz56Bp9kEgopmdPMeuHU",
    authDomain: "modus-tailwind.firebaseapp.com",
    projectId: "modus-tailwind",
    storageBucket: "modus-tailwind.appspot.com",
    messagingSenderId: "660452279591",
    appId: "1:660452279591:web:95f89d6c81f2ef39a65502"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;