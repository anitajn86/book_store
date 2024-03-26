import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function BasicTextFields({ buttonName }) {
  const [textFieldValue, setTextFieldValue] = React.useState('');

  const handleTextChange = (event) => {
    setTextFieldValue(event.target.event);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleTextChange}
        value={textFieldValue}
      />
      <TextField id="filled-basic" label="Name" variant="filled" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <div>
        <input type="Submit" className="button-primary" value={buttonName} />
      </div>
    </Box>
  );
}