import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductDetailsContext } from '../../context/ProductDetailsContext'


const OrderSummaryContact = () => {
    const navigate = useNavigate()
    const [ productQty, setProductQty ] = useState()
    let [ price, setPrice ] = useState()

    const queryParams = new URLSearchParams(window.location.search)
    const contact = queryParams.get("contact")
    const address = queryParams.get("address")
    const prodPrice = queryParams.get("price")
    console.log(contact, address)

    const { details } = useContext(ProductDetailsContext)


    useEffect(() => {
        let product = localStorage.getItem('product')
        
        if (!product) {
            console.log('it empty')
            localStorage.setItem('product', JSON.stringify({price: price, qty: 5}))
            return 
        } else {
            let product = JSON.parse(localStorage.getItem('product'))
            setProductQty(product.qty)
            setPrice(product.price)
            console.log('this ran')

        }
        
    }, [])

    const goBack = () => {
        navigate(-1)
    }
    return ( 
        <div className='w-full relative h-auto sm:h-[100vh] sm:flex sm:items-center sm:justify-center'>
            {/* header nav */}
            <div className='text-[#2B2B2B] shadow-lg font-Poppins fixed top-0 w-full flex justify-between h-[4rem] items-center px-6 bg-white'>
                <h1 className='font-[600]'>
                    <svg onClick={goBack} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </h1>
            </div>


            <div className="px-6 w-full">
                {/* page title */}
                <h1 className="font-Raleway font-[600] text-[#2B2B2B] text-[20px] mb-6">ORDER SUMMARY</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:mt-0 mt-[3.5rem]">
                    {/* left grid */}
                    <div className="w-full sm:pr-3">
                        {/* IMAGE CARD */}
                        <div className="w-full overflow-hidden rounded-lg shadow-lg sm:flex">
                            <div className="w-full sm:w-1/3">
                                <img className="object-cover w-full h-48" src={details.product.productImage} alt="Flower and sky"/>
                            </div>

                            <div className="flex-1 px-6 py-4 font-Raleway">
                                {/* product name */}
                                <h4 className="mb-3 text-xl tracking-tight text-[#4F4F4F] font-[600]">{details.product.productName}</h4>
                                {/* price */}
                                <p className="leading-normal text-[ #7A7A7A] font-[600]">N{prodPrice}</p>
                                <div className='mt-6'>
                            </div>
                            </div>
                        </div>

                        {/* total */}
                        <div className="flex justify-center font-Raleway w-full sm:mt-4 mt-[2rem] shadow-lg">
                            <ul className="bg-white rounded-lg border border-gray-200 text-gray-900 w-full">
                                <li className="px-6 py-5 border-b border-gray-200 w-full rounded-t-lg text-[#4F4F4F] flex justify-between font-[600] text-[14px]">
                                    <span>SUBTOTAL</span>
                                    <span>N100</span>
                                </li>

                                <li className="px-6 py-5 border-b border-gray-200 w-full flex justify-between text-[#4F4F4F] font-[600] text-[14px]">
                                    <span>DISCOUNT</span>
                                    <span>0.00</span>
                                </li>
                                
                                <li className="px-6 py-5 w-full rounded-b-lg text-[16px] flex justify-between text-[#2B2B2B] font-[600]">
                                    <span>GRAND TOTAL</span>
                                    <span>N100.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* right grid */}
                    <div className="h-auto mt-[2rem] sm:mt-0">
                        <h1 className="font-Raleway font-[600] text-[#2B2B2B] text-[20px]">Contact Details</h1>
                        <br />

                        {/* contact details */}
                        <div className="flex justify-center font-Poppins w-full sm:mt-4 mt-[2rem] shadow-lg">
                            <ul className="bg-white rounded-lg border border-gray-200 text-gray-900 w-full">
                                <li className="px-6 py-4 border-b border-gray-200 w-full rounded-t-lg ">
                                    <span className="block font-[400] py-2 text-[14px] text-[#4F4F4F]">Contact</span>
                                    <span className="text-[16px]">+{contact}</span>
                                </li>

                                <li className="px-6 py-[1.6rem] border-b border-gray-200 w-full">
                                    <span className="block font-[400] py-6 text-[14px] text-[#4F4F4F]">Send To</span>
                                    <span className="text-[16px]">{address}</span>
                                </li>
                            </ul>
                        </div>

                        {/* make payment*/}
                        <button type="button" className="font-Poppins mt-[2rem] sm:mt-4 mb-[2rem] sm:mb-0 w-full inline-block px-6 py-3 bg-blue-600 text-white font-medium text-[14px] leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">MAKE PAYMENT</button>
                        
                    </div>
                </div>

            </div>


        </div>
    );
}
 
export default OrderSummaryContact;