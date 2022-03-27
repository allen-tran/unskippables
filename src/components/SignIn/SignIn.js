import React, { useState } from 'react'
import { Container, FormGroup, Label, Input, Spinner, Button } from 'reactstrap';

export default function SignIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const forms = [
        {text: "username", name: "username", callback: setUsername},
        {text: "password", name: "password", callback: setPassword}
    ]

    function formEmpty() {
        return username.length && password.length;
    }
    async function handleSignIn(){
        setIsLoading(true);
        try {
            props.history.push('/');
        } catch(e) {
            alert(e.message, "BRO SOMETHING WENT WRONG");
            setIsLoading(false);
        }
    }
  return (
   <Container style={{width: '300 px'}}>
       <form style={{width: '300 px'}}>
           {forms.map((x, index) => {
               return (
                   <FormGroup key={index}>
                       <Label>{x.text}</Label>
                       <Input
                        autoFocus
                        name={x.name}
                        type={x.name}
                        onChange={(e)=> x.callback(e.target.value)}
                       />
                   </FormGroup>
               )
           })}
            <Button
            block
            className="login-button"
            disabled={!formEmpty() || isLoading}
            type="submit"
            onClick={() => handleSignIn(username, password)}
            >
            {isLoading ? <Spinner color="primary" /> : "login"}
            </Button>
        </form>
            <br />
            <a href="signup">new user? sign up here!</a>
   </Container>
  )
}
