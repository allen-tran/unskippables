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

  async function handleSignIn() {
    setIsLoading(true);
    // try {
    //   props.history.push('/');
    // } catch (e) {
    //   alert(e.message, 'BRO SOMETHING WENT WRONG');
    //   setIsLoading(false);
    // }
  }
  return (
    <Container className="main-container">
      <form>
        {forms.map((x) => (
          <FormGroup key={0}>
            <Label>{x.text}</Label>
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
