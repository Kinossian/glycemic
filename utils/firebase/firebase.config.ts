import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBuWucZDVqzzQ-LkeYNHEz0um6Hwyv76i4",
    authDomain: "glycemic-1d992.firebaseapp.com",
    projectId: "glycemic-1d992",
    storageBucket: "glycemic-1d992.appspot.com",
    messagingSenderId: "1042742718126",
    appId: "1:1042742718126:web:a31a06102dfe182bf8c73f",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
