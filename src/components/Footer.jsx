import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            borderTop: '1px solid var(--color-border)',
            marginTop: 'auto',
            fontSize: '0.9rem',
            opacity: 0.7
        }}>
            <p>&copy; {new Date().getFullYear()} Carr's Gallery. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
