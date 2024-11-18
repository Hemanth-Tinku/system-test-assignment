import React from 'react';
import { useNavigate } from 'react-router-dom';
import sidebarAndNavbarStyles from '../styles/sidebarAndNavbar';

const SidebarAndNavbar = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    };

    return (
        <div style={sidebarAndNavbarStyles.container}>
            <aside style={sidebarAndNavbarStyles.sidebar}>
                <nav>
                    <ul style={sidebarAndNavbarStyles.navList}>
                        <li><a href="/main" style={sidebarAndNavbarStyles.navItem}>Dashboard</a></li>
                        <li><a href="/main" style={sidebarAndNavbarStyles.navItem}>Reports</a></li>
                        <li><a href="/main" style={sidebarAndNavbarStyles.navItem}>Profile</a></li>
                    </ul>
                </nav>
            </aside>

            <div style={sidebarAndNavbarStyles.content}>
                <header style={sidebarAndNavbarStyles.header}>
                    <h2 style={sidebarAndNavbarStyles.title}>Dashboard</h2>
                    <button onClick={handleLogout} style={sidebarAndNavbarStyles.logoutButton}>
                        Logout
                    </button>
                </header>

                <main style={sidebarAndNavbarStyles.main}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default SidebarAndNavbar;