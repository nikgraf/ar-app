import React, { useState } from "react";
import ReactDOM from "react-dom";
import viewarApi from "viewar-api";
import { createGlobalStyle } from "styled-components";
import Ar from "./Ar";
import Welcome from "./Welcome";

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: hidden;
}

#app {
  pointer-events: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
`;

function App(props) {
  const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);

  return (
    <React.Fragment>
      <GlobalStyle />
      {isWelcomeScreen ? (
        <Welcome onClose={() => setIsWelcomeScreen(false)} />
      ) : (
        <Ar />
      )}
    </React.Fragment>
  );
}

async function init() {
  await viewarApi.init();
  ReactDOM.render(<App />, document.getElementById("app"));
}

init();
