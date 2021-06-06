// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAfDOay2doxavdsS41WF99k-Hw8BXElirM",
    authDomain: "challengem-fe7d4.firebaseapp.com",
    projectId: "challengem-fe7d4",
    storageBucket: "challengem-fe7d4.appspot.com",
    messagingSenderId: "673815154199",
    appId: "1:673815154199:web:4e13d8583cdc8116319652",
    measurementId: "G-LVMWD10H9N"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
