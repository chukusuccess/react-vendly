import { createContext, useReducer, useState } from "react";
import { register } from "../firebase/auth";
import { ProductDetailsReducer } from "../reducers/ProductDetailsReducer";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [ auth, setAuth ] = useState('false')
         
    const register = (fullname, email, password, businessName) => {
        try {
            // capitalizing the fullname of the user
                    
            // creating the account for user
            createUserWithEmailAndPassword(getAuth(), email, password).then((userCredential) => {
                // const user = userCredential
                const { user } = userCredential
                // userProfile['userId'] = user.uid
                // userProfile['fullName'] = state.fullName
                // userProfile['email'] = email,
                // userProfile['businessName'] = email,
                setAuth('true')

                
                
                

                console.log('sucessfully registered', user, auth)
                return 'success'
                
                // create user profile
                // this.createUserProfile()
                
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
                console.log(error.message)
                // this.raiseError('Full name', 'Please provide your full name')

                
            }
        }                
    }


    return ( 
        <AuthContext.Provider value={{auth, register}}>
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;