import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDPQ9SNU_ljCWshYUw7cj9qcS_pEjtrXyo",
    authDomain: "nextjsblogs-b3545.firebaseapp.com",
    projectId: "nextjsblogs-b3545",
    storageBucket: "nextjsblogs-b3545.appspot.com",
    messagingSenderId: "888775191171",
    appId: "1:888775191171:web:7a538a347ce37928f249b6"
};
// Initialize Firebase
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
const  auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth , db, storage , serverTimestamp};