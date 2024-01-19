import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { RecoilRoot } from "recoil";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
