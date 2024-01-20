import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Notify from './components/notify';

const App = () => {
  return (
    <div>
      < Header />
      < Home />
      < About />
      < Projects />
      < Notify />
    </div>
  );
};

export default App;