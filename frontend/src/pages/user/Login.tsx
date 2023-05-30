// packages
import { Helmet } from 'react-helmet-async';
import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
// components
import Auth from '@/components/Auth';

// types
type InitialValues = {
    email: string,
    password: string,
};

// initial values
const initialValues: InitialValues = {
    email: '',
    password: '',
};

// validation schema
const validationSchema = Yup.object({
    email: Yup.string().email('Please enter an valid email address.').required('Please enter your email address.'),
    password: Yup.string().min(6, 'Password must be atleast 6 characters').required('Please enter your password.'),
});

const Login = () => {
    const onSubmit = async (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => {
        console.log('on register: ', values);
        formikHelpers.setFieldError('email', '');
    }

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <Auth
                authType="Log In"
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            />
        </>
    );
};

export default Login;
