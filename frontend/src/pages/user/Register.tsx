// packages
import { Helmet } from 'react-helmet-async';
// components
import Auth from '@/components/auth';

const Register = () => {
    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>

            <Auth />
        </>
    );
};

export default Register;
