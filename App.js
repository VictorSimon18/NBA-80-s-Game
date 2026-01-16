import React, { useState } from 'react';
import { TeamSelectionScreen } from './TeamSelectionScreen';
import { MatchScreen } from './MatchScreen.js';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('selection');
  const [selectedHomeTeam, setSelectedHomeTeam] = useState(null);
  const [selectedAwayTeam, setSelectedAwayTeam] = useState(null);

  const handlePlayPress = (homeTeam, awayTeam) => {
    setSelectedHomeTeam(homeTeam);
    setSelectedAwayTeam(awayTeam);
    setCurrentScreen('match');
  };

  const handleBackPress = () => {
    setCurrentScreen('selection');
  };

  return currentScreen === 'selection' ? (
    <TeamSelectionScreen onPlayPress={handlePlayPress} />
  ) : (
    <MatchScreen 
      homeTeam={selectedHomeTeam} 
      awayTeam={selectedAwayTeam} 
      onBack={handleBackPress}
    />
  );
}