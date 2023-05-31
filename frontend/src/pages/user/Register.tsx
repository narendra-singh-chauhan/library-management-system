// packages
import { Helmet } from 'react-helmet-async';
import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// components
import Auth from '@/components/Auth';
// types
import { User } from '@/types';
// store
import { useRegisterMutation } from '@/store/api/auth';
import { setAuth } from '@/store/slices/auth';


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
const phoneRegExp = /^\+\d{1,2}\s\(\d{3}\)\s\d{3}-\d{4}$/; // +1 (838) 422-9626
const validationSchema = Yup.object({
    firstName: Yup.string().required('Please enter your first name.'),
    lastName: Yup.string().required('Please enter your last name.'),
    email: Yup.string().email('Please enter an valid email address.').required('Please enter your email address.'),
    password: Yup.string().min(6, 'Password must be atleast 6 characters').required('Please enter your password.'),
    phone: Yup.string().matches(phoneRegExp, 'Please enter an valid phone number').required('Please enter your phone number'),
    dob: Yup.date().required('Please select you date of birth.').required('Please select your date of birth'),
    address: Yup.object({
        street: Yup.string().required('Please enter your street name.'),
        city: Yup.string().required('Please enter your city name.'),
        state: Yup.string().required('Please enter your state name.'),
        postalCode: Yup.string().required('Please enter your postal code.'),
    }),
});

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [register] = useRegisterMutation();

    const onSubmit = async (values: User, formikHelpers: FormikHelpers<User>) => {
        try {
            const response = await register({ ...values, role: 'librarian' }).unwrap();
            console.log('Register response: ', response);
            dispatch(setAuth(response));
            // redirect the user back to the home page
            navigate('/');
        } catch (error) {
            console.log('Error while regestering the user:', error);
        }
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
