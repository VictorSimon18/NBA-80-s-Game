import { StyleSheet } from 'react-native';

export const teamShieldStyles = StyleSheet.create({
  shieldContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shield: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    transform: [{ rotate: '45deg' }],
    overflow: 'hidden',
  },
  logoImage: {
    transform: [{ rotate: '-45deg' }],
  },
});