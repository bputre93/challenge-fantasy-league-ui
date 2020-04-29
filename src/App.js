import React from 'react';
import './App.css';
import './components/TeamStandings/TeamStandings';
import TeamStandings from './components/TeamStandings/TeamStandings';
import TopChallengers from './components/TopChallengers';
import RulesTable from './components/RulesTable';
import RuleInstanceChart from './components/RuleInstanceChart'

function App() {
  return (
    <div className="App">
      <TeamStandings/>
      <TopChallengers/>
      <RulesTable/>
      <RuleInstanceChart/>
    </div>
  );
}

export default App;
