import React from 'react';

const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 0', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>The Artist</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.9 }}>
                Carr's Gallery is a curated space showcasing the evolution of artistic expression.
                Where shadow meets light, and texture implies meaning.
            </p>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8' }}>
                With a focus on contemporary realism and abstract forms, the work explores the boundaries
                between what is seen and what is felt. Every piece tells a story of emotion, time, and
                perspective.
            </p>
        </section>
    );
};

export default About;
