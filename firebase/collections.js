import firebase from "./firebase";

export const collBinTypes = firebase.database().ref("bintypes");
export const collBinInventories = firebase.database().ref("bininventories");
export const collCreateBinRequests = firebase.database().ref("binrequests");

export const removeFromList = path => {
  console.log("About to remove : ", path);
  firebase
    .database()
    .ref(path)
    .remove()
    .then(() => {
      console.log("Deleted");
    })
    .catch(e => {
      console.log("Error while Deleting ", e);
    });
};
