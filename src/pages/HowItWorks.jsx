import React, { useState } from 'react';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/how-it-works.css';

// Array containing the steps and their descriptions
const steps = [
    {
        label: <h3 style={{color:"#2E8C66"}}>   Step 1</h3>,
        icon: <i className="fas fa-user-plus" style={{fontSize:"30px"}}></i>,
        description: <h5>Create an Account.</h5>,
    },
    {
        label: <h3 style={{color:"#2E8C66"}}>   Step 2</h3>,
        icon: <i className="fas fa-utensils" style={{fontSize:"30px"}}></i>,
        description: <h5>Get a closer look into your food goals and select you category.</h5>,
    },
    {
        label: <h3 style={{color:"#2E8C66"}}>   Step 3</h3>,
        icon: <i className="fas fa-list-alt" style={{fontSize:"30px"}}></i>,
        description: <h5>Pick your meals for the week from our diverse menu for you each meal.</h5>,
    },
    {
        label: <h3 style={{color:"#2E8C66"}}>   Step 4</h3>,
        icon: <i className="fas fa-shopping-cart" style={{fontSize:"30px"}}></i>,
        description: <h5>Check if you miss something. No? proceed to checkout.
            .</h5>,
    },
    {
        label: <h3 style={{color:"#2E8C66"}}>   Step 5</h3>,
        icon: <i className="fas fa-concierge-bell" style={{fontSize:"30px"}}></i>,
        description: <h5>Enjoy!
            </h5>,
    },
];

const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <section className="how_to_sec " style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

        }}>>
        <div className="how-it-works-container" style={{background:"rgba(255, 255, 255, 0.8)", borderRadius:"20px"}} >
            <header className="how-it-works-header">
                <h1 style={{fontFamily:"Poppins"}}>How It Works?</h1>
            </header>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel icon={step.icon}>{step.label}</StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>
                            <div className="stepper-actions">
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    variant="contained"
                                    color="primary"
                                    className="stepper-button"
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className="stepper-button"
                                >
                                    {index === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className="stepper-completion">
                    <Typography>All steps completed - you're finished</Typography>
                    <Button onClick={handleReset} variant="contained" color="primary" className="stepper-button">
                        Let's Go
                    </Button>
                </Paper>
            )}
        </div>
        </section>
    );
};

export default HowItWorks;
