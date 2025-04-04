import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import "./LoginPopup.css"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from "./firebase"
import { useNavigate } from 'react-router-dom'

const LoginPopup = ({ setShowLogin, setShowRegister , setUser }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const HandleLogin = async (e) => {
    e.preventDefault();
    if (confirm("Login successfully")) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("login successfully");
        setShowLogin(false);
      } catch (error) {
        alert(error);
      }
    }
  }

  const HandleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const username = result.user.displayName;

      console.log("Google Sign-In Successful:", username);
      setUser(username);
      localStorage.setItem("username", username);

      setShowLogin(false);
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={HandleLogin}>
        <div className="login-popup-title">
          <h2>Login</h2>
          <FiX
            className="close-icon"
            onClick={() => setShowLogin(false)}
            size={24}
          />
        </div>
        <div className="login-popup-input">
          <input type="email" placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button>Login</button>

        <div className="login-popup-divider">
          <span>or</span>
        </div>

        {/* Add Google Sign-In Button */}
        <button type="button" className="google-signin-btn" onClick={HandleGoogleSignIn}>
          <FcGoogle size={20} />
          <span> Continue with Google</span>
        </button>


        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <p>Create a new account? <span onClick={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}> Click here</span></p>
      </form>
    </div>
  )
}

export default LoginPopup