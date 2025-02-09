import React from 'react';
import DigitalClock from './DigitalClock';
import './App.css';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Helmet>
        <title>Digital Clock Dashboard</title>
        <meta
          name="description"
          content="A digital clock displaying the current time in multiple time zones."
        />
      </Helmet>
      <h1 className="app-title">Digital Clock in Multiple Time Zones</h1>
      <DigitalClock />
    </div>
  );
};

export default App;