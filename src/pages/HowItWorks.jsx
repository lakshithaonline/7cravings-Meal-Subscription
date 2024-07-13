import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const steps = [
    'Account Creation',
    'Personalization Quiz',
    'Meal Category Selection',
    'Detailed Meal Selection',
    'Subscription Plan',
    'Checkout Process',
    'Order Summary',
    'Confirmation'
];

const StyledBox = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
});

const ContentBox = styled(Box)({
    width: '100%',
    padding: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4', // Light gray background for content box
});

const CustomStepper = styled(Stepper)(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: '1rem 0',
    '& .MuiStepIcon-root': {
        color: '#8c8c8c', // Default color for step icons
    },
    '& .MuiStepIcon-active': {
        color: '#35A575 !important', // Color for active step icon
    },
    '& .MuiStepIcon-completed': {
        color: '#35A575 !important', // Color for completed step icon
    },
    '& .MuiStepLabel-label.MuiStepLabel-completed': {
        color: '#35A575 !important', // Color for completed step label text
    },
}));

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [quizData, setQuizData] = React.useState({
        mealGoal: '',
        dietaryRestrictions: '',
        mealsPerDay: '',
        preferredMealTimes: '',
        preferredDeliveryDay: '',
    });

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
        setQuizData({
            age: '',
            career: '',
            dietaryRestrictions: '',
            mealGoals: '',
        });
        setSkipped(new Set());
    };

    const handleQuizChange = (field) => (event) => {
        setQuizData({...quizData, [field]: event.target.value});
    };

    const handleCompleteQuiz = () => {
        // Here you can add any validation or data handling if needed
        handleNext();
    };

    return (
        <Helmet title="User Onboarding">
            <CommonSection title="User Onboarding"/>
            <Box sx={{ height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} md={8}>
                        <CustomStepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </CustomStepper>
                        <ContentBox>
                            {(() => {
                                switch (activeStep) {
                                    case 0:
                                        return (
                                            <>
                                                <Typography variant="h5" gutterBottom>Create Your Account</Typography>
                                                <Typography variant="body1">
                                                    Create your account by filling in your details below. You can also sign up using your Google or Facebook account for a quicker process.
                                                </Typography>
                                            </>
                                        );
                                    case 1:
                                        return (
                                            <>
                                                <Typography variant="h5" gutterBottom>Personalization Quiz</Typography>
                                                <Typography variant="body1">
                                                    We'd like to know a bit more about your preferences to tailor your meal plans. Please answer these 5 quick questions:
                                                </Typography>
                                                <TextField
                                                    label="What is your age?"
                                                    value={quizData.age}
                                                    onChange={handleQuizChange('age')}
                                                    fullWidth
                                                    margin="normal"
                                                />
                                                <TextField
                                                    label="What is your current career or occupation?"
                                                    value={quizData.career}
                                                    onChange={handleQuizChange('career')}
                                                    fullWidth
                                                    margin="normal"
                                                />
                                                <TextField
                                                    label="Do you have any dietary restrictions or preferences?"
                                                    value={quizData.dietaryRestrictions}
                                                    onChange={handleQuizChange('dietaryRestrictions')}
                                                    fullWidth
                                                    margin="normal"
                                                />
                                                <TextField
                                                    label="What are your meal goals or objectives?"
                                                    value={quizData.mealGoals}
                                                    onChange={handleQuizChange('mealGoals')}
                                                    fullWidth
                                                    margin="normal"
                                                />
                                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                                                    <Button variant="contained" onClick={handleCompleteQuiz} style={{ backgroundColor: '#35A575', color: '#ffffff' }}>
                                                        Complete
                                                    </Button>
                                                </Box>
                                            </>
                                        );
                                    case 2:
                                        return (
                                            <>
                                                <Typography variant="h5" gutterBottom>Meal Category Selection</Typography>
                                                <Typography variant="body1">
                                                    Choose your preferred meal category to start selecting your meals.
                                                </Typography>
                                            </>
                                        );
                                    case 3:
                                        return (
                                            <>
                                                <Typography variant="h5" gutterBottom>Detailed Meal Selection</Typography>
                                                <Typography variant="body1">
                                                    Select the meals you'd like to include in your plan. You can adjust quantities and customize as needed.
                                                </Typography>
                                            </>
                                        );
                                    case 4:
                                        return (
                                            <>
                                                <Typography variant="h5" gutterBottom>Subscription Plan</Typography>
                                                <Typography variant="body1">
                                                    Choose your subscription plan that best fits your needs and budget.
                                                </Typography>
                                            </>
                                        );
                                    case 5:
                                        return (
                                            <>
                                                <Typography variant="h5" gutterBottom>Checkout Process</Typography>
                                                <Typography variant="body1">
                                                    Proceed through the checkout process to finalize your subscription.
                                                </Typography>
                                            </>
                                        );
                                    case 6:
                                        return (
                                            <>
                                                <Typography variant="h5" gutterBottom>Order Summary</Typography>
                                                <Typography variant="body1">
                                                    Review your order details before confirming your subscription.
                                                </Typography>
                                            </>
                                        );
                                    case 7:
                                        return (
                                            <>
                                                <Typography variant="h5" gutterBottom>Confirmation</Typography>
                                                <Typography variant="body1">
                                                    Congratulations! Your subscription is confirmed. You'll receive a confirmation email shortly.
                                                </Typography>
                                            </>
                                        );
                                    default:
                                        return null; // No default case needed as we handle all steps above
                                }
                            })()}
                        </ContentBox>
                        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2, pb: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1, backgroundColor: '#35A575', color: '#ffffff' }}
                            >
                                Back
                            </Button>
                            <Button variant="contained" onClick={activeStep === steps.length - 1 ? handleReset : handleNext} style={{ backgroundColor: '#35A575', color: '#ffffff' }}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Helmet>
    );
}
