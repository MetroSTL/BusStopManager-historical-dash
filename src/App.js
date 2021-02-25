import './App.css';
import './tailwind.min.css'
import React, {useState, useEffect} from 'react';
import Dashboard from './component/Dashboard';
import TopBar from './component/TopBar';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  


  return (
    <div className="App">
        <TopBar signedIn={signedIn} user={user} token={token} setUser={setUser} setSignedIn={setSignedIn} setToken={setToken} />
        <Dashboard token={token} />
    </div>
  );
}

export default App;
