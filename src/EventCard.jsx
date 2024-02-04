import React from 'react';
import styles from './EventCard.module.css'; // Import the styles

function EventCard({ title, description, date, location, url, image }) {
    return (
        <div className={styles.card} onClick={() => window.location.href = url}>
            <img src={image} alt={title} className={styles.cardImage} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Location:</strong> {location}</p>
        </div>
    );
}

export default EventCard;