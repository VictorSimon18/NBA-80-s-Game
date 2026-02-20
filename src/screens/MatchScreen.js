import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { TeamShield } from '../components/TeamShield';
import { matchScreenStyles as s } from '../styles/matchScreenStyles';

export const MatchScreen = ({ homeTeam, awayTeam, onBack, onFinish }) => {
  const [homePlayerScores, setHomePlayerScores] = useState(
    homeTeam.players.reduce((acc, player) => ({ ...acc, [player]: 0 }), {})
  );
  const [awayPlayerScores, setAwayPlayerScores] = useState(
    awayTeam.players.reduce((acc, player) => ({ ...acc, [player]: 0 }), {})
  );

  const homeScore = Object.values(homePlayerScores).reduce((a, b) => a + b, 0);
  const awayScore = Object.values(awayPlayerScores).reduce((a, b) => a + b, 0);
  const isTied = homeScore === awayScore;

  const addPoints = (player, points, isHome) => {
    if (isHome) {
      setHomePlayerScores(prev => ({ ...prev, [player]: prev[player] + points }));
    } else {
      setAwayPlayerScores(prev => ({ ...prev, [player]: prev[player] + points }));
    }
  };

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

  const PlayerRow = ({ player, points, isHome }) => (
    <View style={s.playerRow}>
      <View style={s.playerInfo}>
        <Text style={s.matchPlayerName}>{player}</Text>
        <Text style={s.playerPoints}>{points} pts</Text>
      </View>
      <View style={s.pointButtons}>
        <TouchableOpacity
          style={s.pointButton}
          onPress={() => addPoints(player, 2, isHome)}
        >
          <Text style={s.pointButtonText}>+2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[s.pointButton, s.threePointButton]}
          onPress={() => addPoints(player, 3, isHome)}
        >
          <Text style={s.pointButtonText}>+3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={s.container} contentContainerStyle={s.scrollContent}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Marcador */}
      <View style={s.scoreContainer}>
        <Text style={s.scoreLabel}>{homeTeam.name}</Text>
        <Text style={s.scoreText}>{homeScore} - {awayScore}</Text>
        <Text style={s.scoreLabel}>{awayTeam.name}</Text>
      </View>

      {/* Escudo equipo local */}
      <View style={s.shieldBlock}>
        <TeamShield team={homeTeam} size={65} />
        <Text style={s.teamName}>{homeTeam.name}</Text>
      </View>

      {/* Quinteto local + puntos */}
      <View style={s.playersBlock}>
        <Text style={s.playersTitle}>QUINTETO INICIAL</Text>
        {homeTeam.players.map((player, index) => (
          <PlayerRow
            key={index}
            player={player}
            points={homePlayerScores[player]}
            isHome={true}
          />
        ))}
      </View>

      {/* Escudo equipo visitante */}
      <View style={s.shieldBlock}>
        <TeamShield team={awayTeam} size={65} />
        <Text style={s.teamName}>{awayTeam.name}</Text>
      </View>

      {/* Quinteto visitante + puntos */}
      <View style={s.playersBlock}>
        <Text style={s.playersTitle}>QUINTETO INICIAL</Text>
        {awayTeam.players.map((player, index) => (
          <PlayerRow
            key={index}
            player={player}
            points={awayPlayerScores[player]}
            isHome={false}
          />
        ))}
      </View>

      {/* Botón finalizar */}
      <View style={s.buttonsContainer}>
        <TouchableOpacity
          style={[s.finishButton, isTied && s.finishButtonDisabled]}
          onPress={handleFinish}
          disabled={isTied}
        >
          <Text style={s.finishButtonText}>
            {isTied ? 'EMPATE - NO PUEDES FINALIZAR' : 'FINALIZAR PARTIDO'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
