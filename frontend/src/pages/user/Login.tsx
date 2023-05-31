// packages
import { Helmet } from 'react-helmet-async';
import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// components
import Auth from '@/components/Auth';
// store
import { useLoginMutation } from '@/store/api/auth';
import { setAuth } from '@/store/slices/auth';

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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login] = useLoginMutation();

    const onSubmit = async (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>) => {
        try {
            const response = await login(values).unwrap();
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
