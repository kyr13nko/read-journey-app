import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.jsx";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store/index.js";

import { GlobalStyles } from "./styles/GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <GlobalStyles />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
