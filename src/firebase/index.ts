import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";

import firebaseConfig from "./firebase-config";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const appStorage = firebase.storage();
export const appDB = firebase.firestore();

export default {
  firebase
};
