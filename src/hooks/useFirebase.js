import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/Firebase.init";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, getIdToken, updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

// initilize firebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const auth = getAuth();
  // v- 72.1 -- 
  const googleProvider = new GoogleAuthProvider();
  // v- 72.1 -- 


  // access appoint page after login ----
  const location = useLocation();
  const history = useNavigate();

  const redirect = () => {
    const { state } = location;
    (state?.from) ? history(state?.from?.pathname) : history('/')
  }
  // -----------

  const registerUser = async (email, password, name, history) => { // v 72.2 history, name
    setIsLoading(true);
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user
        // setUser(userCredential.user)
        setAuthError('');
        // v 72.2
        const newUser = { email, displayName: name }
        setUser(newUser);
        // save user to the database 
        saveUser(email, name, 'POST');
        // send name to firebase after creation 
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/')
        // v 72.2
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
        redirect();
        setAuthError('');
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // video 72.1 ----
  const singInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT')
        redirect();
        setAuthError('');
      }).catch((error) => {
        setAuthError(error.message);
      }).finally(() => setIsLoading(false));
  }

  // video 72.1 -----

  // Observe User 
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
          .then(idToken => {
            setToken(idToken);
          })
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsuscribe;
  }, [auth])

  useEffect(() => {
    fetch(`https://doctors-portal-server-oligactis.vercel.app/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])


  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }


  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://doctors-portal-server-oligactis.vercel.app/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json());
  }



  return {
    user,
    admin,
    token,
    isLoading,
    authError,
    registerUser,
    loginUser,
    singInWithGoogle,
    logOut,
    redirect
  }
}

export default useFirebase;