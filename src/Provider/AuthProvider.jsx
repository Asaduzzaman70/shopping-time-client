import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const CreateContext = createContext(null);

// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);

    const authInfo = {
        user
    }

    return (
        <CreateContext.Provider value={authInfo}>
            {children}
        </CreateContext.Provider>
    );
}

export default AuthProvider;