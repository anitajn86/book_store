import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SignUp.css'
import ImageAvatars from '../Avatar/Avatar';


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
        <div className='intro'>
          If you would wish to join our community of readers, please fill in this form.
        </div>
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
        </div>
      </Box>
      <Box>
        <div className='About'>
          YOU ARE NOW A MEMBER AND HERE ARE SOME THINGS THAT YOU MIGHT LIKE
          <div>
            <ImageAvatars />
          </div>
        </div>
      </Box>
    </div>
  );
}
export default SignUp
