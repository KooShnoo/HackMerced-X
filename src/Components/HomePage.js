import React from 'react';
import MainPage from './MainPage.js';
import Tracks from './Tracks.js';
import FAQ from './FAQ.js';
import Sponsors from './Sponsors.js';
import Hacktually from './Hacktually.js';

function HomePage() {
  return (
    <div>
      <MainPage/>
      <Tracks/>
      <Hacktually/>
      <FAQ/>
      <Sponsors/>
    </div>
  );
}

export default HomePage;