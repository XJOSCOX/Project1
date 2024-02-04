import React from 'react';
import EventCard from './EventCard'; // Ensure you have this component created as per previous instructions
import communityImage0 from './images/commut.png';
import communityImage1 from './images/commut0.jpg';
import communityImage2 from './images/commut1.jpg';
import communityImage3 from './images/commut2.jpg';
import communityImage4 from './images/commut3.png';
import communityImage5 from './images/commut4.png';
import communityImage6 from './images/commut5.jpg';
import communityImage7 from './images/commut6.jpg';
import communityImage8 from './images/commut7.jpeg';
import communityImage9 from './images/commut8.jpg';


// Sample data for 10 unique events
const events = [
  {
    id: 1,
    title: 'Community Hackathon',
    description: 'Join us for a weekend of coding, innovation, and fun!',
    date: '2024-03-15',
    location: 'Tech Park, Downtown',
    url: 'https://example.com/event1',
    image: communityImage0, //
  },
  {
    id: 2,
    title: 'Local Farmers Market',
    description: 'Explore the best local produce and handmade goods.',
    date: '2024-04-05',
    location: 'Central Plaza',
    url: 'https://example.com/event1',
    image: communityImage1, //
  },
  {
    id: 3,
    title: 'Outdoor Yoga Session',
    description: 'Start your morning with a refreshing yoga session in the park.',
    date: '2024-04-12',
    location: 'City Park',
    url: 'https://example.com/event1',
    image: communityImage2, //
  },
  {
    id: 4,
    title: 'Art & Wine Night',
    description: 'Enjoy an evening of art appreciation and fine wines.',
    date: '2024-05-20',
    location: 'Art Gallery',
    url: 'https://example.com/event1',
    image: communityImage3, //
  },
  {
    id: 5,
    title: 'Charity 5K Run',
    description: 'Run for a cause and help raise funds for local charities.',
    date: '2024-06-10',
    location: 'Riverfront Path',
    url: 'https://example.com/event1',
    image: communityImage4, //
  },
  {
    id: 6,
    title: 'Jazz in the Park',
    description: 'Experience an evening of live jazz music under the stars.',
    date: '2024-07-22',
    location: 'Greenwood Park',
    url: 'https://example.com/event1',
    image: communityImage5, //
  },
  {
    id: 7,
    title: 'Cinema Under the Stars',
    description: 'Watch classic films outdoors with friends and family.',
    date: '2024-08-15',
    location: 'Public Park',
    url: 'https://example.com/event1',
    image: communityImage6, //
  },
  {
    id: 8,
    title: 'Tech Talks Conference',
    description: 'Engage with the latest in technology and innovation.',
    date: '2024-09-05',
    location: 'Convention Center',
    url: 'https://example.com/event1',
    image: communityImage7, //
  },
  {
    id: 9,
    title: 'DIY Workshop: Pottery',
    description: 'Get hands-on and create your own pottery pieces.',
    date: '2024-10-03',
    location: 'Community Center',
    url: 'https://example.com/event1',
    image: communityImage8, //
  },
  {
    id: 10,
    title: 'Historical Society Lecture',
    description: 'Learn about the history of our community from local experts.',
    date: '2024-11-11',
    location: 'Museum Hall',
    url: 'https://example.com/event1',
    image: communityImage9, //
  }
];

function App() {
  return (
    <div className="App" style={{ 
      display: 'flex',
      flexDirection: 'column', // Ensures the header and grid are in a column
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Make sure the container fills the viewport height
      padding: '20px',
    }}>
      <h1 style={{
        fontSize: '2.5rem', // Large text size for the header
        fontWeight: 'bold', // Bold font weight
        textAlign: 'center', // Center the text
        marginBottom: '1rem', // Margin bottom for spacing
        color: 'white', // Font color for readability
        width: '100%', // Full width
      }}>
        Welcome to our Community Events
      </h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // 3 items per row
        gap: '20px',
        maxWidth: '1200px', // Adjust based on your preference
        width: '100%',
      }}>
        {events.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
            url={event.url}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
