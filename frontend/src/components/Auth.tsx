// packages
import { Formik, Form, Field, ErrorMessage, FormikValues, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { ObjectSchema } from 'yup';
import { Box, Container, useTheme, Avatar, TextField, Grid, Button, Typography, styled } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';


// types
type AuthProps<TValues extends FormikValues, TValidationSchema extends ObjectSchema<TValues>> = {
    authType?: 'Log In' | 'Create Account',
    initialValues: TValues,
    validationSchema: TValidationSchema,
    onSubmit: (values: TValues, formikHelpers: FormikHelpers<TValues>) => void,
};

// styled
const StyledTextField = styled(TextField)({
    '& .MuiFormHelperText-root': {
        color: 'red',
        fontSize: 14,
        marginInline: 5,
    },
});

const SignUp = <TValues extends FormikValues, TValidationSchema extends ObjectSchema<TValues>>({
    authType = 'Log In',
    initialValues,
    validationSchema,
    onSubmit
}: AuthProps<TValues, TValidationSchema>) => {
    const theme = useTheme();

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: '100px',
                    boxShadow: theme.shadows[2],
                    // backgroundColor: theme.palette.grey[900],
                    padding: theme.spacing(5),
                    borderRadius: theme.spacing(1),
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 1, mb: 5 }}>
                    <Avatar sx={{ height: 50, width: 50 }}>
                        <HowToRegIcon />
                    </Avatar>

                    <Typography variant="h5">{authType}</Typography>
                </Box>

                <Box>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <Grid container spacing={2}>
                                {authType === 'Create Account' && (
                                    <>

                                        <Grid item sm={12} md={6}>
                                            <Field
                                                name="firstName"
                                                label="First Name"
                                                as={StyledTextField}
                                                helperText={<ErrorMessage name="firstName" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <Field
                                                name="lastName"
                                                label="Last Name"
                                                as={StyledTextField}
                                                helperText={<ErrorMessage name="lastName" />}
                                                fullWidth
                                            />
                                        </Grid>
                                    </>
                                )}
                                <Grid item sm={12}>
                                    <Field
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                        as={StyledTextField}
                                        helperText={<ErrorMessage name="email" />}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12}>
                                    <Field
                                        name="password"
                                        label="Password"
                                        type="password"
                                        as={StyledTextField}
                                        helperText={<ErrorMessage name="password" />}
                                        fullWidth
                                    />
                                </Grid>
                                {authType === 'Create Account' && (
                                    <>
                                        <Grid item sm={12} md={6}>
                                            <Field
                                                name="phone"
                                                label="Mobile Number"
                                                as={StyledTextField}
                                                helperText={<ErrorMessage name="phone" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <Field
                                                name="dob"
                                                type="date"
                                                as={StyledTextField}
                                                helperText={<ErrorMessage name="dob" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <Field
                                                name="address.street"
                                                label="Street"
                                                as={StyledTextField}
                                                helperText={<ErrorMessage name="address.street" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <Field
                                                name="address.city"
                                                label="City"
                                                as={StyledTextField}
                                                helperText={<ErrorMessage name="address.city" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <Field
                                                name="address.state"
                                                label="State"
                                                as={StyledTextField}
                                                helperText={<ErrorMessage name="address.state" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <Field
                                                name="address.postalCode"
                                                label="Postal Code"
                                                as={StyledTextField}
                                                helperText={<ErrorMessage name="address.postalCode" />}
                                                fullWidth
                                            />
                                        </Grid>
                                    </>
                                )}
                                <Grid item sm={12}>
                                    {authType === 'Log In' && (
                                        <Link style={{ color: '#00188d', fontSize: 14, }} to="/register" >
                                            Don't have an account? Create account here.
                                        </Link>
                                    )}
                                    {authType === 'Create Account' && (
                                        <Link style={{ color: '#00188d', fontSize: 14, }} to="/login" >
                                            Already have an account? Log in here.
                                        </Link>
                                    )}
                                    <Button fullWidth variant="contained" size="large" sx={{ mt: 2 }} type="submit">{authType}</Button>
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
