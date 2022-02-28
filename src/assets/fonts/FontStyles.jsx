import { createGlobalStyle } from "styled-components";
import Avenir from "./avenir-next-lt-pro-demi.otf";
import LemonMedium from "./LEMONMILK-Medium.otf";
import Quicksand from "./Quicksand-VariableFont_wght.ttf";
import SourceSans from "./SourceSansPro-Regular.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Avenir';
  src: url(${Avenir});
}

@font-face {
  font-family: 'LemonMedium';
  src: url(${LemonMedium});
}

@font-face {
  font-family: 'Quicksand';
  src: url(${Quicksand});
}
@font-face {
  font-family: 'SourceSans';
  src: url(${SourceSans});
}

h1{font-family: 'LemonMedium'}

h2{font-family: 'LemonMedium';}

h3{font-family: 'SourceSans'}

h4{font-family: 'Avenir';}

p{font-family: 'Quicksand'}
`;

export default FontStyles;