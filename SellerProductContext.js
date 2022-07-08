import { createContext, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const SellerProductContext = createContext()

const SellerProductContextProvider = (props) => {
    let [user, setUser] = useState()

    // get the user profile
    const getProfile = async (userId) => {
        console.log('getprofile is running')
        const userProfile = query(collection(db, 'profile'), where('userId', '==', userId))
        const unsubscribe = onSnapshot(userProfile, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                // profile added
                if (change.type === 'added') {
                    setUser(change.doc.data())
                } 
                
                // profile modified
                if (change.type === 'modified') {
                    console.log('modified profile', change)
                    setUser(change.doc.data())
                }
                
            });
        })

    }

    

    return ( 
        <SellerProductContext.Provider 
        value={{ user, getProfile }}>
            {props.children}
        </SellerProductContext.Provider>
    );
}
 
export default SellerProductContextProvider;