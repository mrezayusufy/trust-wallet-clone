const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const black = "#131111"
const gray = "#666";
const primary = "#3275ba"
const tintPrimary = "#2764a5";
const white = "white";

export default {
  light: {
    text: black,
    textLight: white,
    primary: primary,
    primaryTint: tintPrimary,
    secondary: gray,
    background: tintColorDark,
    tint: tintColorLight,
    tabIconDefault: gray,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: tintColorDark,
    primaryTint: tintPrimary,
    background: black,
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
