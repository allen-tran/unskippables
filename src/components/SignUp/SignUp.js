import React, { useState } from 'react';
import {
  Container, FormGroup, Label, Input, Spinner, Button,
} from 'reactstrap';
import './SignUp.css';

export default function SignIn() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const forms = [
    {
      text: 'first name', name: 'first name', placeholder: 'cool fist name', callback: setFirstName,
    },
    {
      text: 'last name', name: 'last name', placeholder: 'cool last name', callback: setLastName,
    },
    {
      text: 'email', name: 'email', placeholder: 'liluzivert@gmail.com', callback: setEmail,
    },
    {
      text: 'username', name: 'username', placeholder: 'liluzivert', callback: setUsername,
    },
    {
      text: 'password', name: 'password', placeholder: 'supersecret!', callback: setPassword,
    },
  ];

  function formEmpty() {
    return username.length && password.length
    && firstName.length && lastName.length.length && email.length;
  }

  async function handleSignUp() {
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
      <div className="banner">
        <p>create an account</p>
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
          onClick={() => handleSignUp(username, password)}
        >
          {isLoading ? <Spinner color="primary" /> : "let's go!"}
        </Button>
      </form>
      <br />
      <a href="signup" style={{ color: '#4e605e', textDecoration: 'none' }}>already part of the club? sign in silly!</a>
    </Container>
  );
}
