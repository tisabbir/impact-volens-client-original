import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // Providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth,googleProvider)
}
const logInWithGithub = () => {
    setLoading(true);

    return signInWithPopup(auth,githubProvider);
}


  const logOut = () => {

    setLoading(true);
    setUser(null)
    return signOut(auth);
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            //
            setLoading(false);
            setUser(currentUser);
            console.log('From auth state changed', currentUser);

        } 
        return () => {
            unsubscribe();
        }
    })
  },[])

  const allInfo = {
    createUser,
    login, 
    logOut,
    logInWithGoogle,
    logInWithGithub,
    user,
    setUser
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
