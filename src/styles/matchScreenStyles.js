import { StyleSheet } from 'react-native';

export const matchScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080810',
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },

  // Marcador
  scoreContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#0f0f20',
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700',
  },
  scoreLabel: {
    fontSize: 12,
    color: '#FF10F0',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    letterSpacing: 2,
    flex: 1,
    textAlign: 'center',
    textShadowColor: '#FF10F0',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  scoreText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F0F0FF',
    fontFamily: 'monospace',
    flex: 1,
    textAlign: 'center',
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

  // Escudo + nombre equipo
  shieldBlock: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#0f0f20',
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  teamName: {
    fontSize: 17,
    color: '#F0F0FF',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    letterSpacing: 2,
    marginTop: 6,
  },

  // Quinteto + puntos
  playersBlock: {
    width: '100%',
    backgroundColor: '#0a0a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  playersTitle: {
    fontSize: 11,
    color: '#00EEFF',
    fontFamily: 'monospace',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 2,
    textShadowColor: '#00EEFF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  playerInfo: {
    flex: 1,
  },
  matchPlayerName: {
    fontSize: 12,
    color: '#00EEFF',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  playerPoints: {
    fontSize: 11,
    color: '#FFD700',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  pointButtons: {
    flexDirection: 'row',
    gap: 5,
  },
  pointButton: {
    backgroundColor: '#0a2a12',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#00FF88',
    borderRadius: 3,
    minWidth: 34,
    alignItems: 'center',
  },
  threePointButton: {
    backgroundColor: '#2a0a10',
    borderColor: '#FF2244',
  },
  pointButtonText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },

  // Botón finalizar
  buttonsContainer: {
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  finishButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#996600',
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  finishButtonDisabled: {
    backgroundColor: '#2a2a3a',
    borderColor: '#444466',
  },
  finishButtonText: {
    fontSize: 13,
    color: '#080810',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    letterSpacing: 2,
  },
});
