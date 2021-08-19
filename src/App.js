import './App.css';
import React, {useEffect} from 'react'
import { Home } from './Components/Home';
import {Provider, useDispatch} from 'react-redux'
import {configStore} from './state/store/configStore'


function App() {
  const localstore=configStore()
 
  return (
    <div>
      <Provider store={localstore}>
     <Home/>
     </Provider>
     </div>
  );
}

export default App;
