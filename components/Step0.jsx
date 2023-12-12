import Button from '@mui/material/Button';
import React from 'react'

function Step0({handleSteps, steps}) {
    const handleConfirm = (handleSteps, steps)=>{
        console.log(steps)
        handleSteps({...steps, step:1})
    }
  return (
    <div>
        <h1>click the button to start</h1>
        <Button variant="contained" onClick={()=>{handleConfirm(handleSteps, steps)}} >start</Button>
    </div>
  )
}

export default Step0