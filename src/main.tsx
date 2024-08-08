// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "normalize.css";
import "./index.css";
import "@utils/notiflixConfig";
import { Provider } from "react-redux";
import { store, persistor } from "@redux/store";
import { BrowserRouter } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
