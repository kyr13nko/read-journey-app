import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.jsx";

import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
