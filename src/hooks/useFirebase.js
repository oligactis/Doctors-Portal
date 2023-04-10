import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


// initilize firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();


    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }


    

    
    const loginUser = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }


    // Observe User 
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
          });
          return () => unsuscribe;
    },[])


    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return{
        user,
        registerUser,
        loginUser,
        logOut,
    }
}

export default useFirebase;