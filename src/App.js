import './App.css';
import React, {useEffect} from 'react'

import {Provider, useDispatch} from 'react-redux'
// import {configStore} from './state/store/configStore'
import {configstore} from './newapplication/store/congigstore'
import { Reduxapp } from './newapplication/Reduxapp';


function App() {
  const localstore=configstore()
 
  return (
    <div>
      <Provider store={localstore}>
     {/* <Home/> */}
     <Reduxapp/>
     </Provider>
     </div>
  );
}

export default App;
