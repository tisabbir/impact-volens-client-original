import { Children, createContext } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(auth);

const AuthProvider = ({children}) => {

    const allInfo = {
        name: 'karim',
    }
    return (
       <AuthContext.Provider value={allInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;