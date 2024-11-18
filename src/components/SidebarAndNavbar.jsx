import React from 'react';
import { useNavigate } from 'react-router-dom';

const SidebarAndNavbar = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <aside style={{ width: '200px', background: '#333', color: '#fff', padding: '1rem' }}>
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><a href="/main" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</a></li>

                    </ul>
                </nav>
            </aside>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

                <header style={{ background: '#555', color: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Application Title</h2>
                    <button onClick={handleLogout} style={{ background: '#ff4d4d', border: 'none', padding: '0.5rem 1rem', color: '#fff', cursor: 'pointer' }}>
                        Logout
                    </button>
                </header>

                <main style={{ padding: '1rem', overflow: 'auto' }}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default SidebarAndNavbar;
