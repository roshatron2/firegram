import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "firegram-dbc95.firebaseapp.com",
  databaseURL: "https://firegram-dbc95.firebaseio.com",
  projectId: "firegram-dbc95",
  storageBucket: "firegram-dbc95.appspot.com",
  messagingSenderId: "716621738248",
  appId: "1:716621738248:web:9319135a459f761fd1fcbd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
