const loginStyles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    loginBox: {
        width: '100%',
        maxWidth: '400px',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '1rem',
    },
    label: {
        marginBottom: '0.5rem',
        display: 'block',
        fontWeight: 'bold',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '0.8rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        boxSizing: 'border-box',
    },
    error: {
        color: 'red',
        fontSize: '0.9rem',
        marginBottom: '1rem',
    },
    button: {
        padding: '0.8rem',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#4caf50',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
};

export default loginStyles;
