import React from 'react';
import { View, Image } from 'react-native';
import { teamShieldStyles } from './teamShieldStyles';

export const TeamShield = ({ team, size = 80 }) => (
  <View style={[teamShieldStyles.shieldContainer, { 
    width: size, 
    height: size,
  }]}>
    <View style={[teamShieldStyles.shield, { 
      width: size, 
      height: size, 
      backgroundColor: team.color,
      borderColor: '#FFD700'
    }]}>
      <Image 
        source={team.logo}
        style={[teamShieldStyles.logoImage, {
          width: size * 0.7,
          height: size * 0.7,
        }]}
        resizeMode="contain"
      />
    </View>
  </View>
);