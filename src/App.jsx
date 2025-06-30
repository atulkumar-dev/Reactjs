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
              <Input placeholder="Username"/>
              <Input placeholder="Email"  className=" bg-amber-700"/>
              <Input placeholder="Password" type="password"/>
              <Input placeholder="Confirm Password" type="password"/>
              <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 transition w-full rounded-md'>
                Signup  
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-2">or signup with</p>
              <div className="flex justify-center space-x-4 text-2xl">
                <button className="text-blue-600 hover:text-blue-800 transition"><i className="fab fa-facebook-f"></i></button>
                <button className="text-red-500 hover:text-red-700 transition"><i className="fab fa-google-plus-g"></i></button>
                <button className="text-blue-700 hover:text-blue-900 transition"><i className="fab fa-linkedin-in"></i></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

)
 
}

export default App
