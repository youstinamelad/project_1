import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import{RecoilRoot} from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RecoilRoot>
      <App />
      </RecoilRoot>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
