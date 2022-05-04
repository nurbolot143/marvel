import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app/App";
import MarvelService from "./services/MarvelService";

import "./style/style.scss";

const marvelService = new MarvelService();

marvelService
  .getCharahter(1011291)
  .then((res) => console.log(res.data.results));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
