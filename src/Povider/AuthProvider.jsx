import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = async () => {
        setLoading(true);
        await signOut(auth);
        setUser(null);
        setLoading(false);
    }

    const updateUserProfile = (displayName, photoURL) =>{
        return updateProfile(auth.currentUser, displayName, photoURL);
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser.email){
                const user = {email: currentUser.email}
            }

            axios.post('http://localhost:5000/', user)
            .then(res => {
                console.log('logout', res.data);
                setLoading(false);
            })
        })

        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        user,
        setUser,
        loading,
        googleLogin,
        updateUserProfile,
        signIn,
        userLogout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;