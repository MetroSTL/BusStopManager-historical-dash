import './App.css';
import React, {useState, useEffect} from 'react';
import loginIcon from './assets/login.svg';
import Dashboard from './component/Dashboard';
import getRecords from './hooks/getRecords';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  
  const load = () => {
    const fullHash = document.location.hash.split('#')[1];

    if (fullHash) {
      const params = JSON.parse('{"' + decodeURI(fullHash).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
      setSignedIn(true);
      setUser(params.username.replace('%40','@'));
      return params.access_token
    } else {
      return '';
    }
  };
  
  const getToken = () => {
    var redirectUri = `${process.env.REACT_APP_REDIRECT_URI}`;
    var clientID = `${process.env.REACT_APP_ID}`;
    window.location.href = 'https://metroas08.metrostlouis.org/arcgis/sharing/rest/oauth2/authorize?client_id=' + clientID + '&response_type=token&redirect_uri=' + window.encodeURIComponent(redirectUri) + 'oauth-window' +'height=400,width=600,menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes';
  };

  useEffect(() => {
    setToken(load());
    if(signedIn){
      
    }

  }, [])

  return (
    <div className="App">
      <div id="top-bar" class="w-100 flex">
          <h3>{signedIn ? user : '' }</h3>

          <button id="sign-in" class="w-20 items-center ml-auto" onClick={getToken}>
              <img id="sign-in-icon" src={loginIcon} alt='signin' />
          </button>
      </div>
      <div id='dashboard'>
        <Dashboard token={token} />
      </div>
    </div>
  );
}

export default App;
