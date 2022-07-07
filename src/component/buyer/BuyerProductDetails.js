import { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import GetProductDetailsContext, { ProductDetailsContext } from '../../context/ProductDetailsContext';
import { getProductDetails } from '../../firebase/getProductDetails';

const BuyerProductDetails = () => {
    const { id } = useParams()
    const [username, setUserName] = useState('klsd')
    const [productName, setProductName] = useState('klsd')
    const [productCategory, setProductCategory] = useState('klsd')
    const [productImage, setProductImage] = useState('klsd')
    const [productDescription, setProductDescription] = useState('klsd')
    // const [productDescription, setProductDescription] = useState()


    // const { details, dispatch } = useContext(GetProductDetailsContext)
    const { details, dispatch } = useContext(ProductDetailsContext)



    const navigate = useNavigate()
    const [ productQty, setProductQty ] = useState(1)
    const [ price, setPrice ] = useState(0)
    let initialPrice


    const incrementProductQty = () => {
        setProductQty(productQty + 1)
        // setPrice(initialPrice * productQty + price)
    }
    
    const decrementProductQty = () => {
        if (productQty >= 2) {
            setProductQty(productQty - 1)
            // setPrice(price - initialPrice)
        }
    }

    const nextRoute = () => {
        navigate(`/order_summary_delivery?qty=${productQty}&price=${price}`)
    }

    useEffect(() => {
        setPrice(details.product.productPrice)
        // initialPrice = details.product.productPrice
        console.log(initialPrice, 'the price')
    }, [details])

    useEffect(() => {

        const data = getProductDetails('0xoa8w1YnrWX6Fh0cpWc0ixqis5301652699606578')

        data.then((prod) => {
            const product = {
                productName: prod.productName,
                username: prod.username,
                productPrice: prod.productPrice,
                productDescription: prod.productDescription,
                productCategory: prod.productCategory,
                productImage: prod.productImage[0].url
            }

            console.log(product, 'the product')
            
            // setUserName(product.username)
            // setProductName(product.productName)
            // setPrice(product.productPrice)
            // setProductDescription(product.productDescription)
            // setProductCategory(product.productCategory)
            // setProductImage(product.productImage[0].url)
            dispatch({
                type: 'GET_PRODUCT_DETAILS',
                id: product
            })
        })
        
        
    }, [])



    return ( 
        <>
        {/* header */}
        <div className='w-full h-auto sm:h-[100vh] sm:flex sm:items-center'>

            <div className='text-[#2B2B2B] shadow-lg font-Poppins fixed top-0 w-full flex justify-between h-[4rem] items-center px-6 bg-white'>
                <h1 className='font-[600]'>Vendly</h1>
                <h1>{details.product.username} Product</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 px-6 mt-24 sm:mt-[4rem] gap-y-6 sm:gap-y-0 w-full'>
                {/* left panel */}
                <div className=''>
                    {/* product image */}
                    {/* max-w-[25rem] */}
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img className="object-cover w-full h-[20rem] sm:h-[30rem]" src={details.product.productImage} alt="Flower and sky"/>
                    </div>
                </div>

                {/* right panel */}
                <div className='sm:px-6 px-0'>
                    {/* product name */}
                    <h1 className='text-[1.5rem] font-Raleway font-[600] text-[#2B2B2B]'>{details.product.productName}</h1>
                    {/* product price */}
                    <h2 className='text-[1.5rem] font-Raleway font-[600] text-[#0055D4]'>N{price}</h2>
                    {/* category */}
                    <div className='text-[12px] font-[400] font-Poppins text-[#4F4F4F]'>Category: {details.product.productCategory}</div>

                    {/* increment button */}
                    <div className='mt-6'>
                        <div className="inline-flex w-full sm:w-0 shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                            <button onClick={decrementProductQty} type="button" className="sm:inline-block rounded-l px-6 py-4 bg-[#F0F6FF] text-[#7A7A7A] font-medium text-xs justify-center items-center leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out flex flex-grow focus:text-white hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                            </button>
                            <button type="button" className="sm:inline-block flex items-center justify-center flex-grow px-6 py-4 bg-[#F0F6FF] text-[#7A7A7A] font-medium text-[16px] leading-tight uppercase  focus:outline-none focus:ring-0  transition duration-150 ease-in-out">{productQty}</button>
                            
                            <button onClick={incrementProductQty} type="button" className=" rounded-r sm:inline-block items-center flex flex-grow justify-center px-6 py-4 bg-[#F0F6FF] text-[#7A7A7A] font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out hover:text-white focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* description */}
                    <div className='font-Poppins mt-6'>
                        <h1 className='text-[14px] text-[#4F4F4F] font-[400] '>Description</h1>
                        <p className='text-[#2B2B2B] text-[17px] font-[500] capitalize mt-3 leading-[2rem]'>{details.product.productDescription}</p>
                    </div>


                    {/* location */}
                    <div className='font-Poppins mt-6'>
                        <h1 className='text-[14px] text-[#4F4F4F] font-[400]'>Location</h1>
                        <p className='text-[#2B2B2B] text-[17px] font-[500] capitalize mt-3'>Lorem ipsum dolor sit amet, consecte adipiscing elit. </p>
                    </div>

                    {/* buy now */}
                    <button type="button" onClick={nextRoute} className="font-Poppins mt-[2rem] sm:mt-4 mb-[2rem] sm:mb-0 w-full inline-block px-6 py-3 bg-blue-600 text-white font-medium text-[14px] leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Buy Now</button>

                </div>


            </div>

        </div>
        </>
    );
}
 
export default BuyerProductDetails;




