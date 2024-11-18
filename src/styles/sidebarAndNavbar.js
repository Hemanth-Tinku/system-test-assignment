const sidebarAndNavbarStyles = {
    container: {
        display: 'flex',
        height: '100vh',
    },
    sidebar: {
        width: '250px',
        backgroundColor: '#2c3e50',
        color: '#fff',
        padding: '1.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
    },
    navItem: {
        color: '#ecf0f1',
        textDecoration: 'none',
        display: 'block',
        padding: '12px 20px',
        borderRadius: '5px',
        marginBottom: '10px',
        transition: 'background 0.3s',
    },
    navItemHover: {
        backgroundColor: '#34495e',
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#34495e',
        color: '#fff',
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '1.8rem',
        margin: 0,
    },
    logoutButton: {
        backgroundColor: '#e74c3c',
        border: 'none',
        padding: '0.7rem 1.5rem',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background 0.3s',
    },
    logoutButtonHover: {
        backgroundColor: '#c0392b',
    },
    main: {
        padding: '2rem',
        flex: 1,
        overflowY: 'auto',
        backgroundColor: '#ecf0f1',
        boxSizing: 'border-box',
    },
};

export default sidebarAndNavbarStyles;