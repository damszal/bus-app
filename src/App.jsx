import './App.css'
import React,{useState} from 'react';
import Step0 from '../components/Step0';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

function App() {

let viewStep = 0;
const [steps, setSteps] = useState({
  step:0,
  driver: "",
  track:"",
  seats: 0
})

const handleSteps = (obj)=>{
  console.log('main component', obj)
  setSteps({...steps,...obj})
}

if(steps.step === 0){
  viewStep = <Step0 handleSteps={handleSteps} steps={steps}/>
} else if (steps.step === 1)
{
  viewStep = <Step1 handleSteps={handleSteps} steps={steps}/>
} else if (steps.step === 2){
  viewStep = <Step2 handleSteps={handleSteps} steps={steps}/>
}else if (steps.step === 3){
  viewStep = <Step3 handleSteps={handleSteps} steps={steps}/>
}

else {
  viewStep = <div>
    <h2>end of process</h2>
    <p>driver: {steps.driver}</p>
    <p>track: {steps.track}</p>
    <p>seats: {steps.seats}</p>
  </div>
}

  return (
   <>   
   {viewStep}
   </>
  )
}

export default App
