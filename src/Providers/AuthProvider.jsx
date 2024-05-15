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
import axios from "axios";

export const AuthContext = createContext(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
    //   setUser(null)
    return signOut(auth);
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            //
            setUser(currentUser);
            setLoading(false);
            // console.log('From auth state changed', currentUser);

            //jodi current user thake tahole a mi ekta request pathabo amake token daw server please
            if(currentUser){
                const loggedUser = {email : currentUser.email}
                axios.post('https://impact-volens-server.vercel.app/jwt', loggedUser, {withCredentials:true}) // site 2ta alada
                .then(() => {
                    // console.log('server theke asha response access token', res.data);
                })
            }

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
    loading,
    logInWithGoogle,
    logInWithGithub,
    user,
    setUser,
    setLoading
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
