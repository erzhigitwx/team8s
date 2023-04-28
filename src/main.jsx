import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../public/fonts/style.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "./styles/Global.styles.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <GlobalStyles />
    </QueryClientProvider>
  </React.StrictMode>
);
