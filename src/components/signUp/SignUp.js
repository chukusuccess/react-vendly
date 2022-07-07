import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginimage from '../../image/loginimage.png'


export const SignUp = () => {
    const [businessName, setBusinessName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fullName, setFullName] = useState('')


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const loginDetails = {
            email,
            password,
            businessName,
            fullName
        }

        console.log(loginDetails)

        
    }

    return ( 
        <div className="bg-green-200 w-full h-[100vh] relative">
            <div className="flex">
                {/* left panel */}
                <div className="hidden bg-[#0055D4] text-white font-Raleway w-[40%] h-[100vh] sm:flex justify-between items-center flex-col py-[3rem] text-center">
                    <div className='text-[1.2rem] font-[400] px-6'>Create your first product in minute by creating an account</div>
                    <div>
                        <img 
                        style={{width: '300px', height: '300px', display: 'block'}}
                        src={loginimage} alt="" />
                    </div>
                    <div>
                        <div className='font-[20px] mb-3'>Already have an account</div>
                        <Link to='/login'>
                            <button className='bg-white text-[#0055D4] w-[12rem] h-[3rem] font-[600]'>LOG IN</button>

                        </Link>
                    </div>
                </div>

                {/* right panel */}
                <div className="bg-white w-full sm:w-[70%] h-[100vh] text-center py-[3rem] flex flex-col justify-center">
                    <h1 className='text-[1.4rem] mb-6 font-Raleway font-[600]'>CREATE ACCOUNT</h1>
                    <form className='font-Poppins' onSubmit={handleFormSubmit}>
                        {/* business name */}
                        <div className="w-full px-6 mb-4">
                            <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Enter Business Name"
                            required 
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}/>
                        </div>
                        
                        {/* Full Namae */}
                        <div className="w-full px-6 mb-4">
                            <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Enter Full Name"
                            required 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}/>
                        </div>
                        
                        {/* email adddress */}
                        <div className="w-full px-6 mb-4">
                            <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Enter Email Address"
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        
                        {/* password */}
                        <div className="w-full px-6 mb-4">
                            <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Password"
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        
                        {/* password */}
                        {/* <div className="w-full px-6 mb-4">
                            <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Confirm Password"
                            required 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div> */}


                        <div className='mt-[3rem] mb-[2rem] px-6 sm:px-0'>By creating an account you agree to our <span className='text-[#0055D4] font-[500]'>TERMS & CONDITION</span> and <span className='text-[#0055D4] font-[500]'>PRIVACY POLICY</span></div>

                        <button className='w-[15rem] bg-[#0055D4] h-[4rem] text-white'>CREATE ACCOUNT</button>

                        <div className='sm:hidden flex justify-center mt-6'>Already have an account? 
                        <Link to='/login'>
                            <span className='text-[#0055D4] font-[600] ml-2'>LOG IN</span>
                        </Link>
                        </div>
                    </form>
                </div>

                
            </div>
            {/* modal */}
            <div className='hidden absolute top-0 w-full h-[100vh]  justify-center items-center' style={{background: 'rgba(0,0,0,0.555)'}}>
                <svg role="status" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            </div>
        </div>
     );
}
 
