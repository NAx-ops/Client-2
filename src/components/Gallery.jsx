import React, { useState } from 'react';
import './Gallery.css';

const images = [
    { id: 1, src: 'art/Abby Profile.PNG', title: 'Abby Profile', description: 'Digital Art' },
    { id: 2, src: 'art/Final Sketch update_0.jpg', title: 'Final Sketch', description: 'Sketch' },
    { id: 3, src: 'art/Hair Stylist in action.JPG', title: 'Hair Stylist in Action', description: 'Photography' },
    { id: 4, src: 'art/Hair Stylist poster.JPG', title: 'Hair Stylist Poster', description: 'Poster Design' },
    { id: 5, src: 'art/IMG_1976.JPG', title: 'Composition', description: 'Artwork' },
    { id: 6, src: 'art/Kila Profile.PNG', title: 'Kila Profile', description: 'Character Art' },
    { id: 7, src: 'art/League Halloweeen Art.jpg', title: 'League Halloween', description: 'Fan Art' },
    { id: 8, src: 'art/Nebula Profile.PNG', title: 'Nebula Profile', description: 'Character Design' },
    { id: 9, src: 'art/Nebula charater sheet 2.JPG', title: 'Nebula Character Sheet', description: 'Concept Art' },
    { id: 10, src: 'art/Pandora Porfile.PNG', title: 'Pandora Profile', description: 'Character Portrait' },
    { id: 11, src: 'art/Y2K Inspo.JPG', title: 'Y2K Inspiration', description: 'Mood Board' }
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Separate the featured images
    const finalSketch = images.find(img => img.title === 'Final Sketch');
    const hairStylist = images.find(img => img.title === 'Hair Stylist in Action');

    // Filter out both featured images from the main grid
    const gridImages = images.filter(img => img.title !== 'Final Sketch' && img.title !== 'Hair Stylist in Action');

    return (
        <section id="gallery" className="gallery-section">
            {/* Featured Image Row 1: Hair Stylist in Action */}
            {hairStylist && (
                <div className="featured-row" onClick={() => setSelectedImage(hairStylist)}>
                    <div className="image-wrapper featured-wrapper">
                        <img src={hairStylist.src} alt={hairStylist.title} loading="lazy" />
                        <div className="overlay">
                            <h3>{hairStylist.title}</h3>
                        </div>
                    </div>
                </div>
            )}

            {/* Remaining Grid */}
            <div className="gallery-grid">
                {gridImages.map((image) => (
                    <div key={image.id} className="gallery-item" onClick={() => setSelectedImage(image)}>
                        <div className="image-wrapper">
                            <img src={image.src} alt={image.title} loading="lazy" />
                            <div className="overlay">
                                <h3>{image.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Featured Image Row 2: Final Sketch (Bottom) */}
            {finalSketch && (
                <div className="featured-row" style={{ marginTop: '2rem' }} onClick={() => setSelectedImage(finalSketch)}>
                    <div className="image-wrapper featured-wrapper">
                        <img src={finalSketch.src} alt={finalSketch.title} loading="lazy" />
                        <div className="overlay">
                            <h3>{finalSketch.title}</h3>
                        </div>
                    </div>
                </div>
            )}

            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="close-btn">&times;</button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.title} />
                        <div className="lightbox-info">
                            <h2>{selectedImage.title}</h2>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
