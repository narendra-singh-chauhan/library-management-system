// packages
import { useRoutes, Navigate } from 'react-router-dom';
// layouts
import UserLayout from '@/layouts/user';
import AdminLayout from '@/layouts/admin';
import LibrarianLayout from '@/layouts/librarian';
// pages
import UserRegister from '@/pages/user/Register';
import UserLogin from '@/pages/user/Login';
import AdminRegister from '@/pages/admin/Register';
import LibrarianRegister from '@/pages/librarian/Register';

const Routes = () => (useRoutes([
    {
        path: '/',
        element: <UserLayout />,
        children: [
            { index: true, element: <div>User Home Page</div> },
            { path: 'libraries', element: <div>User Libraries Page</div> }
        ]
    },
    { path: 'register', element: <UserRegister /> },
    { path: 'login', element: <UserLogin /> },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            { index: true, element: <div>Admin Home Page</div> },
            { path: 'libraries', element: <div>Admin Libraries Page</div> }
        ]
    },
    { path: 'register', element: <AdminRegister /> },
    {
        path: '/librarian',
        element: <LibrarianLayout />,
        children: [
            { index: true, element: <div>Librarian Home Page</div> },
            { path: 'libraries', element: <div>Librarian Libraries Page</div> }
        ]
    },
    { path: 'register', element: <LibrarianRegister /> },
    { path: '404', element: <div>Page Not Found</div> },
    { path: '*', element: <Navigate to="/404" replace /> },
]));

export default Routes;