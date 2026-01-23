import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TeamShield } from './TeamShield';
import { teams } from './Teams';
import { teamSelectionStyles } from './teamSelectionStyles';

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
    <ScrollView style={teamSelectionStyles.container} contentContainerStyle={teamSelectionStyles.scrollContent}>
      <Text style={teamSelectionStyles.title}>BALONCESTO '84</Text>
      <Text style={teamSelectionStyles.subtitle}>SELECCIONA TUS EQUIPOS</Text>

      <View style={teamSelectionStyles.teamsContainer}>
        {/* Equipo Local */}
        <View style={teamSelectionStyles.teamSelector}>
          <Text style={teamSelectionStyles.teamLabel}>LOCAL</Text>
          
          <View style={teamSelectionStyles.selectorRow}>
            <TouchableOpacity 
              style={teamSelectionStyles.arrowButton} 
              onPress={() => changeHomeTeam(-1)}
            >
              <Text style={teamSelectionStyles.arrowText}>◄</Text>
            </TouchableOpacity>

            <TeamShield team={homeTeam} size={100} />

            <TouchableOpacity 
              style={teamSelectionStyles.arrowButton} 
              onPress={() => changeHomeTeam(1)}
            >
              <Text style={teamSelectionStyles.arrowText}>►</Text>
            </TouchableOpacity>
          </View>

          <Text style={teamSelectionStyles.teamName}>{homeTeam.name}</Text>

          <View style={teamSelectionStyles.playersContainer}>
            <Text style={teamSelectionStyles.playersTitle}>QUINTETO INICIAL</Text>
            {homeTeam.players.map((player, index) => (
              <Text key={index} style={teamSelectionStyles.playerName}>
                {index + 1}. {player}
              </Text>
            ))}
          </View>
        </View>

        {/* Equipo Visitante */}
        <View style={teamSelectionStyles.teamSelector}>
          <Text style={teamSelectionStyles.teamLabel}>VISITANTE</Text>
          
          <View style={teamSelectionStyles.selectorRow}>
            <TouchableOpacity 
              style={teamSelectionStyles.arrowButton} 
              onPress={() => changeAwayTeam(-1)}
            >
              <Text style={teamSelectionStyles.arrowText}>◄</Text>
            </TouchableOpacity>

            <TeamShield team={awayTeam} size={100} />

            <TouchableOpacity 
              style={teamSelectionStyles.arrowButton} 
              onPress={() => changeAwayTeam(1)}
            >
              <Text style={teamSelectionStyles.arrowText}>►</Text>
            </TouchableOpacity>
          </View>

          <Text style={teamSelectionStyles.teamName}>{awayTeam.name}</Text>

          <View style={teamSelectionStyles.playersContainer}>
            <Text style={teamSelectionStyles.playersTitle}>QUINTETO INICIAL</Text>
            {awayTeam.players.map((player, index) => (
              <Text key={index} style={teamSelectionStyles.playerName}>
                {index + 1}. {player}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={teamSelectionStyles.playButton}
        onPress={() => onPlayPress(homeTeam, awayTeam)}
      >
        <Text style={teamSelectionStyles.playButtonText}>▶ JUGAR</Text>
      </TouchableOpacity>

      <Text style={teamSelectionStyles.footer}>PRESIONA JUGAR</Text>
    </ScrollView>
  );
};