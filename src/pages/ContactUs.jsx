import React, {useState} from 'react';
import { Box, Button, Card, CardContent, CardMedia, Grid, Paper, TextField, Typography } from '@mui/material';
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container } from "@mui/material";
import Helmet from "../components/Helmet/Helmet";
import { collection, addDoc } from 'firebase/firestore';
import { auth, firestore } from '../services/firebaseConfig';

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            message,
            timestamp: new Date()
        };

        try {
            const docRef = await addDoc(collection(firestore, 'contacts'), formData); // Use firestore here
            console.log('Document written with ID: ', docRef.id);

            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <Helmet title="Subscription Meal Kits">
            <CommonSection title="Contact US" />
            <Container maxWidth="xl" disableGutters style={{ padding: 0 }}>
                <Box sx={{ margin: '50px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', backdropFilter: 'blur(10px)' }}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Paper elevation={0} sx={{ padding: '20px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ccc' }}>
                                <Typography variant="h5" gutterBottom>
                                    Reach Out to Us
                                </Typography>
                                <form className="contact-us-form" onSubmit={handleSubmit}>
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        label="Message"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        multiline
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        sx={{ backgroundColor: '#35A575', color: '#fff', mt: '20px', '&:hover': { backgroundColor: '#1d724e' } }}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper elevation={0} sx={{ padding: '20px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ccc' }}>
                                <Typography variant="h5" gutterBottom>
                                    Helpdesk Information
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image="https://www.uvdesk.com/wp-content/uploads/2023/11/taptasty-case-study-image.png"
                                    alt="Helpdesk"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '10px', gap: '10px', fontSize: '1.2em', border: '1px solid #ccc' }}>
                                    <Typography variant="body1">
                                        <i className="fas fa-phone"></i> Hotline: +94 770000000
                                    </Typography>
                                    <Typography variant="body1">
                                        <i className="fas fa-envelope"></i> Email: support@7cravings.com
                                    </Typography>
                                    <Typography variant="body1">
                                        <i className="fas fa-clock"></i> Working Hours: Mon - Sun, 9 AM - 7 PM
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={0} sx={{ padding: '20px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #ccc' }}>
                                <Typography variant="h5" gutterBottom>
                                    Customer Support
                                </Typography>
                                <Box sx={{ marginTop: '20px' }}>
                                    <Typography variant="body1">
                                        Our dedicated helpdesk team is here to assist you with any questions or issues
                                        you may have. Whether you need information about our services, technical
                                        support, or wish to provide feedback, reach out to us through our contact form
                                        or hotline.
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginTop: '10px' }}>
                                        We're committed to delivering an exceptional experience. Our support team is
                                        available during business hours to ensure you receive prompt and effective
                                        assistance.
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ marginTop: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
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
                                        Choose from a variety of subscription plans that suit your needs. Enjoy fresh
                                        and delicious meals delivered to your doorstep.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ marginTop: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
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
                                        Our menu includes a variety of healthy options to help you maintain a balanced
                                        diet. Enjoy meals that are both nutritious and delicious.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ marginTop: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
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
                                        Get your meals delivered quickly and efficiently. Our delivery service ensures
                                        that your food arrives fresh and on time.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ marginTop: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
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
                                        Experience the taste of gourmet meals prepared by top chefs. Each meal is
                                        crafted with the finest ingredients for an unforgettable dining experience.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ marginTop: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
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
                                        Our priority is your satisfaction. We strive to provide excellent service and
                                        high-quality meals to ensure you have the best experience.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ marginTop: '20px', borderRadius: '8px', border: '1px solid #ccc' }}>
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
                                        We offer a wide variety of meals to choose from. Whether you're in the mood for
                                        something light or a hearty meal, we've got you covered.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Helmet>
    );
};

export default ContactUs;
