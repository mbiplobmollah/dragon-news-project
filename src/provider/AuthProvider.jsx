import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        });
        return () =>{
            unsubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;