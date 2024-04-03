import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Login.css'




const Login=()=> {
  return (
    <div className='login-form'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='text-input'>
          <div className='the-text1'>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          </div>
          <div className='the-text2'>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          </div>
          <div className='the-text3'>
          <TextField id="outlined-basic" label="Contact" variant="outlined" />
          </div>
          <div>
            YOU ARE LOGGING INTO YOUR PAGE
          </div>
         
        </div>
        
        
        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        
      </Box>
    </div>
  );
}
export default Login

