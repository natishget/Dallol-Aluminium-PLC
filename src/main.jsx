// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import './index.css'
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Make sure this path is correct

import Global_ENG from "./translation/english/global.json"
import Global_AMH from "./translation/amharic/global.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "ENG",
  resources: {
    ENG: {
      global: Global_ENG,
    },
    AMH: {
      global: Global_AMH,
    }
  }
})

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
