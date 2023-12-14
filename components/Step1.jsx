import React,{useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



function Step1({handleSteps, steps}) {
    const [name, setName] = useState('');

    const handleChange = (event) => {
    //   const nextName = event.target.value
      setName(event.target.value);
    };

    const handleConfirm = (handleSteps, steps)=>{
        handleSteps({...steps, step:2, driver: name})
    }
  
  return (
    <>
    <Box sx={{
      margin:"20px"
    }}>
      <FormControl fullWidth
      >
        <InputLabel id="demo-simple-select-label"
        sx={{
          color:'secondary.main'
        }}
        >Driver</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          label="Driver"
          onChange={handleChange}
          sx={{
            bgcolor: "primary.contrastText",
            margin: "10px"
          }}
        >
          <MenuItem value={'Wesley Snipes'}>Wesley Snipes</MenuItem>
          <MenuItem value={'Stephen Dorff'}>Stephen Dorff</MenuItem>
          <MenuItem value={'Kris Kristofferson'}>Kris Kristofferson</MenuItem>
          <MenuItem value={'Bushe Wright'}>N'Bushe Wright</MenuItem>
          <MenuItem value={'Donal Logue'}>Donal Logue</MenuItem>
          <MenuItem value={'Udo Kier'}>Udo Kier</MenuItem>
        </Select>
      </FormControl>
      <Button color="secondary" variant="contained" onClick={()=>{handleConfirm(handleSteps, steps)}} >Confirm</Button>
    </Box>
    </>
  )
}

export default Step1