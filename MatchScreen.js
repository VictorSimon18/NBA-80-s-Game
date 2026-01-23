import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TeamShield } from './TeamShield';
import { matchScreenStyles } from './matchScreenStyles';

export const MatchScreen = ({ homeTeam, awayTeam, onBack, onFinish }) => {
  // Estado para puntuaciones de cada jugador
  const [homePlayerScores, setHomePlayerScores] = useState(
    homeTeam.players.reduce((acc, player) => ({ ...acc, [player]: 0 }), {})
  );
  const [awayPlayerScores, setAwayPlayerScores] = useState(
    awayTeam.players.reduce((acc, player) => ({ ...acc, [player]: 0 }), {})
  );

  // Calcular marcadores totales
  const homeScore = Object.values(homePlayerScores).reduce((a, b) => a + b, 0);
  const awayScore = Object.values(awayPlayerScores).reduce((a, b) => a + b, 0);
  const isTied = homeScore === awayScore;

  // Función para añadir puntos
  const addPoints = (player, points, isHome) => {
    if (isHome) {
      setHomePlayerScores(prev => ({ ...prev, [player]: prev[player] + points }));
    } else {
      setAwayPlayerScores(prev => ({ ...prev, [player]: prev[player] + points }));
    }
  };

  // Función para finalizar partido
  const handleFinish = () => {
    const allPlayerScores = [
      ...homeTeam.players.map(player => ({
        name: player,
        team: homeTeam.name,
        points: homePlayerScores[player]
      })),
      ...awayTeam.players.map(player => ({
        name: player,
        team: awayTeam.name,
        points: awayPlayerScores[player]
      }))
    ];

    onFinish({
      homeTeam,
      awayTeam,
      homeScore,
      awayScore,
      playerScores: allPlayerScores
    });
  };

  // Componente para renderizar jugador con botones
  const PlayerRow = ({ player, points, isHome }) => (
    <View style={matchScreenStyles.playerRow}>
      <View style={matchScreenStyles.playerInfo}>
        <Text style={matchScreenStyles.matchPlayerName}>{player}</Text>
        <Text style={matchScreenStyles.playerPoints}>{points} pts</Text>
      </View>
      <View style={matchScreenStyles.pointButtons}>
        <TouchableOpacity
          style={matchScreenStyles.pointButton}
          onPress={() => addPoints(player, 2, isHome)}
        >
          <Text style={matchScreenStyles.pointButtonText}>+2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[matchScreenStyles.pointButton, matchScreenStyles.threePointButton]}
          onPress={() => addPoints(player, 3, isHome)}
        >
          <Text style={matchScreenStyles.pointButtonText}>+3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={matchScreenStyles.container} contentContainerStyle={matchScreenStyles.scrollContent}>
      <Text style={matchScreenStyles.title}>BALONCESTO '84</Text>

      <View style={matchScreenStyles.scoreContainer}>
        <Text style={matchScreenStyles.scoreText}>{homeScore} - {awayScore}</Text>
      </View>

      <View style={matchScreenStyles.matchContainer}>
        {/* Equipo Local */}
        <View style={matchScreenStyles.matchTeam}>
          <TeamShield team={homeTeam} size={120} />
          <Text style={matchScreenStyles.matchTeamName}>{homeTeam.name}</Text>

          <View style={matchScreenStyles.matchPlayersContainer}>
            {homeTeam.players.map((player, index) => (
              <PlayerRow
                key={index}
                player={player}
                points={homePlayerScores[player]}
                isHome={true}
              />
            ))}
          </View>
        </View>

        {/* VS */}
        <View style={matchScreenStyles.vsContainer}>
          <Text style={matchScreenStyles.vsText}>VS</Text>
        </View>

        {/* Equipo Visitante */}
        <View style={matchScreenStyles.matchTeam}>
          <TeamShield team={awayTeam} size={120} />
          <Text style={matchScreenStyles.matchTeamName}>{awayTeam.name}</Text>

          <View style={matchScreenStyles.matchPlayersContainer}>
            {awayTeam.players.map((player, index) => (
              <PlayerRow
                key={index}
                player={player}
                points={awayPlayerScores[player]}
                isHome={false}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={matchScreenStyles.buttonsContainer}>
        <TouchableOpacity
          style={[
            matchScreenStyles.finishButton,
            isTied && matchScreenStyles.finishButtonDisabled
          ]}
          onPress={handleFinish}
          disabled={isTied}
        >
          <Text style={matchScreenStyles.finishButtonText}>
            {isTied ? 'EMPATE - NO PUEDES FINALIZAR' : 'FINALIZAR PARTIDO'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={matchScreenStyles.backButton}
          onPress={onBack}
        >
          <Text style={matchScreenStyles.backButtonText}>◄ VOLVER</Text>
        </TouchableOpacity>
      </View>

      <Text style={matchScreenStyles.matchFooter}>
        {isTied ? '¡DESEMPATA PARA FINALIZAR!' : '¡A POR LA VICTORIA!'}
      </Text>
    </ScrollView>
  );
};