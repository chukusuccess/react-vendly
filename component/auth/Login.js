import { useState } from 'react';
import { Link } from 'react-router-dom';
import signupimage from '../../image/signupimage.png'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const loginDetails = {
            email,
            password
        }
        console.log(loginDetails)
    }
    return ( 
        <div className="bg-green-200 w-full h-[100vh]">
            <div className="flex">
                {/* left panel */}
                <div className="hidden bg-[#0055D4] text-white font-Raleway w-[40%] h-[100vh] sm:flex justify-between items-center flex-col py-[3rem] text-center">
                    <div className='text-[1.2rem] font-[400] px-6'>Monitor your sales, insights and boost your business</div>
                    <div>
                        <img 
                        style={{width: '300px', height: '300px', display: 'block'}}
                        src={signupimage} alt="" />
                    </div>
                    <div>
                        <div className='font-[20px] mb-3'>Dont have an account</div>
                        <Link to='/sign_up'>
                            <button className='bg-white text-[#0055D4] w-[12rem] h-[3rem] font-[600]'>CREATE ACCOUNT</button>
                        </Link>
                    </div>
                </div>

                {/* right panel */}
                <div className="bg-white w-full sm:w-[70%] h-[100vh] text-center py-[3rem] flex flex-col justify-center">
                    <h1 className='text-[1.4rem] mb-6 font-Raleway font-[600]'>LOG IN</h1>
                    <form onSubmit={handleFormSubmit} className='font-Poppins'>
                        {/* email adddress */}
                        <div className="w-full px-6 mb-4">
                            <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Enter Email Address"
                            required 
                            value={email}
                            onChange={(e) =>setEmail(e.target.value)}/>
                        </div>
                        
                        {/* password */}
                        <div className="w-full px-6 mb-4">
                            <input className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Password"
                            required 
                            value={password}
                            onChange={(e) =>setPassword(e.target.value)}/>
                        </div>


                        <div className='mt-[3rem] mb-[2rem] px-6 sm:px-0'>By creating an account you agree to our <span className='text-[#0055D4] font-[500]'>TERMS & CONDITION</span> and <span className='text-[#0055D4] font-[500]'>PRIVACY POLICY</span></div>

                        <button className='w-[15rem] bg-[#0055D4] h-[4rem] text-white'>CREATE ACCOUNT</button>

                        <div className='sm:hidden flex justify-center mt-6'>Dont have an account? 
                        <Link to='/sign_up'>
                            <span className='text-[#0055D4] font-[600] ml-2 uppercase'>Create account</span>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;