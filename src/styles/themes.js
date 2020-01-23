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
  purple: {
    name: 'Purple',
    normal: colors.purple,
    light: colors.lightPurple
  },
  brown: {
    name: 'Brown',
    normal: colors.brown,
    light: colors.lightBrown
  },
  yellow: {
    name: 'Yellow',
    color: colors.darkText,
    normal: colors.yellow,
    light: colors.lightYellow
  },
  blue: {
    name: 'Blue',
    normal: colors.blue,
    light: colors.lightBlue
  }
};
