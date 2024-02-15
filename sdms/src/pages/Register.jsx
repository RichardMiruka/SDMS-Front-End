import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom'


// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{4,24}$/;


const RegisterPage = ({ onLogin }) => {
  const [first_name, setfirst_name] = useState('');
  const [errFN, setErrFN] = useState('');
  const firstNameRef = useRef(null);

  const [last_name, setlast_name] = useState('');
  const [errLN, setErrLN] = useState('');
  const lastNameRef = useRef(null);

  const [phone_number, setPhonenumber] = useState('');

  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const emailRef = useRef(null)

  const [password, setPassword] = useState('');
  const [errPwd, setErrPwd] = useState('');
  const pwdRef = useRef(null);

  const [conPassword, setConPassword] = useState('');
  const [errConPwd, setErrConPwd] = useState(false)
  const conPwdRef = useRef(null);

  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [errmsg, setErrMsg] = useState('')
  const [isValid, setIsValid] = useState(false)


  const navigate=useNavigate()
  const handleRegister=async(e)=>{
    try { const response=await fetch('http://127.0.0.1:5000/api/v1/users',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({first_name, last_name, email, phone_number, password}),
  }
  );
  const data=await response.json()
  localStorage.setItem('userData', JSON.stringify(data));
  if (response.ok){
    setMessage(data.message)
    setError('')
    navigate('/login')
  }
  else{
    setError(data.error)
    setMessage('')
  }  
    } catch (error) {
      console.log(error)
      setError('An error occurred, please do try again')
    }
  }
  
  const validate = () => {
    if (!first_name) {
      setErrFN('Missing first name');
    } else if (!last_name) {
      setErrLN('Missing last name');
    } else if (!email) {
      setErrEmail('Missing Email')
    } else if (!password) {
      setErrPwd('Missing password')
    } else if (!conPassword) {
      setErrConPwd('Missing confirm password')
    } else {
      setIsValid(true)
    }
  }

  const handleEmailChange = (e) => {
    if (emailRef.current.value){
      setErrEmail('')
    }
    setEmail(e.target.value);
  }

  const handleFirstName = (e) => {
    if (firstNameRef.current.value){
      setErrFN('');
    }
    setfirst_name(e.target.value);
  }

  const handleLastName = (e) => {
    if (lastNameRef.current.value){
      setErrLN('');
    }
    setlast_name(e.target.value);
  }

  const handlePassword = (e) => {
    if (pwdRef.current.value){
      setErrPwd('');
      setErrMsg('')
    }
    setPassword(e.target.value);
  }
  const handlConPassword = (e) => {
    if (conPwdRef.current.value){
      setErrConPwd('');
      setErrMsg('')
    }
    setConPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (password !== conPassword) {
      setErrMsg('paswords do not match');
      setPassword("");
      setConPassword("");
      // setMessage('form formitted successfully');
      // setIsSubmitted(true);
      // setTimeout(()=>{
      //   window.location.reload();
      // }, [3000])
    } else if (password && conPassword && password === conPassword) {
      handleRegister();
      // setMessage('form formitted successfully');
      resetState();
    }
  };

  const resetState = () => {
    setfirst_name('');
    setlast_name('');
    setEmail('');
    setPassword('')
    setConPassword('')
    setPhonenumber('')
  }

  return (
    <div className="bg-indigo-300 flex items-center justify-center px-6">
      <div>
      {message && <p className="bg-green-500 shadow-md text-center text-white p-2 rounded-md mt-4">{message}</p>}
      {error && <p  className="bg-red-500 shadow-md text-center text-white p-2 rounded-md mt-4">{error}</p>}
      <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-700 px-20 mt-4 mb-10 rounded-xl">
          {/* <img src="client/src/images/login.png" alt="logo"/> */}
            {/* <p className="text-center bg-green-700 w-full text-white rounded-md">{message}</p> */}
            <form onSubmit={handleSubmit} className="w-full"> {/*onSubmit={handleRegister} */}
              <h1 className="text-center mb-4 text-2xl font-bold pt-4">Sign up</h1>
              <div className="flex space-x-8">
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block text-sm font-medium text-grey-600">First Name</label>
                        <input
                          type='text'
                          id='first_name'
                          ref={firstNameRef}
                          placeholder='First name'
                          required
                          className="mt-1 p-2 border rounded-md"
                          value={first_name}
                          onChange={handleFirstName}
                        />
                        <p className="text-red-500">{errFN}</p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-sm font-medium text-grey-600">Last Name</label>
                        <input
                          type='text'
                          id='last_name'
                          ref={lastNameRef}
                          placeholder='First name'
                          required
                          className="mt-1 p-2 border rounded-md"
                          value={last_name}
                          onChange={handleLastName}
                        />
                        <p className="text-red-500">{errLN}</p>
                    </div>
              </div>
              <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-grey-600">Email</label>
                  <input
                    type='text'
                    id='email'
                    ref={emailRef}
                    autoComplete="off"
                    placeholder='abc@abc.com'
                    required
                    className={"mt-1 p-2 w-full border rounded-md"}
                    value={email}
                    onChange={handleEmailChange}
                  /> 
                <p className="text-red-500">{errEmail}</p>
              </div>
              <div className="mb-4">
                  <label htmlFor="phone_number" className="block text-sm font-medium text-grey-600">Phone Number</label>
                  <input
                    type='tel'
                    id='phone_number'
                    placeholder='+254 700 000 000'
                    className="mt-1 p-2 w-full border rounded-md"
                    value={phone_number}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="user_type">User-type</label>
                  <select 
                  id='user_type'
                  
                  // value={user_type}
                  // onChange={(e) => setUsertype(e.target.value)}
                  className="block w-full rounded-md text-sm fornt-medium text-grey-600">
                    <option value=''>select user_type</option>
                    <option value='organizer'>organizer</option>
                    <option value='participant'>participant</option>
                  </select>
              </div>
              <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-grey-600">password</label>
                  <input
                    type='password'
                    id='password'
                    ref={pwdRef}
                    required
                    placeholder='password'
                    className="mt-1 p-2 w-full border rounded-md"
                    value={password}
                    onChange={handlePassword}                    
                  />
                  <p className="text-red-500">{errPwd}</p>
              </div>
              <div className="">
                  <label htmlFor="conPassword" className="block text-sm font-medium text-grey-600">confirm password</label>
                  <input
                    type='password'
                    id='conPassword'
                    ref={conPwdRef}
                    placeholder='Confirm password'
                    required
                    className="mt-1 p-2 w-full border rounded-md"
                    value={conPassword}
                    onChange={handlConPassword}
                  />
                  <p className="text-red-500">{errConPwd}</p>
              </div>
              <p className="text-center text-red-500">{errmsg}</p>
              <button type='submit' onClick={handleSubmit} className="bg-blue-700 text-white px-4 py-2 mb-4 mt-4 rounded-md" >Register</button>
              <br />
              <div className="mb-8">
                  Already Registered? <span className="text-blue-700 underline font-bold text-xl"><Link to="/login">login</Link></span>
              </div>
            </form>
      </div>
      </div>
    </div>
  );
};

export default RegisterPage;