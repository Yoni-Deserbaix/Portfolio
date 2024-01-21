import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
// import Notify from './components/notify';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      < Header />
      < Home />
      < About />
      < Projects />
      < Skills />
      < Contact />
      < Footer />
      {/* < Notify /> */}
    </div>
  );
};

export default App;