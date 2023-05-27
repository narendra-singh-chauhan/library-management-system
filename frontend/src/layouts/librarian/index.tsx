// packages
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app">
            <header>Librarian Header</header>
            <main>
                <Outlet />
            </main>
            <footer>Librarian Footer</footer>
        </div>
    );
};

export default Layout;
