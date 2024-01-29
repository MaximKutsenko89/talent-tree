import { Global } from "@emotion/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import globalStyles from "./global.styled.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Global styles={globalStyles} />
    <App />
  </>
);
