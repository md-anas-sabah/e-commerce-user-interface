import { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase/firebase";

const userAuthContext = useContext();

export function UserAuthContextProvider({ children }) {
    const [user,setUser] = useState()

function signUp (email,password){
    return createUserWithEmailAndPassword(auth, email,password)
}
function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
},[])

  return <userAuthContext.Provider value={}> {children} </userAuthContext.Provider>;
}

export function useUserAuth(){
    return useContext(userAuthContext);
}