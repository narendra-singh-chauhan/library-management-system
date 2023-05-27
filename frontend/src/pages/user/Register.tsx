// packages
import { Helmet } from 'react-helmet-async';
// components
import SignUp from '@/components/auth/SignUp';

const Register = () => {
    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>

            <SignUp />
        </>
    );
};

export default Register;
