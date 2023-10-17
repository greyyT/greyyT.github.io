import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster containerStyle={{ top: 20 }} toastOptions={{ style: { zIndex: 999 } }} />
    <App />
  </React.StrictMode>,
);
