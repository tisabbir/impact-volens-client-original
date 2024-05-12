import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(auth);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const createUser =(email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const allInfo = {
        createUser,
        
    }
    return (
       <AuthContext.Provider value={allInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;