import React from 'react';
import GlobalStyles from './styles/global';

import Welcome from './components/Welcome';
import About from './components/About';
import MyResume from './components/MyResume';
import MyWorks from './components/MyWorks';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Welcome />
      <About />
      <MyResume />
      <MyWorks />
      <Contact />
      <GlobalStyles />
    </>
  );
}

export default App;
