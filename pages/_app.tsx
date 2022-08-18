import React from 'react';
import Layout from './common/Layout';
import "tailwindcss/tailwind.css";
import "../styles/globals.css"

type AppProps = {
  Component: React.ElementType;
};

function App({ Component }: AppProps) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export default App;