// packages
import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
// store
import { getAccessToken } from '@/store/selectors/auth';


const RequireAuth = () => {
    const location = useLocation();
    const accessToken = useSelector(getAccessToken);

    return (accessToken ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />);
};

export default RequireAuth;
