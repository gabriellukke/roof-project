import * as firebase from 'firebase';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDMmGa7MZ0hsx8ZuxAE4nugNXrmSMr_aUA",
    authDomain: "reciclacefet.firebaseapp.com",
    databaseURL: "https://reciclacefet.firebaseio.com",
    projectId: "reciclacefet",
    storageBucket: "reciclacefet.appspot.com",
    messagingSenderId: "465264172702",
    appId: "1:465264172702:web:98202ca89f7253d398e58f",
    measurementId: "G-T9V5QVNE4Z"
  };

export default firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db }