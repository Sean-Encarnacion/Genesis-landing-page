import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SignupElements'
// import {setUsernameReg, setPasswordReg, register} from './src/App2';

const SignUp = () => {
  // let history = useNavigate();
  // const [data, setData]=useState({
  //   username:"",
  //   email:"",
  //   password:"",
  //   confirm_password:""
  // })

  // const handleChange=(e)=>{
  //   setData({ ...data, [e.target.name]: e.target.value}) 
  // }

  // const submitForm=(e) => {
  //   e.preventDefault();
  //   const sendData = {
  //     username:data.username,
  //     email:data.email,
  //     password:data.password,
  //     confirm_password:data.confirm_password
  //   }

  //   console.log(sendData);
    
  //   axios.post('',sendData)
  //   .then((result) => {
  //     if(result.data.Status == 'Invalid'){
  //       alert('Invalid User');
  //     }
  //     else{
  //       history('/signin');
  //     }
  //   })
  // }

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">Genesis Farm</Icon>
            <FormContent>
                <Form>
                    <FormH1>Sign Up</FormH1>
                    <FormLabel htmlFor='for'>Username</FormLabel>
                    <FormInput type='text' name='username'   required  />
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' name='email'  required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' name='password'  required />
                    {/* <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                    <FormInput type='password' name='confirm_password' onChange={handleChange} value={data.confirm_password} required /> */}
                    <FormButton type='submit' value='submit' name='submit'>Sign Up</FormButton>
                    
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};

export default SignUp