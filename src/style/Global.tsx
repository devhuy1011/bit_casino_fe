import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved

// import { GmarketSansTTFBold, GmarketSansTTFLight, GmarketSansTTFMedium } from 'assets/font/font'

// declare module 'styled-components' {
//   /* eslint-disable @typescript-eslint/no-empty-interface */
//   export interface DefaultTheme {}
// }

import Fonts from 'assets/font/font'

const GlobalStyle = createGlobalStyle`
 @font-face {
  font-family: 'NotoSansCJKkrBlack';
  src: url(${Fonts.NotoSansCJKkrBlack}) format('woff');
}
@font-face {
  font-family: 'NotoSansCJKkrBold';
  src: url(${Fonts.NotoSansCJKkrBold}) format('woff');
}
@font-face {
  font-family: 'NotoSansCJKkrDemiLight';
  src: url(${Fonts.NotoSansCJKkrDemiLight}) format('woff');
}
@font-face {
  font-family: 'NotoSansCJKkrLight';
  src: url(${Fonts.NotoSansCJKkrLight}) format('woff');
}
@font-face {
  font-family: 'NotoSansCJKkrMedium';
  src: url(${Fonts.NotoSansCJKkrMedium}) format('woff');
}
@font-face {
  font-family: 'NotoSansCJKkrRegular';
  src: url(${Fonts.NotoSansCJKkrRegular}) format('woff');
}
@font-face {
  font-family: 'NotoSansCJKkrThin';
  src: url(${Fonts.NotoSansCJKkrThin}) format('woff');
}

  body {
    background-color: #fff;
    color: #000;
    flex-grow: 0;
    margin: 0px;
    /* background-color: #f5f9fc; */
    
    img {
      height: auto;
      max-width: 100%;
    }
  }

  *{
    font-family: 'NotoSansCJKkrRegular';
    box-sizing: border-box;
  }

`

export default GlobalStyle
