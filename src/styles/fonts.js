import { css } from 'lit-element';

const family = {
  palatino: css`"Palatino Linotype", serif;`,
  roboto: css`'Roboto', sans-serif;`,
};

const weight = {
  thin: css`100`,
  light: css`300`,
  regular: css`400`,
  bold: css`600`,
};

const size = {
  xsmall: css`10px`,
  small: css`15px`,
  medium: css`18px`,
  large: css`22px`,
  xlarge: css`25px`,
};

const fonts = {
  tag: css`${weight.thin} ${size.small} ${family.roboto}`,
  footer: css`${weight.light} ${size.small} ${family.roboto}`,
};

export default fonts;


const robotoFont = css`
  /* roboto-100 - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
  @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 100;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100.eot'); /* IE9 Compat Modes */
      src: local('Roboto Thin'), local('Roboto-Thin'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-300 - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300.eot'); /* IE9 Compat Modes */
      src: local('Roboto Light'), local('Roboto-Light'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-300italic - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 300;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300italic.eot'); /* IE9 Compat Modes */
      src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300italic.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300italic.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300italic.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-100italic - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 100;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100italic.eot'); /* IE9 Compat Modes */
      src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100italic.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100italic.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-100italic.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-regular - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-regular.eot'); /* IE9 Compat Modes */
      src: local('Roboto'), local('Roboto-Regular'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-regular.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-regular.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-regular.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-regular.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-500 - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500.eot'); /* IE9 Compat Modes */
      src: local('Roboto Medium'), local('Roboto-Medium'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-italic - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 400;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-italic.eot'); /* IE9 Compat Modes */
      src: local('Roboto Italic'), local('Roboto-Italic'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-italic.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-italic.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-italic.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-italic.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-700 - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700.eot'); /* IE9 Compat Modes */
      src: local('Roboto Bold'), local('Roboto-Bold'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-500italic - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 500;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500italic.eot'); /* IE9 Compat Modes */
      src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500italic.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500italic.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-500italic.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-700italic - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 700;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700italic.eot'); /* IE9 Compat Modes */
      src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700italic.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700italic.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700italic.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-900 - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900.eot'); /* IE9 Compat Modes */
      src: local('Roboto Black'), local('Roboto-Black'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-900italic - latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic */
    @font-face {
      font-family: 'Roboto';
      font-style: italic;
      font-weight: 900;
      src: url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900italic.eot'); /* IE9 Compat Modes */
      src: local('Roboto Black Italic'), local('Roboto-BlackItalic'),
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900italic.woff2') format('woff2'), /* Super Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900italic.woff') format('woff'), /* Modern Browsers */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
          url('../font/roboto-v20-latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-900italic.svg#Roboto') format('svg'); /* Legacy iOS */
    }
`;

export default {
  robotoFont,
}