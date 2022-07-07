import { createContext, useReducer, useState } from "react";
import { ProductDetailsReducer } from "../reducers/ProductDetailsReducer";


export const ProductDetailsContext = createContext()

const ProductDetailsContextProvider = (props) => {
    const [ details, dispatch ] = useReducer(ProductDetailsReducer, {
        product: {}
    })

    console.log('alkd', details.product.productName)
   

    // const addBook = (title, author) => { 
    //     setBooks([...books, { title, author, id: Math.random()}])
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    // }

    return ( 
        <ProductDetailsContext.Provider value={{details, dispatch}}>
            {props.children}
        </ProductDetailsContext.Provider>
    );
}
 
export default ProductDetailsContextProvider;