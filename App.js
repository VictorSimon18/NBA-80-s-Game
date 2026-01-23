import React, { useState } from 'react';
import { TeamSelectionScreen } from './TeamSelectionScreen';
import { MatchScreen } from './MatchScreen.js';
import { GameOverScreen } from './GameOverScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('selection');
  const [selectedHomeTeam, setSelectedHomeTeam] = useState(null);
  const [selectedAwayTeam, setSelectedAwayTeam] = useState(null);
  const [matchData, setMatchData] = useState(null);

  const handlePlayPress = (homeTeam, awayTeam) => {
    setSelectedHomeTeam(homeTeam);
    setSelectedAwayTeam(awayTeam);
    setCurrentScreen('match');
  };

  const handleBackPress = () => {
    setCurrentScreen('selection');
  };

  const handleFinishMatch = (data) => {
    setMatchData(data);
    setCurrentScreen('gameOver');
  };

  const handleNewGame = () => {
    setMatchData(null);
    setSelectedHomeTeam(null);
    setSelectedAwayTeam(null);
    setCurrentScreen('selection');
  };

  if (currentScreen === 'selection') {
    return <TeamSelectionScreen onPlayPress={handlePlayPress} />;
  }

  if (currentScreen === 'match') {
    return (
      <MatchScreen
        homeTeam={selectedHomeTeam}
        awayTeam={selectedAwayTeam}
        onBack={handleBackPress}
        onFinish={handleFinishMatch}
      />
    );
  }

  if (currentScreen === 'gameOver') {
    return (
      <GameOverScreen
        matchData={matchData}
        onNewGame={handleNewGame}
      />
    );
  }

  return null;
}