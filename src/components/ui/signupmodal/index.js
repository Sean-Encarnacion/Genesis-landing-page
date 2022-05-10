import React, { useEffect, useState } from "react";
import { OuterContainer, CloseBtn } from "./modal.styles";
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const SignupModal = ({isOpen, changeIsOpen}) => {
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
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' />
                    <FormButton link to='../src2' name='submit' type='button'>Sign In</FormButton>
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
