import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot (document.getElementById("root"));

root.render(
<App />
)

