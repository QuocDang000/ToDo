import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { updateTask } from './until';
import TransitionAlertsSuccess from '../Alert/AlertSuccess';

export default function ControlledCheckbox({id , status}: any) {
  // const { id , status } = props
  const [checked, setChecked] = React.useState(false);  
  const [success, setSuccess] = React.useState(false)
  // const [status, setStatus] = React.useState(status)
  console.log("status1", status);
  

  const handleClick = async () => {
    if(status === false){
      status = true
    }
    
    try {
      const response = await updateTask(id, status);
      // setStatus(true)
      setSuccess(true)
    
      console.log("response file index", response);
      // console.log('id' ,id);
      // console.log('stt', status)
      
    } catch (error) {
      console.log('error', error);
    }

    setChecked(true)
  };

  return (
    <div>
   <Checkbox
      checked={status || checked}
      onClick={handleClick}
      // onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />

    {success && <p>Success</p>}
    </div>
 
  );
}
