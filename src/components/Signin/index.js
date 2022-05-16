import React, { useState } from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'
import authService from '../../features/auth/authService';

const SignIn = () => {
  const [input, setInput] = useState({
    name:"",
    email:""
  });

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSignin = e => {
    e.preventDefault();
    console.log(input)
  }

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">Genesis Farm</Icon>
            <FormContent>
                <Form>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' onChange={handleInputChange} required name='email' value={input.email} />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' onChange={handleInputChange} name='password' value={input.password}/>
                    <button onClick={() => console.log("aopshjfpo")} name='submit'>Sign In</button>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default SignIn