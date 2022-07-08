import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    let [ auths, setAuth ] = useState(false)
    let [ success, setSuccess ] = useState(false)
    let [ userId, setUserId ] = useState()
    let userProfile = {}

    const register = (email, password, businessName, fullName) => {
        setAuth(true)
        try {    
            // creating the account for user
            createUserWithEmailAndPassword(auth, email, password, businessName, fullName).then((userCredential) => {
                // const user = userCredential
                const { user } = userCredential
                if(auth.currentUser) {
                    setAuth(false)
                    setSuccess(true)
                    setUserId(user.uid)
                    updateProfile(auth.currentUser, {
                        displayName: businessName
                    })

                    userProfile['fullName'] = fullName
                    userProfile['email'] = email
                    userProfile['businessName'] = businessName
                    userProfile['userId'] = user.uid
                    userProfile['phoneNumber'] = null
                    userProfile['products'] = {}

                    console.log(user)

                }
                
                // create user profile
                createProfile(user.uid)
                
            }).catch((err) => {
                if(err.code == 'auth/invalid-email') {
                    // raising the error modal
                    // this.raiseError('Email', 'Email is invalid')
                    console.log('Email is invalid')

                } else if (err.code == 'auth/network-request-failed') {
                    // raising the error modal
                    // this.raiseError('Internet', 'Please check your internet connection')
                    console.log('Please check your internet connection');

                } else if (err.code == 'auth/email-already-in-use') {
                    // raising the error modal
                    // this.raiseError('Email', 'Email already exists')
                    console.log('Email already exists');

                } else {
                    console.log(err.code, '=>', err.message)

                }
            })
            
        } catch (error) {
            if (error.name === 'TypeError') {
                console.log(error.message, 'this jsldk')
                // this.raiseError('Full name', 'Please provide your full name')

                
            }
        }                
    }

    // login
    const login = (email, password) => {
        setAuth(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
            setAuth(false)
            setSuccess(true)
            // state.user['userId'] = user.uid

            // getting the user profile
            // this.getProfile()

        }).catch((err) => {
            console.log(err.code)
            if(err.code == 'auth/invalid-email') {
                // raising the error modal
                console.log(('Email', 'Email is invalid'));

            } else if (err.code == 'auth/wrong-password') {
                // raising the error modal
                console.log(('Password', 'Password is Incorrect'));

            } else if (err.code == 'auth/user-not-found') {
                // raising the error modal

                console.log(('Invalid User', 'User not found')
);
            } else if (err.code == 'auth/network-request-failed') {
                // raising the error modal
                console.log(('Internet', 'Please check your internet connection'));
            } 
        })
    }

    // creaing profile
    const createProfile = async (id) => {
        console.log('creating profile', userProfile);
        await setDoc(doc(db, "profile", id), userProfile)
        // await this.getProfile()
    }

    

    return ( 
        <AuthContext.Provider 
        value={{
            auths, 
            register, 
            success, 
            login
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;