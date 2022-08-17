import React from 'react';
import AppLayout from './common/Layout';
import "tailwindcss/tailwind.css";
import "../styles/globals.css"

type AppProps = {
  Component: React.ElementType;
};

function App({ Component }: AppProps) {
  return (
    <AppLayout>
      <Component />
    </AppLayout>
  );
}

export default App;