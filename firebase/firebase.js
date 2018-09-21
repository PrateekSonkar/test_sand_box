import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAi8lmH03Mn7-sDI8-utUtQPuK18Mmxwy8",
  authDomain: "binmanagement-a2cb0.firebaseapp.com",
  databaseURL: "https://binmanagement-a2cb0.firebaseio.com",
  projectId: "binmanagement-a2cb0",
  storageBucket: "binmanagement-a2cb0.appspot.com",
  messagingSenderId: "226315718685"
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
