import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import RouterComponent from './router'; // Import the RouterComponent

function App() {
  return (
    <div>
      <RouterComponent /> {/* This will handle routing */}
    </div>
  );
}

export default App;

