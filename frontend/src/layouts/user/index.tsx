// packages
import RequireAuth from '@/components/RequireAuth';
import Header from '../Header';
import Footer from '../Footer';
// import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <RequireAuth />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
