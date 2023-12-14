import React,{useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function Step2({handleSteps, steps}) {
    const [track, setTrack] = useState('');

    const handleChange = (event) => {
      // const nextTrack = event.target.value
      setTrack(event.target.value);
    };

    const handleConfirm = (handleSteps, steps)=>{
        handleSteps({...steps, step:3, track: track})
    }
  return (
    <>
    <Box
    sx={{
      margin:"20px"
    }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"
          sx={{
            color:'secondary.main'
          }}
        >Truck</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={track}
          label="Truck"
          onChange={handleChange}
          sx={{
            bgcolor: "primary.contrastText",
            margin: "10px"
          }}
        >
          <MenuItem value={'JFK'}>JFK</MenuItem>
          <MenuItem value={'LHR'}>LHR</MenuItem>
          <MenuItem value={'CDG'}>CDG</MenuItem>
          <MenuItem value={'SFO '}>SFO </MenuItem>
          <MenuItem value={'SYD'}>NRT</MenuItem>
          <MenuItem value={'HKG '}>HKG </MenuItem>
        </Select>
      </FormControl>
      <Button color="secondary" variant="contained" onClick={()=>{handleConfirm(handleSteps, steps)}} 
      sx={{
        margin:'10px'
      }}
      >Confirm</Button>
    </Box>
    </>
  )
}

export default Step2