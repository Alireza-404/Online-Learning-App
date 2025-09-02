import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

import Store from "./Redux/Store.ts";
import Client from "./GraphQL/Client.ts";
import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={Client}>
    <Provider store={Store}>
      <App />
    </Provider>
  </ApolloProvider>
);
