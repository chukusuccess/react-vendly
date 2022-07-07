
export const ProductDetailsReducer =  (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_DETAILS':
            console.log(action.id, 'this is state')
          

            return {...state, product: action.id}
            
           
            
        default:
            return state;
    }
} 