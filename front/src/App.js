import Content from "./pages/Content";
import Header from './components/Header';
import ThemeProvider from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
