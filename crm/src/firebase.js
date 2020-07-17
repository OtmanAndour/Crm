import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD2JwONWgR018nd5tNxnsSX64k9Z5uOdNU",
  authDomain: "crm-linkedin-13914.firebaseapp.com",
  databaseURL: "https://crm-linkedin-13914.firebaseio.com",
  projectId: "crm-linkedin-13914",
  storageBucket: "crm-linkedin-13914.appspot.com",
  messagingSenderId: "127284517565",
};

firebase.initializeApp(config);

export default firebase;
