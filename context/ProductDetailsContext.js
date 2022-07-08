import { createContext, useReducer, useState } from "react";
import { ProductDetailsReducer } from "../reducers/ProductDetailsReducer";


export const ProductDetailsContext = createContext()

const ProductDetailsContextProvider = (props) => {
    const [ details, dispatch ] = useReducer(ProductDetailsReducer, {
        product: {}
    })

    console.log('alkd', details.product.productName)

    return ( 
        <ProductDetailsContext.Provider value={{details, dispatch}}>
            {props.children}
        </ProductDetailsContext.Provider>
    );
}
 
export default ProductDetailsContextProvider;