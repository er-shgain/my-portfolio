import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#06b6d4', // Premium Cyan
          colorBgContainer: '#0d1117',
          colorBorder: 'rgba(255, 255, 255, 0.08)',
          borderRadius: 12,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);