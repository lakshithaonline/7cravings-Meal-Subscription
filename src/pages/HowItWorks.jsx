import React, { useState } from 'react';
import {
    Stepper, Step, StepLabel, StepContent, Button, Paper,
    Typography, Container, Box, Card, CardContent, CardMedia, Tooltip
} from '@mui/material';
import { styled } from '@mui/system';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/how-it-works.css';

const steps = [
    {
        label: "Create an Account",
        icon: <i className="fas fa-user-plus" style={{ fontSize: "30px" }}></i>,
        description: "Sign up to get started with your meal planning journey.",
        image: "https://via.placeholder.com/150/step1.png",
        tooltip: "Sign up easily with your email or social media accounts.",
    },
    {
        label: "Set Your Goals",
        icon: <i className="fas fa-utensils" style={{ fontSize: "30px" }}></i>,
        description: "Define your food preferences and dietary goals.",
        image: "https://via.placeholder.com/150/step2.png",
        tooltip: "Choose from various dietary options to fit your lifestyle.",
    },
    {
        label: "Pick Your Meals",
        icon: <i className="fas fa-list-alt" style={{ fontSize: "30px" }}></i>,
        description: "Select your meals for the week from our diverse menu.",
        image: "https://via.placeholder.com/150/step3.png",
        tooltip: "Explore a wide range of meal options tailored to your taste.",
    },
    {
        label: "Checkout",
        icon: <i className="fas fa-shopping-cart" style={{ fontSize: "30px" }}></i>,
        description: "Review your selections and proceed to checkout.",
        image: "https://via.placeholder.com/150/step4.png",
        tooltip: "Ensure all your selections are correct before finalizing.",
    },
    {
        label: "Enjoy Your Meals",
        icon: <i className="fas fa-concierge-bell" style={{ fontSize: "30px" }}></i>,
        description: "Receive and enjoy your delicious, healthy meals.",
        image: "https://via.placeholder.com/150/step5.png",
        tooltip: "Relax and savor your meals delivered right to your door.",
    },
];

const CustomCard = styled(Card)({
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
});

const CardDetails = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
});

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
        <section className="how_to_sec"
                 style={{
                     backgroundImage: 'url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     padding: '40px 0'
                 }}>
            <Container>
                <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "20px", padding: "30px" }}>
                    <header className="how-it-works-header">
                        <Typography variant="h3" align="center" gutterBottom>How It Works?</Typography>
                    </header>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepLabel
                                    optional={
                                        <Tooltip title={step.tooltip} arrow>
                                            <Typography variant="caption">{step.label}</Typography>
                                        </Tooltip>
                                    }
                                    icon={step.icon}
                                >
                                    <Typography variant="h6" style={{ color: "#2E8C66" }}>{step.label}</Typography>
                                </StepLabel>
                                <StepContent>
                                    <CustomCard>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 150 }}
                                            image={step.image}
                                            alt={step.label}
                                        />
                                        <CardDetails>
                                            <CardContent>
                                                <Typography variant="body1">{step.description}</Typography>
                                            </CardContent>
                                        </CardDetails>
                                    </CustomCard>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                variant="contained"
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography variant="h6" align="center">All steps completed - you're finished!</Typography>
                            <Box display="flex" justifyContent="center">
                                <Button onClick={handleReset} variant="contained" color="primary" sx={{ mt: 1 }}>
                                    Let's Go
                                </Button>
                            </Box>
                        </Paper>
                    )}
                </Box>
            </Container>
        </section>
    );
};

export default HowItWorks;
