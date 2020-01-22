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
  orange: {
    name: 'Orange',
    normal: colors.orange,
    light: colors.lightOrange
  }
};
