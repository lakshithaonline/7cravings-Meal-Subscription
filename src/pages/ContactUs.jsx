import React from 'react';
import { Grid, TextField, Button, Typography, Paper, Box, Card, CardContent, CardMedia } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/contact-us.css';
import CommonSection from "../components/UI/common-section/CommonSection";
import {Container} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} className="contact-us-section">
                        <Typography variant="h5" gutterBottom>
                            Contact Us Form
                        </Typography>
                        <form className="contact-us-form">
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="contact-us-button"
                            >
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} className="contact-us-section">
                        <Typography variant="h5" gutterBottom>
                            Helpdesk Information
                        </Typography>
                        <CardMedia
                            component="img"
                            height="260"
                            image="https://www.uvdesk.com/wp-content/uploads/2023/11/taptasty-case-study-image.png"
                            alt="Helpdesk"
                        />

                        <Box className="helpdesk-info">
                            <Typography variant="body1">
                                <i className="fas fa-phone"></i> Hotline: +123-456-7890
                            </Typography>
                            <Typography variant="body1">
                                <i className="fas fa-envelope"></i> Email: support@example.com
                            </Typography>
                            <Typography variant="body1">
                                <i className="fas fa-clock"></i> Working Hours: Mon - Fri, 9 AM - 5 PM
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className="contact-us-section">
                        <Typography variant="h5" gutterBottom>
                            Customer Support
                        </Typography>
                        <Box className="sample-context">
                            <Typography variant="body1">
                                Our dedicated helpdesk team is here to assist you with any questions or issues you may have. Whether you need information about our services, technical support, or wish to provide feedback, reach out to us through our contact form or hotline.
                            </Typography>
                            <Typography variant="body1" style={{ marginTop: '10px' }}>
                                We're committed to delivering an exceptional experience. Our support team is available during business hours to ensure you receive prompt and effective assistance.
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="description-card">
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://cdn.wedevs.com/uploads/2021/06/How-to-name-your-membership-levels-or-subscription-options-1024x559.png"
                            alt="Subscription Plan"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Subscription Plans
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Choose from a variety of subscription plans that suit your needs. Enjoy fresh and delicious meals delivered to your doorstep.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="description-card">
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/11/oatmeal-bowl-1296x728-header-1296x729.jpg?w=1155&h=2268"
                            alt="Healthy Options"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Healthy Options
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our menu includes a variety of healthy options to help you maintain a balanced diet. Enjoy meals that are both nutritious and delicious.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="description-card">
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://www.shipmercury.com/getmedia/9548634d-3a6d-4747-a0c1-7efca10f043b/fastest-shipping-method-ss-1609947532-1100x733.jpg"
                            alt="Fast Delivery"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Fast Delivery
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Get your meals delivered quickly and efficiently. Our delivery service ensures that your food arrives fresh and on time.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="description-card">
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/61548997f730ab089a23465e-f275fbfb.jpg"
                            alt="Gourmet Meals"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Gourmet Meals
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Experience the taste of gourmet meals prepared by top chefs. Each meal is crafted with the finest ingredients for an unforgettable dining experience.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="description-card">
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://www.ift.org/-/media/digital-exclusives/session85_moralsatisfaction_1208379871_sitecore.jpg"
                            alt="Customer Satisfaction"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Customer Satisfaction
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our priority is your satisfaction. We strive to provide excellent service and high-quality meals to ensure you have the best experience.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className="description-card">
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://cff2.earth.com/uploads/2018/08/09114655/Eating-a-diverse-diet-may-not-be-the-healthiest-study-shows.jpg"
                            alt="Wide Variety"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Wide Variety
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                We offer a wide variety of meals to choose from. Whether you're in the mood for something light or a hearty meal, we've got you covered.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactUs;
