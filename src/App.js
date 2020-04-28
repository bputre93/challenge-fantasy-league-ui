import React from 'react';
import './App.css';
import './components/TeamStandings/TeamStandings';
import TeamStandings from './components/TeamStandings/TeamStandings';
import TopChallengers from './components/TopChallengers';

function App() {
  return (
    <div className="App">
      <TeamStandings/>
      <TopChallengers/>
    </div>
  );
}

export default App;
