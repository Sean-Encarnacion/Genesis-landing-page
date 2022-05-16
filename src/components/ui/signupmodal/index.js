import React, { useEffect, useState } from "react";
import { OuterContainer, CloseBtn } from "./modal.styles";
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'
import authService from "../../../features/auth/authService";

const SignupModal = ({isOpen, changeIsOpen}) => {

  const [input, setInput] = useState({
    email:"",
    password:""
  });

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSignin = e => {
    e.preventDefault();
    if (input) {
      authService.login(input)
    }
  }

  return isOpen ? (
    <OuterContainer>
      <FormWrap>
            <FormContent>
                <Form action='' method='POST'>
                    <CloseBtn onClick={() => {
                      changeIsOpen(!isOpen)
                    }}>&#x2715;</CloseBtn>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' onChange={handleInputChange} required name='email' value={input.email} />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' onChange={handleInputChange} name='password' value={input.password}/>
                    <FormButton onClick={handleSignin} name='submit'>Sign In</FormButton>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </OuterContainer>
    // <Container>
        
    // </Container>
  ) : (
    <></>
  )
};

export default SignupModal
