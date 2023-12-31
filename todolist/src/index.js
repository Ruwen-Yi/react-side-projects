import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@coreui/coreui/dist/css/coreui.min.css'
import './css/global.css';
import './css/custom.css';

import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
