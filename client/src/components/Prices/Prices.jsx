import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import PriceOnePer from './PriceOnePer';
import axios from 'axios';
import NoilPrice from '../NoilPrice/NoilPrice';
import { useSelector } from 'react-redux';

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function Prices({hotelId}) {
  const peroidIds=useSelector((state=>state.periods.peroidIds))
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [prices,setPrices]=useState('')
  const [reload,serReload]=useState(false)
  const [periodId,setPeriodID]=useState(peroidIds[0])
  const { NPeriode } = useParams();
  const generateSteps=()=>{
    const result=[]
    for (let i = 1; i <= NPeriode; i++) {
        result.push('Periode '+i)
    }
    return result
}

const steps=generateSteps()
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

//   const createPrice=()=>{
//     for(let type in prices){
    
//    console.log(  {
//     type:type,
//     price:prices[type],
//     periodId:periodId
// })
    
//   }}
  const createPrice=()=>{
    for(let type in prices){
      axios.post(`http://127.0.0.1:5000/app/price/createPrice/${hotelId}`,{
        type:type,
        price:prices[type],
        periodId:periodId
    })
    .then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })
    }
    
  }
  const handleComplete = () => {
    createPrice()
      serReload(!reload)
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    setPeriodID(periodId+1)
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
        {/** this is the steps bar  */}
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {/***************************************************************************** */}
      <div>

        {allStepsCompleted() ? ( /*this is the condition of finish all the steps*/
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography> */}
            <NoilPrice hotelId={hotelId}/>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (/**this is the consfetion of the steps no finished  */
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box>
                <PriceOnePer setPrices={setPrices} reload={reload}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

