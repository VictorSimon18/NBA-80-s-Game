import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TeamShield } from './TeamShield';
import { matchScreenStyles } from './matchScreenStyles';

export const MatchScreen = ({ homeTeam, awayTeam, onBack }) => {
  return (
    <ScrollView style={matchScreenStyles.container} contentContainerStyle={matchScreenStyles.scrollContent}>
      <Text style={matchScreenStyles.title}>BALONCESTO '84</Text>

      <View style={matchScreenStyles.scoreContainer}>
        <Text style={matchScreenStyles.scoreText}>27 - 19</Text>
      </View>

      <View style={matchScreenStyles.matchContainer}>
        {/* Equipo Local */}
        <View style={matchScreenStyles.matchTeam}>
          <TeamShield team={homeTeam} size={120} />
          <Text style={matchScreenStyles.matchTeamName}>{homeTeam.name}</Text>
          
          <View style={matchScreenStyles.matchPlayersContainer}>
            {homeTeam.players.map((player, index) => (
              <Text key={index} style={matchScreenStyles.matchPlayerName}>
                {player}
              </Text>
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
              <Text key={index} style={matchScreenStyles.matchPlayerName}>
                {player}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={matchScreenStyles.backButton}
        onPress={onBack}
      >
        <Text style={matchScreenStyles.backButtonText}>◄ VOLVER</Text>
      </TouchableOpacity>

      <Text style={matchScreenStyles.matchFooter}>¡PREPÁRATE!</Text>
    </ScrollView>
  );
};