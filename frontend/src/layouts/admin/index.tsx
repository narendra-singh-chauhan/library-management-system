// packages
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app">
            <header>Admin Header</header>
            <main>
                <Outlet />
            </main>
            <footer>Admin Footer</footer>
        </div>
    );
};

export default Layout;
