import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SignUp.css'
import backgroundImage from '../../images/bg2.jpg';

const SignUp=()=> {
  return (
    <div className='signup-form'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='text-input'>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        
      </Box>
    </div>
  );
}
export default SignUp
