// packages
import { Helmet } from 'react-helmet-async';
import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
// components
import Auth from '@/components/Auth';
// types
import { User } from '@/types';


// initial values
const initialValues: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    dob: new Date(),
    address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
    }
};

// validation schema
const validationSchema = Yup.object({
    firstName: Yup.string().required('Please enter your first name.'),
    lastName: Yup.string().required('Please enter your last name.'),
    email: Yup.string().email('Please enter an valid email address.').required('Please enter your email address.'),
    password: Yup.string().min(6, 'Password must be atleast 6 characters').required('Please enter your password.'),
    phone: Yup.string().min(10, 'Phone number only contains 10 numbers').max(10, 'Phone number only contains 10 numbers').required('Please enter your phone number'),
    dob: Yup.date().required('Please select you date of birth.').required('Please select your date of birth'),
    address: Yup.object({
        street: Yup.string().required('Please enter your street name.'),
        city: Yup.string().required('Please enter your city name.'),
        state: Yup.string().required('Please enter your state name.'),
        postalCode: Yup.string().required('Please enter your postal code.'),
    }),
});

const Register = () => {
    const onSubmit = async (values: User, formikHelpers: FormikHelpers<User>) => {
        console.log('on register: ', values);
        formikHelpers.setFieldError('email', '');
    }

    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>

            <Auth
                authType="Create Account"
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            />
        </>
    );
};

export default Register;
