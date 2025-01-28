import React, { useState } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent/HomeComponent';
import { Iprops } from './assets/interface';

function App() {
  const [appData, setAppData] = useState<Iprops>({
    title: 'App Title', header: 'App Header', footer: 'App Footer',
    body: 'App Body'
  });

  const handleClick = (args : Iprops) =>{
    setAppData(args);
  };

  return (
    <div className="App">
      <HomeComponent {...appData} click={handleClick} />
    </div>
  );
}

export default App;
