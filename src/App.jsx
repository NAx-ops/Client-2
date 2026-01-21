import React from 'react';
import Layout from './components/Layout';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Layout>
        <Gallery />
        <About />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
