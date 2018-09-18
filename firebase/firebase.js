import * as firebase from "firebase";

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
