import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAScPaIOwYPMzN_Y6_5XCJ-7CPfmYo3IY8",
  authDomain: "netflix-clone-c2092.firebaseapp.com",
  databaseURL:
    "https://netflix-clone-c2092-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-c2092",
  storageBucket: "netflix-clone-c2092.appspot.com",
  messagingSenderId: "502786000007",
  appId: "1:502786000007:web:b8fdfbb0f1b4e024e46422",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
