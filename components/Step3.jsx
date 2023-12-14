import React, { useEffect } from 'react'
import { useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import {Box} from '@mui/system';
import {Html5QrcodeScanner} from "html5-qrcode";

function Step3({handleSteps, steps}) {
    const [staffQty, setStaffQty] = useState(0)
    const [freeSeats, setFreeSeats] = useState(true)
    const [scanResult, setScanResult] = useState([])
    const totalSeats = 10
  
    const noFreeSeats = (val)=>(
      !val?<p> there is no free seats</p>:<p>still free seats</p>
    )
  
    const handleShot = (qty,freeSeats, nextScan)=> {
      if(qty<freeSeats){
        const nextStaffQty = staffQty + 1;
        setStaffQty(nextStaffQty);
        console.log(nextStaffQty);
        console.log('scan results', nextScan);
      } else if (qty == freeSeats){
        setFreeSeats(false)
        console.log("no free seats")
      }
    }

    const handleConfirm = (handleSteps, steps)=>{
      console.log(steps)
      handleSteps({...steps, step:4, seats: staffQty})
    }
    
    useEffect(()=>{
      const scanner = new Html5QrcodeScanner('reader', {
        qrbox:{
          width: 400,
          height: 400,
        },
        fps: 5
      },[])
  
   
      function success(res) {
        scanner.clear();
        const nextScan = [...scanResult,res]
        setScanResult(nextScan)
        handleShot(staffQty,totalSeats, nextScan)
      }
  
      function error(err){
        console.log(err)
      }
  
      scanner.render(success,error)

    })

  return (
    <>
    <CssBaseline />
    <Box
    sx={{
      margin:"20px"
    }}
    >
      <div id='reader' ></div>
      <h2> {staffQty} workers in the bus</h2>
      {scanResult.map((e,i)=>{
        return (
          <p key={i} >{e}</p>
        )
      })}
      {/* <Button 
      color="secondary"
      variant="contained" 
      size="medium"
      onClick={()=>{handleClick(staffQty,totalSeats)}}
      >scan</Button> */}
      {noFreeSeats(freeSeats)}
      <Button
      color="secondary"
      variant="contained"
      onClick={()=>{handleConfirm(handleSteps, steps)}}
      >FINISH DRIVE
      </Button>
    </Box>
  </>
  )
}

export default Step3