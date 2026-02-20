import { StyleSheet } from 'react-native';
import { COLORS, FONT_FAMILY, glowText, glowBorder, hp, wp } from './theme';

export const teamSelectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // 1. Header - nombre de la app
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp(3),
    backgroundColor: COLORS.backgroundDark,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.neonGreenDark,
  },
  title: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(2.2),
    color: COLORS.neonGreen,
    ...glowText(COLORS.neonGreenDark, 10),
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.1),
    color: COLORS.neonYellow,
    ...glowText(COLORS.neonYellowDark, 6),
  },

  // 2 & 4. Bloque selector de equipo (etiqueta + flechas + escudo + nombre)
  teamBlock: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgroundDark,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingVertical: hp(0.5),
  },
  teamLabel: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.5),
    color: COLORS.neonMagenta,
    ...glowText(COLORS.neonMagentaDark, 6),
    marginBottom: hp(3.6),
  },
  selectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(3),
    width: '100%',
    paddingHorizontal: wp(6),
  },
  arrowButton: {
    backgroundColor: COLORS.neonGreen,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.neonGreenDark,
  },
  arrowText: {
    fontSize: 22,
    color: COLORS.background,
    fontWeight: 'bold',
  },
  selectorCenter: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(2.0),
    color: COLORS.white,
    textAlign: 'center',
    marginTop: hp(3.0),
  },

  // 3 & 5. Bloque quinteto - se ajusta al contenido
  playersBlock: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.neonYellowDark,
    marginHorizontal: wp(4),
    marginVertical: hp(0.4),
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.7),
    ...glowBorder(COLORS.neonYellowDark),
  },
  playersTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.0),
    color: COLORS.neonCyan,
    ...glowText(COLORS.neonCyanDark, 4),
    marginBottom: hp(0.4),
    textAlign: 'center',
  },
  playerName: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.0),
    color: COLORS.white,
    marginVertical: 2,
  },

  // 6. Footer con botón jugar
  footer: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgroundDark,
    borderTopWidth: 2,
    borderTopColor: COLORS.neonGreenDark,
  },
  playButton: {
    backgroundColor: COLORS.neonRed,
    paddingHorizontal: wp(12),
    paddingVertical: hp(1.2),
    borderWidth: 3,
    borderColor: COLORS.neonRedDark,
    ...glowBorder(COLORS.neonRed),
  },
  playButtonText: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.6),
    color: COLORS.white,
    ...glowText(COLORS.white, 4),
  },
});
