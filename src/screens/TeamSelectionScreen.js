import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { TeamShield } from '../components/TeamShield';
import { teams } from '../data/Teams';
import { teamSelectionStyles as s } from '../styles/teamSelectionStyles';

export const TeamSelectionScreen = ({ onPlayPress }) => {
  const [homeTeamIndex, setHomeTeamIndex] = useState(0);
  const [awayTeamIndex, setAwayTeamIndex] = useState(1);

  const changeHomeTeam = (direction) => {
    setHomeTeamIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return teams.length - 1;
      if (newIndex >= teams.length) return 0;
      return newIndex;
    });
  };

  const changeAwayTeam = (direction) => {
    setAwayTeamIndex((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return teams.length - 1;
      if (newIndex >= teams.length) return 0;
      return newIndex;
    });
  };

  const homeTeam = teams[homeTeamIndex];
  const awayTeam = teams[awayTeamIndex];

  return (
    <View style={s.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* 1. Nombre de la app */}
      <View style={s.header}>
        <Text style={s.subtitle}>SELECCIONA TUS EQUIPOS</Text>
      </View>

      {/* 2. Selector equipo local */}
      <View style={s.teamBlock}>
        <Text style={s.teamLabel}>LOCAL</Text>
        <View style={s.selectorRow}>
          <TouchableOpacity
            style={s.arrowButton}
            onPress={() => changeHomeTeam(-1)}
            activeOpacity={0.6}
          >
            <Text style={s.arrowText}>◄</Text>
          </TouchableOpacity>

          <View style={s.selectorCenter}>
            <TeamShield team={homeTeam} size={90} />
            <Text style={s.teamName}>{homeTeam.name}</Text>
          </View>

          <TouchableOpacity
            style={s.arrowButton}
            onPress={() => changeHomeTeam(1)}
            activeOpacity={0.6}
          >
            <Text style={s.arrowText}>►</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 3. Quinteto inicial equipo local */}
      <View style={s.playersBlock}>
        <Text style={s.playersTitle}>QUINTETO INICIAL</Text>
        {homeTeam.players.map((player, index) => (
          <Text key={index} style={s.playerName} numberOfLines={1}>
            {index + 1}. {player}
          </Text>
        ))}
      </View>

      {/* 4. Selector equipo visitante */}
      <View style={s.teamBlock}>
        <Text style={s.teamLabel}>VISITANTE</Text>
        <View style={s.selectorRow}>
          <TouchableOpacity
            style={s.arrowButton}
            onPress={() => changeAwayTeam(-1)}
            activeOpacity={0.6}
          >
            <Text style={s.arrowText}>◄</Text>
          </TouchableOpacity>

          <View style={s.selectorCenter}>
            <TeamShield team={awayTeam} size={90} />
            <Text style={s.teamName}>{awayTeam.name}</Text>
          </View>

          <TouchableOpacity
            style={s.arrowButton}
            onPress={() => changeAwayTeam(1)}
            activeOpacity={0.6}
          >
            <Text style={s.arrowText}>►</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 5. Quinteto equipo visitante */}
      <View style={s.playersBlock}>
        <Text style={s.playersTitle}>QUINTETO INICIAL</Text>
        {awayTeam.players.map((player, index) => (
          <Text key={index} style={s.playerName} numberOfLines={1}>
            {index + 1}. {player}
          </Text>
        ))}
      </View>

      {/* 6. Botón jugar */}
      <View style={s.footer}>
        <TouchableOpacity
          style={s.playButton}
          onPress={() => onPlayPress(homeTeam, awayTeam)}
          activeOpacity={0.7}
        >
          <Text style={s.playButtonText}>▶ JUGAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
