import { StrictMode } from 'react';
import { ConfigProvider, theme } from 'antd';
import App from './App.tsx';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
  </StrictMode>
);