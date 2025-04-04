import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCivAz_2OYsPTUVfCE5npLQj5lujqQMDGg",
  authDomain: "auth-2167c.firebaseapp.com",
  projectId: "auth-2167c",
  storageBucket: "auth-2167c.firebasestorage.app",
  messagingSenderId: "67754739622",
  appId: "1:67754739622:web:bfea40038e8390fa753167"
};

const app = initializeApp(firebaseConfig);

export { app };