import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, Button , Container , Box, Typography, Checkbox} from "@mui/material";
import { Person, Lock } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from './../navbar/index';
import {  useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [userInfo , setUserInfo] = useState([])
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().min(5).required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      setIsSubmitSuccess(true)
      //setUserInfo(values)
    },
   
  });
  
  const displayMovies = ()=> {
    navigate("/movies")

  }

  return (
    <Container >
      <div className={!isSubmitSuccess ? "signin signin_wrapper" : "signin signin_success"} style={{margin:"100px"}}>
        {isSubmitSuccess ? (
          <Navbar />
        ) : (
          
          <form style={{display : 'flex' , justifyContent :'center'}} onSubmit={formik.handleSubmit}>
            <Box sx={{backgroundColor : 'rgba(200,0,0,0.75)' ,  display : 'flex' , flexDirection : 'column' , justifyContent : "space-around" , height : "70vh" , width : '50vh' , alignItems : "center" , marginLeft :'20vh'}}>
            <Typography sx={{color : 'white' , fontFamily :"bold" , fontSize : '30px' , ml :'35px' , mt:'55px'}}>S'identifier</Typography>
            <TextField 
            sx={{backgroundColor : 'gainsboro' }}
            value ={userInfo}
            name="email"
            type="text"
            placeholder="Email"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Person />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}


            />

            {formik.touched.email && formik.errors.email ? (
              <div style={{color : 'white'}} className="error_msg">{formik.errors.email}</div>
              ) : null}

            <TextField
            variant="filled"
            sx={{ backgroundColor : 'gainsboro'  , margin :'15px' , mt : '55px'}}
              name="password"
              type="password"
              placeholder="Password"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Lock />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              />
            {formik.touched.password && formik.errors.password ? (
              <div style={{color : 'white'}} className="error_msg">{formik.errors.password}</div>
              ) : null}

            <Button onClick={displayMovies} sx={{backgroundColor : 'red' ,   height :'40px' , width :'40px' }} variant='contained'>Login</Button>
            <Typography sx={{color : 'white'}}> Not a member? <span className="signup">Signup now</span></Typography>
           <Typography sx={{color : 'white'}}> 
             <Checkbox sx={{color : 'white'}} /> se sopuvenir de moi
            </Typography>

              </Box>
          </form>
        )}
      </div>
    </Container>
  );
};

export default SignIn;