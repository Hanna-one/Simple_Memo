import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { useState } from "react";
import { darkTheme, lightTheme } from "./style/Theme";
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Content from "./pages/Content";

function App() {

  const [themeMode, setThemeMode] = useState("lightTheme");

  function handleTheme(){
    if (themeMode == "lightTheme") {
      setThemeMode("darkTheme");
    } else {
      setThemeMode("lightTheme");
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={themeMode == "lightTheme" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header themeMode={themeMode} handleTheme={handleTheme} />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
