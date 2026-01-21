import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'var(--color-surface)', margin: '2rem -2rem -2rem -2rem' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 1rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Inquiries</h2>
                <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
                    For commissions, exhibition inquiries, or to purchase a piece, please get in touch.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                    <a href="mailto:Breecarr1104@gmail.com" style={{ fontSize: '1.5rem', borderBottom: '1px solid currentColor', paddingBottom: '5px' }}>
                        Breecarr1104@gmail.com
                    </a>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                        <a href="https://www.instagram.com/lilly_sips/">Instagram</a>
                        <a href="https://www.tiktok.com/@lilly_sips">TikTok</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
