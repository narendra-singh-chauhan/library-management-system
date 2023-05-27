// packages
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app">
            <header>User Header</header>
            <main>
                <Outlet />
            </main>
            <footer>User Footer</footer>
        </div>
    );
};

export default Layout;
