import { StyleSheet } from 'react-native';
import { COLORS, FONT_FAMILY, glowText, glowBorder, hp, wp } from './theme';

export const matchScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // 1. Nombre de la app
  header: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp(3),
    backgroundColor: COLORS.backgroundDark,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.neonGreenDark,
  },
  title: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.8),
    color: COLORS.neonGreen,
    ...glowText(COLORS.neonGreenDark, 10),
  },

  // 2. Marcador
  scoreZone: {
    flex: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.backgroundDark,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.neonYellowDark,
  },
  scoreTeamName: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.0),
    color: COLORS.white,
  },
  scoreText: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(3.2),
    color: COLORS.neonYellow,
    ...glowText(COLORS.neonYellow, 12),
    fontWeight: 'bold',
  },
  scoreDash: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(2.2),
    color: COLORS.white,
    marginHorizontal: 4,
  },

  // 3 & 5. Bloque escudo + nombre de equipo
  teamBlock: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgroundDark,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  teamLabel: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(0.9),
    color: COLORS.neonMagenta,
    ...glowText(COLORS.neonMagentaDark, 6),
    marginBottom: hp(1.0),
  },
  matchTeamName: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.1),
    color: COLORS.neonCyan,
    ...glowText(COLORS.neonCyanDark, 4),
    textAlign: 'center',
    marginTop: hp(1.0),
  },

  // 4 & 6. Bloque jugadores con puntos
  playersBlock: {
    flex: 2.8,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.neonYellowDark,
    marginHorizontal: wp(2),
    marginVertical: hp(0.2),
    paddingHorizontal: wp(2),
    ...glowBorder(COLORS.neonYellowDark),
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingHorizontal: 2,
  },
  playerName: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(0.9),
    color: COLORS.neonCyan,
    flex: 1,
  },
  playerPoints: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(0.9),
    color: COLORS.neonYellow,
    marginHorizontal: 4,
    minWidth: 24,
    textAlign: 'right',
  },
  pointButtons: {
    flexDirection: 'row',
    gap: 3,
  },
  pointButton: {
    backgroundColor: COLORS.neonGreenDark,
    width: hp(4),
    height: hp(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.neonGreen,
  },
  threePointButton: {
    backgroundColor: COLORS.neonRedDark,
    borderColor: COLORS.neonRed,
  },
  pointButtonText: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(0.9),
    color: COLORS.white,
  },

  // 7. Footer con botones
  footer: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(4),
    paddingHorizontal: wp(3),
    backgroundColor: COLORS.backgroundDark,
    borderTopWidth: 2,
    borderTopColor: COLORS.neonYellowDark,
  },
  finishButton: {
    backgroundColor: COLORS.neonYellow,
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.0),
    borderWidth: 3,
    borderColor: COLORS.neonYellowDark,
    ...glowBorder(COLORS.neonYellow),
  },
  finishButtonDisabled: {
    backgroundColor: COLORS.disabled,
    borderColor: COLORS.disabledBorder,
    shadowOpacity: 0,
    elevation: 0,
  },
  finishButtonText: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.1),
    color: COLORS.background,
  },
  backButton: {
    backgroundColor: COLORS.neonBlueDark,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.0),
    borderWidth: 2,
    borderColor: COLORS.neonBlue,
  },
  backButtonText: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(1.0),
    color: COLORS.white,
  },
  tiedMessage: {
    fontFamily: FONT_FAMILY,
    fontSize: hp(0.8),
    color: COLORS.neonMagenta,
    ...glowText(COLORS.neonMagentaDark, 6),
    textAlign: 'center',
    marginTop: 2,
  },
});
