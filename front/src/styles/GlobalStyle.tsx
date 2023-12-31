import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-brand-1: #5C63ED;
    --color-brand-2: #7D82F1;
    --color-brand-3: #BEC1F8;
    --color-brand-4: #E7E8FC;
    --color-grey-1: #212529;
    --color-grey-2: #495057;
    --color-grey-3: #CED3D7;
    --color-grey-4: #F1F3F5;
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
    
  }

  button {
    cursor: pointer;
  }

  img{
    width: 2rem;
    height: 2rem;
  }
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
	line-height: 1;
  }
  ol, ul {
	list-style: none;
  }
  blockquote, q {
	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
	content: '';
	content: none;
  }
  table {
	border-collapse: collapse;
	border-spacing: 0;
  }
`;