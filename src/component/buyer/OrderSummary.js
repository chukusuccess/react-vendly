import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ProductDetailsContext } from '../../context/ProductDetailsContext'
import { countries, states } from '../../dataUtils/region'

const OrderSummary = () => {
    const navigate = useNavigate()
    const { details } = useContext(ProductDetailsContext)
    console.log(details.product.productImage, 'thidujdskj')

    const queryParams = new URLSearchParams(window.location.search)
    const qty = queryParams.get("qty")
    const prodPrice = queryParams.get("price")

    console.log(prodPrice, 'this is the prod price')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setzipCode] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [ productQty, setProductQty ] = useState(1)
    let [ price, setPrice ] = useState(200)
    let initialPrice = 200

    const incrementProductQty = () => {
        setProductQty(productQty + 1)
        // setPrice(initialPrice * productQty + 200)
        
    }
    
    const decrementProductQty = () => {
        if (productQty >= 2) {
            setProductQty(productQty - 1)
            // setPrice(price - 200)
        }
    }

    

    useEffect(() => {
        console.log('ran')
        setProductQty(parseInt(qty))
        setPrice(prodPrice)
        console.log('this ran')    
    }, [])


    const goBack = () => {
        navigate(-1)

    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const deliveryInfo = {
            firstName,
            lastName,
            address,
            state,
            country,
            city,
            zipCode,
            phoneNumber
        } 
        localStorage.setItem('delivery', JSON.stringify(deliveryInfo))
        navigate(`/order_summary?contact=${deliveryInfo.phoneNumber}&address=${deliveryInfo.address}&price=${prodPrice}`)
        console.log(deliveryInfo)
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
                                <p className="leading-normal text-[ #7A7A7A] font-[600]">N{price}</p>
                                <div className='mt-6'>
                                {/* increment btn */}
                                <div className="inline-flex w-full sm:w-0 shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                                        <button onClick={decrementProductQty} type="button" className="sm:inline-block rounded-l px-6 py-3 bg-[#F0F6FF] text-[#7A7A7A] font-medium text-xs justify-center items-center leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out flex flex-grow focus:text-white hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                        </svg>
                                        </button>
                                        <button type="button" className="sm:inline-block flex items-center justify-center flex-grow px-6 py-3 bg-[#F0F6FF] text-[#7A7A7A] font-medium text-[16px] leading-tight uppercase  focus:outline-none focus:ring-0  transition duration-150 ease-in-out">{productQty}</button>
                                    
                                        <button onClick={incrementProductQty} type="button" className=" rounded-r sm:inline-block items-center flex flex-grow justify-center px-6 py-3 bg-[#F0F6FF] text-[#7A7A7A] font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out hover:text-white focus:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* total */}
                        <div className="flex justify-center font-Raleway w-full sm:mt-4 mt-[2rem] shadow-lg">
                            <ul className="bg-white rounded-lg border border-gray-200 text-gray-900 w-full">
                                <li className="px-6 py-5 border-b border-gray-200 w-full rounded-t-lg text-[#4F4F4F] flex justify-between font-[600] text-[14px]">
                                    <span>SUBTOTAL</span>
                                    <span>N{price}</span>
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
                        <h1 className="font-Raleway font-[600] text-[#2B2B2B] text-[20px]">Delivery Address</h1>
                        <br />

                        {/* form */}
                        <form 
                        onSubmit={handleFormSubmit}
                        className="space-y-4 text-gray-700 font-Poppins text-[12px] h-auto">
                            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                                {/* first name */}
                                <div className="w-full px-2 md:w-1/2">
                                    <input className="w-full h-10 px-3  py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_name" placeholder="First Name" required 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                {/* last name */}
                                <div className="w-full px-2 md:w-1/2">
                                    <input className="w-full h-10 px-3 py-6  text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Last Name"
                                    required 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                                {/* address */}
                                <div className="w-full px-2 md:w-1/2">
                                    <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Address"
                                    required 
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}/>
                                </div>

                                {/* city */}
                                <div className="w-full px-2 md:w-1/2">
                                    <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="City"
                                    required 
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}/>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                                {/* state */}
                                <div className="w-full px-2 md:w-1/2">
                                    <div className="relative inline-block w-full text-gray-700">
                                        <select className="w-full h-[3.2rem] pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="State"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}>
                                            {states.map(state => (
                                                <option key={state} >{state}</option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* country */}
                                <div className="w-full px-2 md:w-1/2">
                                    <div className="relative inline-block w-full text-gray-700">
                                        <select className="w-full h-[3.2rem] pl-3 pr-6  text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" 
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}>
                                            {countries.map(country => (
                                                <option key={country} >{country}</option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                                {/* zip code */}
                                <div className="w-full px-2 md:w-1/2">
                                    <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Zip Code"
                                    required 
                                    value={zipCode}
                                    onChange={(e) => setzipCode(e.target.value)}/>
                                </div>

                                {/* phone number */}
                                <div className="w-full px-2 md:w-1/2">
                                    <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Phone Number"
                                    required 
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </div>
                            </div>
                            <br />

                            <div className=" mt-[10rem]">
                                <button className="w-full h-[3.3rem] px-6 text-indigo-100 transition-colors duration-150 bg-[#0055D4] rounded-lg focus:shadow-outline  tracking-wider text-[17px] font-[500]">PROCEED TO PAYMENT</button>
                            </div>
                            <br className="sm:hidden block"/>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    );
}
 
export default OrderSummary;