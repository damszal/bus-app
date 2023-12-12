import React from 'react'
import { useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import {Box} from '@mui/system';

function Step3({handleSteps, steps}) {
    const [staffQty, setStaffQty] = useState(0)
    const [freeSeats, setFreeSeats] = useState(true)
    const totalSeats = 10
  
    const noFreeSeats = (val)=>(
      !val?<p> there is no free seats</p>:<p>still free seats</p>
    )
  
    const handleClick = (qty,freeSeats)=> {
      if(qty<freeSeats){
        const nextStaffQty = staffQty + 1;
        setStaffQty(nextStaffQty);
        console.log(nextStaffQty);
      } else if (qty == freeSeats){
        setFreeSeats(false)
        console.log("no free seats")
      }
    }

    const handleConfirm = (handleSteps, steps)=>{
      console.log(steps)
      handleSteps({...steps, step:4, seats: staffQty})
    }
  return (
    <>
    <CssBaseline />
    <Box>
      <h2> {staffQty} workers in the bus</h2>
      <Button 
      variant="contained" 
      size="medium"
      onClick={()=>{handleClick(staffQty,totalSeats)}}
      >scan</Button>
      {noFreeSeats(freeSeats)}
      <Button
      variant="contained"
      onClick={()=>{handleConfirm(handleSteps, steps)}}
      >FINISH DRIVE
      </Button>
    </Box>
  </>
  )
}

export default Step3