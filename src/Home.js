import Feed from './Feed.js';
import React from 'react';

const Home = ({ posts }) => {
  return (
    <main className='home'>
      {posts.length ? (  
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: '1.5rem' }}>No posts to display here</p>
      )}
    </main>
  );
};

export default Home;
