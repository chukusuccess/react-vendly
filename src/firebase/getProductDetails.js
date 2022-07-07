import { db } from './firebase'
import { collection, doc, onSnapshot, setDoc, query, where, updateDoc, arrayUnion, arrayRemove, getDocs, getDoc, deleteField, deleteDoc  } from "firebase/firestore"; 


export const getProductDetails = async (productId) => {
    const product = doc(db, "products", productId);
    const docSnap = await getDoc(product);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
    // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}