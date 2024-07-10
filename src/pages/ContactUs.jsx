import React from 'react';
import { Grid, TextField, Button, Typography, Paper, Box } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/contact-us.css';

/**
 * ContactUs component
 *
 * This functional component displays a Contact Us page with three sections:
 * 1. Contact Us Form
 * 2. Helpdesk Information
 * 3. Sample Context
 *
 * @returns {JSX.Element} A JSX element containing the Contact Us page.
 */
const ContactUs = () => {
    return (
        <div>context us</div>
        // <div className="contact-us-container">
        //     <header className="contact-us-header">
        //         <h1>Contact Us</h1>
        //     </header>
        //     <Grid container spacing={3}>
        //         {/* Contact Us Form */}
        //         <Grid item xs={12} md={6}>
        //             <Paper elevation={3} className="contact-us-section">
        //                 <Typography variant="h5" gutterBottom>
        //                     Contact Us Form
        //                 </Typography>
        //                 <form className="contact-us-form">
        //                     <TextField
        //                         label="Name"
        //                         variant="outlined"
        //                         fullWidth
        //                         margin="normal"
        //                     />
        //                     <TextField
        //                         label="Email"
        //                         variant="outlined"
        //                         fullWidth
        //                         margin="normal"
        //                     />
        //                     <TextField
        //                         label="Message"
        //                         variant="outlined"
        //                         fullWidth
        //                         margin="normal"
        //                         multiline
        //                         rows={4}
        //                     />
        //                     <Button
        //                         variant="contained"
        //                         color="primary"
        //                         type="submit"
        //                         className="contact-us-button"
        //                     >
        //                         Submit
        //                     </Button>
        //                 </form>
        //             </Paper>
        //         </Grid>
        //
        //         {/* Helpdesk Information */}
        //         <Grid item xs={12} md={6}>
        //             <Paper elevation={3} className="contact-us-section">
        //                 <Typography variant="h5" gutterBottom>
        //                     Helpdesk Information
        //                 </Typography>
        //                 <Box className="helpdesk-info">
        //                     <Typography variant="body1">
        //                         <i className="fas fa-phone"></i> Hotline: +123-456-7890
        //                     </Typography>
        //                     <Typography variant="body1">
        //                         <i className="fas fa-envelope"></i> Email: support@example.com
        //                     </Typography>
        //                     <Typography variant="body1">
        //                         <i className="fas fa-clock"></i> Working Hours: Mon - Fri, 9 AM - 5 PM
        //                     </Typography>
        //                 </Box>
        //             </Paper>
        //         </Grid>
        //
        //         {/* Sample Context */}
        //         <Grid item xs={12}>
        //             <Paper elevation={3} className="contact-us-section">
        //                 <Typography variant="h5" gutterBottom>
        //                     Sample Context
        //                 </Typography>
        //                 <Box className="sample-context">
        //                     <Typography variant="body1">
        //                         Our helpdesk team is always ready to assist you with any inquiries you may have. Whether you have questions about our services, need technical support, or just want to provide feedback, feel free to reach out to us through the provided contact form or hotline.
        //                     </Typography>
        //                     <Typography variant="body1" style={{ marginTop: '10px' }}>
        //                         We are committed to ensuring that you have the best experience with our service. Our support team is available during our working hours to provide you with timely and effective assistance.
        //                     </Typography>
        //                 </Box>
        //             </Paper>
        //         </Grid>
        //     </Grid>
        // </div>
    );
};

export default ContactUs;
