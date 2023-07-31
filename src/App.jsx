import { useState } from 'react'
import Authenticate from './components/Authenitcate';
import SignUpForm from './components/SignUpForm';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>

    
  );
}