import React, { useState } from 'react';
import {
  Container, FormGroup, Label, Input, Spinner, Button,
} from 'reactstrap';
import './SignIn.css';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const forms = [
    { text: 'username', name: 'username', callback: setUsername },
    { text: 'password', name: 'password', callback: setPassword },
  ];

  function formEmpty() {
    return username.length && password.length;
  }

  async function handleSignIn(event) {
    setIsLoading(true);
    event.preventDefault();
    const response = await fetch('https://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
  }
  return (
    <Container className="main-container">
      <div className="banner">
        <p>log into your acccount</p>
      </div>
      <form>
        {forms.map((x) => (
          <FormGroup key={0} style={{ textAlign: 'left' }}>
            <Label style={{ textAlign: 'left' }}>{x.text}</Label>
            <Input
              autoFocus
              name={x.name}
              type={x.name}
              onChange={(e) => x.callback(e.target.value)}
              style={{ width: '400px' }}
            />
          </FormGroup>
        ))}
        <Button
          block
          className="login-button"
          disabled={!formEmpty() || isLoading}
          type="submit"
          onClick={() => handleSignIn(username, password)}
        >
          {isLoading ? <Spinner color="primary" /> : 'login'}
        </Button>
      </form>
      <br />
      <a href="signup" style={{ color: '#4e605e', textDecoration: 'none' }}>new user? sign up here!</a>
    </Container>
  );
}
