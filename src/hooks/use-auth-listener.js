import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);
  const auth = getAuth(firebase);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("authUser", JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem("authUser");
        setUser(user);
      }
    });
    return () => {
      console.log("Clean");
      unsubscribe();
    };
  }, [firebase]);

  return { user };
}
