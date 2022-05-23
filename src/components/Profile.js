import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { margin } from '@mui/system';
import { left } from '@popperjs/core';

function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: (theme) =>
          theme.palette.mode === 'light',
          border: 'ActiveCaption',
           

      }}
    />
  );
}

export default function Profile() {
  return (

   <div>


       <span >
           <h3  className="px-4">
           Profile
           </h3>
       </span>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >

<span className="border border-4 px-4">
<div className=" mx-auto ">
      <RedBar />
      
      <TextField label={'FirstName'} className="mx-auto w-100" />
      <RedBar />
      <TextField label={'LastName'} className="mx-auto w-100" />
      <RedBar />
      <TextField label={'Image'} className="mx-auto w-100"/>
      <RedBar />
      </div>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" class="btn btn-outline-secondary">Save</button>

      </div>
      </span>
       
      
      
    </Box>
    </div>
  );
}
