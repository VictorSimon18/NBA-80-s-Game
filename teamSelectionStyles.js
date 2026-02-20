import { StyleSheet } from 'react-native';

export const teamSelectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  // 1. Nombre de la app
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 2,
    borderBottomColor: '#00AA00',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#00FF00',
    textShadowColor: '#00AA00',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 0,
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 17,
    color: '#FFD700',
    fontFamily: 'monospace',
  },

  // 2 & 4. Selector de equipo
  teamBlock: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingVertical: 8,
  },
  teamLabel: {
    fontSize: 20,
    color: '#FF00FF',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginBottom: 24,
  },
  selectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    paddingHorizontal: 24,
  },
  arrowButton: {
    backgroundColor: '#00FF00',
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#00AA00',
  },
  arrowText: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  },
  selectorCenter: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginTop: 18,
  },

  // 3 & 5. Quinteto
  playersBlock: {
    backgroundColor: '#0a0a0a',
    borderWidth: 2,
    borderColor: '#FFD700',
    alignSelf: 'center',
    marginVertical: 3,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  playersTitle: {
    fontSize: 15,
    color: '#00FFFF',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 3,
  },
  playerName: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'monospace',
    marginVertical: 1,
  },

  // 6. Botón jugar
  footer: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderTopWidth: 2,
    borderTopColor: '#00AA00',
  },
  playButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 48,
    paddingVertical: 14,
    borderWidth: 4,
    borderColor: '#AA0000',
  },
  playButtonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});
