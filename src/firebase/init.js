import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAfWlDrOBoYT_NBxxFHjqzQ6ERwU_2oa1A",
    authDomain: "about-2f778.firebaseapp.com",
    databaseURL: "https://about-2f778.firebaseio.com",
    projectId: "about-2f778",
    storageBucket: "about-2f778.appspot.com",
    messagingSenderId: "909922807971",
    appId: "1:909922807971:web:d8b8ff3fc228132356cf16"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export firestore database

export default firebaseApp.firestore();