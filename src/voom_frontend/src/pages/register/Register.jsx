import React, { useState } from 'react';
// import { userSignUp } from '../../motokoApi';
import { LiaEye } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";
import google from "../../public/assets/google.png"
import apple from "../../public/assets/apple.png"

const Register = () => {

  const [userData, setUserData] = useState({
    fullName: '',
    username: '',
    email: '',
    phoneNo: '',
    cardDetails: '',
    password: '',
    confirmPassword: '',
  });

  const [feedback, setFeedback] = useState({ success: null, message: '' });

  // State variables for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };


   // Handle form submission and user registration
  //  const handleUserRegistration = async () => {
  //   const { fullName, username, email, phoneNo, cardDetails, password, confirmPassword } = userData;

  //   // Check if password and confirm password match
  //   if (password !== confirmPassword) {
  //     setFeedback({ success: false, message: 'Passwords do not match.' });
  //     return;
  //   }

  //   // Call the userSignUp function from the motokoApi.js
  //   const response = await userSignUp(fullName, username, email, phoneNo, cardDetails, password);
  //   setFeedback(response);
  // };


   // Toggle password visibility
   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="relative z-50 bg-[#fff] h-full w-full py-3 mb-[100px]">
        <h2 className='text-[28px] font-[600] my-5'>Create account</h2>

        <form action="#">
          <div className='my-5'>
            <label htmlFor="" className='text-[16px] font-[600] mb-5'>Full name</label>
            <input 
              type="text" 
              required placeholder='Insert full name' 
              className='h-[52px] px-5 rounded-[8px] w-full bg-[#C4C4C436] text-[#5D5D5D70] outline-none'
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className='my-5'>
            <label htmlFor="" className='text-[16px] font-[600] mb-5'>Email</label>
            <input 
              type="text" 
              required placeholder='Insert email address' 
              className='h-[52px] px-5 rounded-[8px] w-full bg-[#C4C4C436] text-[#5D5D5D70] outline-none'
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className='my-5'>
            <label htmlFor="" className='text-[16px] font-[600] mb-5'>Phone Number</label>
            <input 
              type="text" 
              required placeholder='Your phone number' 
              className='h-[52px] px-5 rounded-[8px] w-full bg-[#C4C4C436] text-[#5D5D5D70] outline-none'
              name="phoneNo"
              value={userData.phoneNo}
              onChange={handleInputChange}
            />
          </div>

          <div className='my-5 relative'>
            <label htmlFor="" className='text-[16px] font-[600] mb-5'>Password</label>
            <input 
              type={showPassword ? 'text' : 'password'} 
              required 
              placeholder='Create password ' 
              className='h-[52px] px-5 rounded-[8px] w-full bg-[#C4C4C436] text-[#5D5D5D70] outline-none'
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <span className='absolute bottom-[15px] right-[15px] cursor-pointer' onClick={togglePasswordVisibility}>
                {showPassword ? 
                  <LiaEye className="text-[#5D5D5D70] text-[17px]"/> :
                  <LiaEyeSlash className="text-[#5D5D5D70] text-[17px]"/>
                }
            </span>
            
          </div>

          <div className='my-5 relative'>
            <label htmlFor="" className='text-[16px] font-[600] mb-5'>Confirm password</label>
            <input 
              type={showConfirmPassword ? 'text' : 'password'} 
              required 
              placeholder='Re-enter password' 
              className='h-[52px] px-5 rounded-[8px] w-full bg-[#C4C4C436] text-[#5D5D5D70] outline-none'
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleInputChange}
            />
            <span className='absolute bottom-[15px] right-[15px] cursor-pointer' onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? 
                  <LiaEye className="text-[#5D5D5D70] text-[17px]"/> :
                  <LiaEyeSlash className="text-[#5D5D5D70] text-[17px]"/>
                }
            </span>
            
          </div>

          <p className="text-[12px] font-[600]">By creating an account you accept our <a href="#" className="text-secondary-color">Terms of Service</a> and <a href="#" className="text-secondary-color">Privacy Policy</a></p>

          {/* <button onClick={handleUserRegistration} className="my-5 text-[18px] font-[600] bg-secondary-color h-[52px] w-full rounded-[8px] text-[#fff] transform hover:scale-105 duration-300">Create account</button> */}
        </form>

        <button className="my-5 text-[18px] font-[600] bg-secondary-color h-[52px] w-full rounded-[8px] text-[#fff] transform hover:scale-105 duration-300">Create account</button>

        <span className="flex items-center justify-center gap-2">
          <p className="text-[12px] font-[600]">Already have an Account?</p>
          <a href="#" className="text-[#8E6CEF] text-[12px] font-[600]">Sign In</a>
        </span>

        <span className="flex justify-between items-center my-5">
          <div className="w-[114px] h-[1px] bg-[#3D3D3D]"></div>
          <p className="text-[12px] font-[600] text-[#888888]">or continue with</p>
          <div className="w-[114px] h-[1px] bg-[#3D3D3D]"></div>
        </span>

        <span className="flex items-center justify-between">
          <a href="#">
            <img
                src={google}
                alt="google"
                className=""
            />
          </a>

          <a href="#">
            <img
                src={apple}
                alt="google"
                className=""
            />
          </a>
        </span>

        {/* Display feedback after registration */}
        {feedback.success !== null && (
          <div style={{ color: feedback.success ? 'green' : 'red' }}>
            {feedback.message}
          </div>
        )}
    </div>
  )
}

export default Register