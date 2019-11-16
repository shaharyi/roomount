import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./general/theme";
import { Input } from "./shared/Components/Input";
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        Header
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
