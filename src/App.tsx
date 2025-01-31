import React from 'react';
import './App';
import HomePage from './components/HomePage/HomePage';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <HomePage/>
      </ThemeProvider>
    </div>
  );
};

export default App;
