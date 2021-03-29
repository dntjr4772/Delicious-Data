import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}
  @font-face {
    font-family: "HangeulNuri-Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: "HangeulNuri-Bold", sans-serif;
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  input {
    outline: none;
  }

  button {
    outline: none;
  }
`;
