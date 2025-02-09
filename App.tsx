import React from 'react';
import DigitalClock from './DigitalClock';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Digital Clock in Multiple Time Zones</h1>
      <DigitalClock />
    </div>
  );
};

export default App;