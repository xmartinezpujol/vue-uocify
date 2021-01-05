import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBJvdOaNreU_r54Wt_jbb16pZD2IbxG4po",
  authDomain: "uocify-46881.firebaseapp.com",
  projectId: "uocify-46881",
  storageBucket: "uocify-46881.appspot.com",
  messagingSenderId: "192057857945",
  appId: "1:192057857945:web:c9b8b5cf341393f1db6508"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
