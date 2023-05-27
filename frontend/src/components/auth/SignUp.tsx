// packages
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { Box, Container, useTheme, Avatar, TextField, Grid, Button, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

// types
type Address = {
    street: string;
    city: string;
    state: string;
    postalCode: string;
}

type InitialValues = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    dob: string,
    address: Address
};

const initialValues: InitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
    }
};

const SignUp = () => {
    const theme = useTheme();

    const onSubmit = (values: InitialValues) => {
        console.log(values);
    }

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: '100px',
                    boxShadow: theme.shadows[2],
                    backgroundColor: theme.palette.grey[800],
                    padding: theme.spacing(5),
                    borderRadius: theme.spacing(2),
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 1, mb: 5 }}>
                    <Avatar sx={{ height: 50, width: 50 }}>
                        <HowToRegIcon />
                    </Avatar>

                    <Typography variant="h5">Create Account</Typography>
                </Box>

                <Box>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item sm={12} md={6}>
                                    <Field
                                        name="firstName"
                                        label="First Name"
                                        as={TextField}
                                        helperText={<ErrorMessage name="firstName" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={6}>
                                    <Field
                                        name="lastName"
                                        label="Last Name"
                                        as={TextField}
                                        helperText={<ErrorMessage name="lastName" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12}>
                                    <Field
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                        as={TextField}
                                        helperText={<ErrorMessage name="email" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12}>
                                    <Field
                                        name="phone"
                                        label="Mobile Number"
                                        as={TextField}
                                        helperText={<ErrorMessage name="phone" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12}>
                                    <Field
                                        name="dob"
                                        type="date"
                                        as={TextField}
                                        helperText={<ErrorMessage name="dob" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={6}>
                                    <Field
                                        name="address.street"
                                        label="Street"
                                        as={TextField}
                                        helperText={<ErrorMessage name="address.street" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={6}>
                                    <Field
                                        name="address.city"
                                        label="City"
                                        as={TextField}
                                        helperText={<ErrorMessage name="address.city" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={6}>
                                    <Field
                                        name="address.state"
                                        label="State"
                                        as={TextField}
                                        helperText={<ErrorMessage name="address.state" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={6}>
                                    <Field
                                        name="address.postalCode"
                                        label="Postal Code"
                                        as={TextField}
                                        helperText={<ErrorMessage name="address.postalCode" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12}>
                                    <Button fullWidth variant="contained" size="large" sx={{ mt: 2 }} type="submit">Create Account</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;
