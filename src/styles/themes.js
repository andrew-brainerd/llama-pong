import colors from './colors.scss';

/*
Theme Object

{
  categoryName: {
    name: 'Category Name',
    dark: 'HEX or RGB value',
    normal: 'HEX or RGB value',
    light: 'HEX or RGB value'
  }
}
*/

export default {
  red: {
    name: 'Red',
    normal: colors.red,
    light: colors.lightRed
  },
  yellow: {
    name: 'Yellow',
    color: colors.darkText,
    normal: colors.yellow,
    light: colors.lightYellow
  },
  teal: {
    name: 'Teal',
    normal: colors.teal,
    light: colors.lightTeal
  },
  blue: {
    name: 'Blue',
    normal: colors.blue,
    light: colors.lightBlue
  },
  purple: {
    name: 'Purple',
    normal: colors.purple,
    light: colors.lightPurple
  },
};
