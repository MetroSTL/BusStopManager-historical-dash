import MetroLogo from '../assets/metrologo.png'
import loginIcon from '../assets/login.svg';
import React, {useState, useEffect} from 'react';


export default function TopBar({signedIn, setUser, user, token, setToken, setSignedIn}) {

    const load = () => {
        // login restriction logic
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
        window.location.href = 'https://maps.metrostlouis.org/arcgis/sharing/rest/oauth2/authorize?client_id=' + clientID + '&response_type=token&redirect_uri=' + window.encodeURIComponent(redirectUri) + 'oauth-window' +'height=400,width=600,menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes';
      };
    
      useEffect(() => {
        setToken(load());
      }, [token])

    return (
        <div id="top-bar" class="w-100 flex my-4 p-4 justify-between h-16 align-middle">
            <h3>{signedIn ? user : 'Please Sign in' }</h3>

            <div className='flex flex-row '>
                <img src={MetroLogo} alt='Metro Saint Louis Logo'></img>
                <h2 className='text-2xl text-bold'>Metro Saint Louis</h2>
            </div>

            <button id="sign-in" class="flex w-20" onClick={getToken}>
                <img id="sign-in-icon" src={loginIcon} alt='signin'  />
            </button>
        </div>
    )
}
