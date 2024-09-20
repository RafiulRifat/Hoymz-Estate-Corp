import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8iee6ndumnqslye8.us.auth0.com"
      clientId="CQ65ZevqpNNjRt2qsqZYXRKWG0p8EfpE"
      authorizationParams={{
        redirect_uri: "https://hoymz-estate-corp.vercel.app",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
