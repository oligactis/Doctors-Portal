import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// initilize firebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  const registerUser = async (email, password) => {
    setIsLoading(true);
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user
        // setUser(userCredential.user)
        setAuthError('');
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        setAuthError('');
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // Observe User 
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsuscribe;
  }, [])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(() => setIsLoading(false));
  }

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logOut,
  }
}

export default useFirebase;