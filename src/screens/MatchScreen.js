import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
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
      <Text style={s.playerName} numberOfLines={1}>{player}</Text>
      <Text style={s.playerPoints}>{points}</Text>
      <View style={s.pointButtons}>
        <TouchableOpacity
          style={s.pointButton}
          onPress={() => addPoints(player, 2, isHome)}
          activeOpacity={0.6}
        >
          <Text style={s.pointButtonText}>+2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[s.pointButton, s.threePointButton]}
          onPress={() => addPoints(player, 3, isHome)}
          activeOpacity={0.6}
        >
          <Text style={s.pointButtonText}>+3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* 1. Nombre de la app */}
      <View style={s.header}>
        <Text style={s.title}>BALONCESTO '84</Text>
      </View>

      {/* 2. Marcador */}
      <View style={s.scoreZone}>
        <Text style={s.scoreTeamName}>{homeTeam.name}</Text>
        <Text style={s.scoreText}>{homeScore}</Text>
        <Text style={s.scoreDash}>-</Text>
        <Text style={s.scoreText}>{awayScore}</Text>
        <Text style={s.scoreTeamName}>{awayTeam.name}</Text>
      </View>

      {/* 3. Escudo equipo local */}
      <View style={s.teamBlock}>
        <Text style={s.teamLabel}>LOCAL</Text>
        <TeamShield team={homeTeam} size={44} />
        <Text style={s.matchTeamName}>{homeTeam.name}</Text>
      </View>

      {/* 4. Quinteto equipo local + puntos */}
      <View style={s.playersBlock}>
        {homeTeam.players.map((player, index) => (
          <PlayerRow
            key={index}
            player={player}
            points={homePlayerScores[player]}
            isHome={true}
          />
        ))}
      </View>

      {/* 5. Escudo equipo visitante */}
      <View style={s.teamBlock}>
        <Text style={s.teamLabel}>VISITANTE</Text>
        <TeamShield team={awayTeam} size={44} />
        <Text style={s.matchTeamName}>{awayTeam.name}</Text>
      </View>

      {/* 6. Quinteto equipo visitante + puntos */}
      <View style={s.playersBlock}>
        {awayTeam.players.map((player, index) => (
          <PlayerRow
            key={index}
            player={player}
            points={awayPlayerScores[player]}
            isHome={false}
          />
        ))}
      </View>

      {/* 7. Botones finalizar + volver */}
      <View style={s.footer}>
        <TouchableOpacity
          style={s.backButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <Text style={s.backButtonText}>VOLVER</Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={[s.finishButton, isTied && s.finishButtonDisabled]}
            onPress={handleFinish}
            disabled={isTied}
            activeOpacity={0.7}
          >
            <Text style={s.finishButtonText}>
              {isTied ? 'EMPATE' : 'FINALIZAR'}
            </Text>
          </TouchableOpacity>
          {isTied && (
            <Text style={s.tiedMessage}>DESEMPATA PRIMERO</Text>
          )}
        </View>
      </View>
    </View>
  );
};
