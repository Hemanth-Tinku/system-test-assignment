const sidebarAndNavbarStyles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        overflow: 'hidden',
    },
    sidebar: {
        width: '250px',
        backgroundColor: '#333',
        color: '#fff',
        padding: '1rem',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease',
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    navItem: {
        display: 'block',
        color: '#fff',
        textDecoration: 'none',
        padding: '0.8rem',
        borderRadius: '4px',
        margin: '0.5rem 0',
        transition: 'background-color 0.2s',
    },
    navItemHover: {
        backgroundColor: '#555',
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f4f4f4',  // Set the background to light gray
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#f4f4f4',
        borderBottom: '1px solid #ddd',
    },
    title: {
        margin: 0,
        fontSize: '1.5rem',
    },
    logoutButton: {
        backgroundColor: '#e63946',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s',
    },
    logoutButtonHover: {
        backgroundColor: '#d62828',
    },
    main: {
        flex: 1,
        padding: '1rem',
        overflowY: 'auto',
        boxSizing: 'border-box',
    },
    '@media (max-width: 768px)': {
        container: {
            flexDirection: 'column',
        },
        sidebar: {
            width: '100%',
            position: 'absolute',
            top: '0',
            left: '-100%',
            height: '100vh',
            zIndex: '10',
        },
        sidebarOpen: {
            left: '0',
        },
        content: {
            marginTop: '20px',
        },
        header: {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '9',
            backgroundColor: '#333',
            color: '#fff',
        },
        navToggle: {
            display: 'block',
            fontSize: '1.5rem',
            cursor: 'pointer',
            marginRight: '1rem',
        },
    },
};

export default sidebarAndNavbarStyles;
