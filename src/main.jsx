import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqkIBl3XDoYiB9aovKnllNp4KI7lkIkiE",
  authDomain: "clicktechstore-ae3a5.firebaseapp.com",
  projectId: "clicktechstore-ae3a5",
  storageBucket: "clicktechstore-ae3a5.appspot.com",
  messagingSenderId: "930467880658",
  appId: "1:930467880658:web:0f0b0c1bcf3efb8ad0970b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
