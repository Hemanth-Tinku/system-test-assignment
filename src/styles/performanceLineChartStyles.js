const performanceLineChartStyles = {
    container: {
        width: '100%',
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    title: {
        color: '#333',
        fontSize: '26px',
        fontWeight: 'bold',
        marginBottom: '8px',
    },
    description: {
        color: '#666',
        fontSize: '16px',
        marginTop: '4px',
    },
    dropdown: {
        padding: '10px 15px',
        fontSize: '16px',
        marginLeft: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: '#fff',
        transition: 'border 0.3s ease, background-color 0.3s ease',
    },
    dropdownHover: {
        borderColor: '#888',
        backgroundColor: '#f0f0f0',
    },
    chartContainer: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '1rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
}

export default performanceLineChartStyles;