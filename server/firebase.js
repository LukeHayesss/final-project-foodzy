const {initializeApp} = require("firebase/app");
const {getFirestore} = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAtADVmBodoCj5j8N_acjo1rfuhEOCb8o8",
    authDomain: "signin-698f9.firebaseapp.com",
    projectId: "signin-698f9",
    storageBucket: "signin-698f9.appspot.com",
    messagingSenderId: "263053567598",
    appId: "1:263053567598:web:b81cd53f9da994a447687f",
    measurementId: "G-05QPZNM4MV"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db }