import { TextField } from '@mui/material';
import axios from 'axios'
import { useState } from 'react';

 

//     const onUsernameChanged=(event)=>{
//         setUserName(event.target.value)

//     }

//     const onpasswordChanged=(event)=>{
//         setpassword(event .target.value)

        
// //     }





export default function Login( ) {


    const [userName,setUserName]=useState('')
 const [password,setpassword]=useState('')
  const login = async() => {

    const api_url = `https://fci-back-end.herokuapp.com/login`;

    try {
        const response = await axios.post( api_url,{userName,password
        })
        const {data}=response
            console.log(data)
        
     } catch (error) {
       console.log(error)  
   }
        };
        const onUsernameChanged=(event)=>{

            setUserName(event.target.value)
            
        }
        const onpasswordChanged=(event)=>{
            setpassword(event.target.value)
            
        }

return( 

    <div>


        
{/* <input />  */}

{/* <input onChange={onpasswordChanged }/> */}
<span className=" px-4">
          <div className=" mx-auto ">
          <TextField label={'FirstName'} className="mx-auto w-100" onChange={onUsernameChanged }/>
<TextField label={'Password'} className="mx-auto w-100" onChange={onpasswordChanged }/>
 

<div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" class="btn btn-outline-secondary" onClick={login}> Login</button>

          </div>
            </div>
</span>

    </div>
 
)
}