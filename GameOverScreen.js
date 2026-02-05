import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TeamShield } from './TeamShield';
import { gameOverStyles } from './gameOverStyles';

export const GameOverScreen = ({ matchData, onNewGame }) => {
  const { homeTeam, awayTeam, homeScore, awayScore, playerScores } = matchData;

  // Determinar ganador
  const winner = homeScore > awayScore ? homeTeam : awayTeam;
  const winnerScore = homeScore > awayScore ? homeScore : awayScore;
  const loserScore = homeScore > awayScore ? awayScore : homeScore;

  // Obtener top 5 anotadores (mezclados, ordenados por puntos)
  const top5Players = [...playerScores]
    .sort((a, b) => b.points - a.points)
    .slice(0, 5);

  return (
    <ScrollView style={gameOverStyles.container} contentContainerStyle={gameOverStyles.scrollContent}>
      <Text style={gameOverStyles.title}>FIN DEL PARTIDO</Text>

      <View style={gameOverStyles.winnerContainer}>
        <Text style={gameOverStyles.winnerLabel}>GANADOR</Text>
        <TeamShield team={winner} size={150} />
        <Text style={gameOverStyles.winnerName}>{winner.name}</Text>
      </View>

      <View style={gameOverStyles.finalScoreContainer}>
        <Text style={gameOverStyles.finalScoreLabel}>MARCADOR FINAL</Text>
        <View style={gameOverStyles.scoreRow}>
          <Text style={gameOverStyles.teamScoreName}>{homeTeam.name}</Text>
          <Text style={gameOverStyles.finalScore}>{homeScore} - {awayScore}</Text>
          <Text style={gameOverStyles.teamScoreName}>{awayTeam.name}</Text>
        </View>
      </View>

      <View style={gameOverStyles.top5Container}>
        <Text style={gameOverStyles.top5Title}>TOP 5 ANOTADORES</Text>
        {top5Players.map((player, index) => (
          <View key={index} style={gameOverStyles.top5Row}>
            <Text style={gameOverStyles.top5Position}>{index + 1}.</Text>
            <View style={gameOverStyles.top5PlayerInfo}>
              <Text style={gameOverStyles.top5PlayerName}>{player.name}</Text>
              <Text style={gameOverStyles.top5TeamName}>({player.team})</Text>
            </View>
            <Text style={gameOverStyles.top5Points}>{player.points} PTS</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={gameOverStyles.newGameButton} onPress={onNewGame}>
        <Text style={gameOverStyles.newGameButtonText}>NUEVO PARTIDO</Text>
      </TouchableOpacity>

      <Text style={gameOverStyles.footer}>BALONCESTO '84</Text>
    </ScrollView>
  );
};
