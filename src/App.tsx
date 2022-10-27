import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppProvider } from "../polaris/polaris-react";
import enTranslations from "../polaris/polaris-react/locales/en.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AppProvider i18n={enTranslations}>
        <div>Test</div>
      </AppProvider>
    </div>
  );
}

export default App;
