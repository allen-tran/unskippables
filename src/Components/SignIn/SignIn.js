import React, { useState } from 'react';
import {
  Container, FormGroup, Label, Input, Spinner, Button,
} from 'reactstrap';
import { handleSignIn } from '../../APIFunctions/User';
import './SignIn.css';
import Navbar from '../Navbar/Navbar';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authed, setAuthed] = useState(false);
  const forms = [
    {
      text: 'username', name: 'username', placeholder: 'liluzivert', callback: setUsername,
    },
    {
      text: 'password', name: 'password', placeholder: 'coolcatz', callback: setPassword,
    },
  ];

  function formEmpty() {
    return username.length && password.length;
  }

  async function handleSubmit() {
    setIsLoading(true);
    const response = await handleSignIn({ username, password });
    const { data } = response;

    if (data.user) {
      alert('Login successful.');
      setAuthed(true);
      window.location.href = '/feed';
    } else {
      alert('Sorry, login failed.');
    }

    setIsLoading(false);
  }

  return (
    <>
      <Navbar props={{ authed }} />
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
                placeholder={x.placeholder}
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
            onClick={() => handleSubmit()}
          >
            {isLoading ? <Spinner color="primary" /> : 'login'}
          </Button>
        </form>
        <br />
        <a href="signup" style={{ color: '#4e605e', textDecoration: 'none' }}>new user? sign up here!</a>
      </Container>
    </>
  );
}
