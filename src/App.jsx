import { useState } from "react";
import Input from "./components/Input"
function App() {

  

return (
     <>
      <div className='flex items-center justify-center min-h-screen '>
  <div className='flex w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden'>
          {/* Left Side */}
          <div className='w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-center items-center p-10'>
            <h2 className='text-4xl font-extrabold mb-6'>Come join us!</h2>
            <p className='text-center mb-6 text-sm leading-relaxed'>
              We are so excited to have you here. If you haven't already, create an account to get access to exclusive offers, rewards, and discounts.
            </p>
            <button className='bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-5 py-2 rounded-full transition'>
              Already have an account? Signin
            </button>
          </div>

          {/* Right Side */}
          <div className='w-1/2 p-10'>
            <h2 className='text-gray-800 font-bold text-center text-3xl mb-6'>Sign Up</h2>
            <form className='space-y-4'>
              <Input placeholder="Username"
              
              />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Password"
              onChange={()=>{
                
              }} 
              type="password"/>
              <Input placeholder="Confirm Password" type="password"/>
              <button type="submit" className='bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold px-4 py-2 transition w-full rounded-md'>
                Signup  
              </button>
            </form>

          </div>

        </div>
      </div>
    </>

)
 
}

export default App
