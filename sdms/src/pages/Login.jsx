import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'

const LoginPage = ({ onLogin }) => {
  const pwdRef = useRef(null);
  const mailRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  const [error, setError]= useState('');

  const navigate=useNavigate()
  const handleLogin=async(e)=>{
    e.preventDefault();
    try { const response=await fetch('http://127.0.0.1:5000/api/v1/login',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({email, password}),
  }
  );
  const data=await response.json()
  if (response.ok){
    localStorage.setItem("token",data['access_token'])
    setMessage(data.message)
    setTimeout(() => {
      navigate('/tournament')
    }, [2000])
  }
  else{
    setError(data.error)
    setPassword('')
    pwdRef.current.focus();
  }  
    } catch (error) {
      setError('An error occurred, please do try again')
    }
  }

  useEffect(()=>{
    mailRef.current.focus();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-300 via-green-200 to-indigo-300 flex justify-center items-center">
      <div className="h-screen mt-20" >
            {/* <img src="client/src/images/ourimage.png" alt="logo"/> */}
            {message && <p className="bg-green-500 shadow-md text-center text-white p-2 rounded-md mt-4">{message}</p>}
            {error && <p className="bg-red-500 shadow-md text-center text-white p-2 rounded-md mt-4">{error}</p>}
            <div className="w-full bg-gradient-to-r from-blue-500 via-purple-400 to-purple-700 h-3/5 rounded-xl mt-4">
                <form onSubmit={handleLogin}>
                    <h1 className="text-center mb-12 mt-4 text-2xl font-bold pt-4">Log in</h1>
                    <div className="flex space-x-4 ml-3 mx-auto">
                          <div className="mx-4">
                              <label htmlFor="email" className='p-4'>Email</label>
                              <input
                                type='text'
                                id='email'
                                ref={mailRef}
                                placeholder='Email'
                                className='rounded-md shadow-md'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                          </div>
                          <br />
                          <div className="ml-4">
                                <label htmlFor="password" className='p-4 text-black-700'>Password</label>
                                <input
                                  type='password'
                                  id="password"
                                  ref={pwdRef}
                                  className='p-1 rounded-md shadow-md mr-10'
                                  placeholder='password'
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                          </div>
                    </div>
                    <br />
                    <div className="flex justify-between mx-10">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded-sm ml-4" />
                          <div>Remember me</div>
                        </div>
                        <div className="m-4">
                          <button type='submit'
                            onClick={handleLogin}
                            className="bg-blue-700 transition-all duration-700 hover:bg-blue-500 text-center mr-12 text-white p-8 py-2 rounded-md" >
                              Login</button>
                        </div>
                    </div>
                    <br />
                    <div className="text-center p-6">
                        Don't have an account? <span className="text-blue-700 underline font-bold text-md"><Link to="/register">Sign Up</Link></span>
                    </div>
                  </form>
            </div>
           
      </div>
    </div>
  );  
};

export default LoginPage;
