import './App.css';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import 'remixicon/fonts/remixicon.css'





function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
