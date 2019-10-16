import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

import firebaseConfig from "./firebase-config";

firebase.initializeApp(firebaseConfig);

export const appStorage = firebase.storage();
export const appDB = firebase.firestore();

export default {
  firebase
};
