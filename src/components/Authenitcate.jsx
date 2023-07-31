import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function Authenticate({ token, setToken }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
     
      setError(!result.success);
      console.log(result);
      
      setUsername(result.data.username.username);
    } catch (error) {
      setError(error.message);
      setSuccessMessage(null);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>      
      {successMessage && <Alert key='success' variant='success' >{successMessage} {username}</Alert>}
      {error && <Alert key='danger' variant='danger'>{error}</Alert>}
      <Button variant="secondary" onClick={handleClick}>Authenticate Token !</Button>
    </div>
  );
}
