import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import "./LoginPopup.css"
import { FcGoogle } from 'react-icons/fc'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import { app } from "./firebase"


const Register = ({ setShowLogin, setShowRegister, setUser }) => {

  const [UserName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider()

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      await updateProfile(userCredential.user, { displayName: UserName });
  
      console.log("Account created successfully:", userCredential.user.displayName);
      setUser(UserName);
      localStorage.setItem("username", UserName);
  
      setShowRegister(false);
    } catch (error) {
      alert(error.message);
    }
  };
  

  const HandleGoogleSignUp = async () => {
    if (confirm("Sign Up with Google ?")) {
      try {
        const googleProvider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, googleProvider);

        console.log("Google Sign-In Successful");
        console.log("User Display Name:", result.user.providerData);

        const displayName = result.user.providerData;

        displayName.map((item) => {
          const username = item.displayName;
          setUser(username);
          localStorage.setItem("username", username);
        })

        setShowRegister(false);
      } catch (error) {
        alert(error)
      }
    }
  }

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSignUp}>
        <div className="login-popup-title">
          <h2>Register</h2>
          <FiX
            className="close-icon"
            onClick={() => setShowRegister(false)}
            size={24}
          />
        </div>
        <div className="login-popup-input">
          <input type="text" placeholder='Your Name' required value={UserName} onChange={(e) => setUserName(e.target.value)} />
          <input type="email" placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Create Account</button>

        <button type="button" className="google-signin-btn" onClick={() => HandleGoogleSignUp()}>
          <FcGoogle size={20} />
          <span> Continue with Google</span>
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <p>Already have account?
          <span onClick={() => {
            setShowRegister(false);
            setShowLogin(true);
          }} className='anotherPage'> Click here</span>
        </p>
      </form>
    </div>
  )
}

export default Register