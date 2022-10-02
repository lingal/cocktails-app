import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle` 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #000;

  line-height: 1.4;
  font-size: 1rem;
  font-weight: 300;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 1.25rem;
  letter-spacing: 2px;
}
p {
  margin-bottom: 1.25rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #000;
}
img {
  width: 100%;
  display: block;
}

`;
