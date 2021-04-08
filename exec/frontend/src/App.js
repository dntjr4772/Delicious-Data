import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
