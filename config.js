import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCaIzosf366Of12rUFEO9YjwZ3FgJDcWuE",
  authDomain: "e-libaray-app.firebaseapp.com",
  projectId: "e-libaray-app",
  storageBucket: "e-libaray-app.appspot.com",
  messagingSenderId: "391598621653",
  appId: "1:391598621653:web:e8ce8d414fb78e428bf35c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
