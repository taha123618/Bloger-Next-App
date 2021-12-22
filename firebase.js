import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDWpzPRgnPeg8Hf5nqzH699vI_6o-kXiTQ",
    authDomain: "bloger-f60de.firebaseapp.com",
    projectId: "bloger-f60de",
    storageBucket: "bloger-f60de.appspot.com",
    messagingSenderId: "886346878576",
    appId: "1:886346878576:web:064aeb2b24df776bdbeeb5",
    measurementId: "G-F6VXQXVHT6"
  };

if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()
  // for all world time 
  const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

  export {auth , db , storage ,serverTimestamp };
