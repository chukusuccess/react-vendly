import { createContext, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase/firebase'


export const UploadProductContext = createContext()

const UploadProductContextProvider = (props) => {
    let [ productImageUrl, setproductImageUrl ] = useState()

    // uploading product image
    const uploadProductImg = (file, userId) => {
        
        
        const storageRef = ref(storage, `${userId}/products/${file.name}`)

        const uploadTask = uploadBytesResumable(storageRef, file)

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
        (snapshot) => {
            
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            
            // state.productUploadStatus = Math.trunc(progress)
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running', progress);

                    break;
            }
        }, 
        (error) => {
            console.log(error, 'this error happened while trying to upload to fb')
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                // User doesn't have permission to access the object
                console.log("User doesn't have permission to access the object")
                break;
                case 'storage/canceled':
                // User canceled the upload
                console.log("storage/canceled")
                break;

                // ...

                case 'storage/unknown':
                    console.log('storage/unknown');
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
            }, 
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setproductImageUrl(downloadURL)
                });
            }
            );

    }

    // uploading user products
    const uploadingProducts = async (products, userId) => {
        // getting the user profile
        const user_profile = doc(db, "profile", userId);

        // post product to user profile
        let index = products.productId
        const product = { }
        product[`${index}`] = products
        

        // adding product to the user profile
        await setDoc(user_profile, { products: product }, { merge: true });

        // observing when products have been uploaded
        // adding the products to the product marketplace collection
        console.log('products has been uploaded')

        await setDoc(doc(db, "products", products.productId), products);
     

      

    }

    return ( 
        <UploadProductContext.Provider 
        value={{productImageUrl, uploadProductImg, uploadingProducts}}>
            {props.children}
        </UploadProductContext.Provider>
    );
}
 
export default UploadProductContextProvider;