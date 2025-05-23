import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSignUpMutation } from '../apiSlice'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/userSlice'
import { useNavigate } from 'react-router'

export const LoginPage = () => {
  const {handleSubmit, register, form, formState: { errors }} = useForm()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('');
  const [signUp] = useSignUpMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const onSubmit = async () => {
    try {
      const payload = {
        emailId: email,
        password: password
      }
      const result = await signUp(payload).unwrap()
      dispatch(addUser(result));
      navigate('/')
   
    } catch (error) {
      setIsError(error)
      console.error('Login failed:', error);
      // Handle error here (e.g., show error message to user)
    }
  }
  


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="card card-dash bg-base-100 w-96 shadow-2xl hover:shadow-3xl transition-all duration-300 -mt-20">
        <div className="card-body">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold text-primary">DevTinder</h1>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-red-500 animate-heartbeat hover:animate-none transition-all duration-300 ease-in-out cursor-pointer" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-600 mt-2">Find your perfect code partner</p>
          </div>
          <div className="space-y-4">
            <div className="form-control">
            <input type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@xyz.com" 
            className="input input-primary" 
            />
            </div>
            <div className="form-control">
            <input type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Primary" 
            className="input input-primary" />
            </div>
  
            <div className="flex justify-between items-center text-sm">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text ml-2">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:underline">Forgot Password?</a>
            </div>
            <button className="btn btn-primary w-full">Login</button>
            <p className="text-center text-sm">
              Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </form>
  )
}


