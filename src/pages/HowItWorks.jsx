import React, { useState } from 'react';
import { Stepper, Step, StepLabel, StepContent, Button, Paper, Typography } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/how-it-works.css';

// Array containing the steps and their descriptions
const steps = [
    {
        label: 'Step 1',
        icon: <i className="fas fa-user-plus"></i>,
        description: 'Sign up by providing your email, creating a password, and filling in some basic information about yourself.',
    },
    {
        label: 'Step 2',
        icon: <i className="fas fa-utensils"></i>,
        description: 'Select a meal plan that fits your needs. You can choose from various options like healthy, fitness, and active meal plans.',
    },
    {
        label: 'Step 3',
        icon: <i className="fas fa-list-alt"></i>,
        description: 'Pick your meals for the week from our diverse menu. Filter by categories such as breakfast, lunch, and dinner to find what suits you best.',
    },
    {
        label: 'Step 4',
        icon: <i className="fas fa-shopping-cart"></i>,
        description: 'Review your selected meals, proceed to checkout, and enter your delivery details. Your meals will be delivered fresh to your doorstep.',
    },
    {
        label: 'Step 5',
        icon: <i className="fas fa-concierge-bell"></i>,
        description: 'Heat up your meals as per the instructions provided and enjoy! You can always modify your meal selections for the next week.',
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
        <div className="how-it-works-container" style={{background:"white", borderRadius:"20px"}} >
            <header className="how-it-works-header">
                <h1>How It Works</h1>
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
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
        </section>
    );
};

export default HowItWorks;
