import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SignupElements'
import authService from '../../features/auth/authService';
// import {setUsernameReg, setPasswordReg, register} from './src/App2';

const SignUp = () => {
  // let history = useNavigate();
  const [data, setData]=useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setData({ ...data, [e.target.name]: e.target.value}) 
  }

  const submitForm=(e) => {
    e.preventDefault();
    authService.register(data)
  }

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">Genesis Farm</Icon>
            <FormContent>
                <Form>
                    <FormH1>Sign Up</FormH1>
                    <FormLabel htmlFor='for'>Username</FormLabel>
                    <FormInput type='text' name='name' onChange={handleChange}  required  />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' name='email' onChange={handleChange}  required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' name='password' onChange={handleChange}  required />
                    {/* <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type='password' name='confirm_password' onChange={handleChange} value={data.confirm_password} required /> */}
                    <FormButton type='submit' value='submit' name='submit' onClick={submitForm}>Sign Up</FormButton>
                    
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default SignUp