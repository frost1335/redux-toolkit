import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

import store from "./app/store";

const container = createRoot(document.getElementById("root"));
container.render(
  <BrowserRouter>
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  </BrowserRouter>
);
