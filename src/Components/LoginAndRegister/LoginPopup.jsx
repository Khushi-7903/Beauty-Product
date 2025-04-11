import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import "./LoginPopup.css";
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  getAuth,
  sendPasswordResetEmail 
} from 'firebase/auth';
import { app } from "./firebase";

const LoginPopup = ({ setShowLogin, setShowRegister, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetPopup, setShowResetPopup] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLogin(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const HandleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const username = result.user.displayName;
  
      console.log("Google Sign-In Successful:", username);
      setUser(username); // This will call the handleSetUser from App.js
      setShowLogin(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      alert("Please enter your email address");
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert("Password reset email sent! Check your inbox.");
      setShowResetPopup(false);
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
          <input 
            type="email" 
            placeholder='Your Email' 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder='Password' 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          <div className="forgot-password">
            <span onClick={() => setShowResetPopup(true)}>
              Forgot Password?
            </span>
          </div>
          
          <div className="button-div">
            <button>Login</button>
            <button 
              type="button" 
              className="google-signin-btn" 
              onClick={HandleGoogleSignIn}
            >
              <FcGoogle size={20} />
              <span> Continue with Google</span>
            </button>
          </div>
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <p>Create a new account?{' '}
          <span 
            onClick={() => {
              setShowLogin(false);
              setShowRegister(true);
            }} 
            className='anotherPage'
          >
            Click here
          </span>
        </p>
      </form>

      {/* Password Reset Popup */}
      {showResetPopup && (
        <div className="reset-popup-overlay">
          <div className="reset-popup">
            <div className="reset-popup-header">
              <h3>Reset Password</h3>
              <FiX 
                className="close-icon" 
                onClick={() => setShowResetPopup(false)}
                size={20}
              />
            </div>
            <p>Enter your email to receive a password reset link</p>
            <input
              type="email"
              placeholder="Your Email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button 
              className="reset-button"
              onClick={handlePasswordReset}
            >
              Send Reset Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;