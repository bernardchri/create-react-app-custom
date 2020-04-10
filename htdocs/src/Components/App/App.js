import React from 'react';
import '../../../src/Styles/App.scss'
import { AppContext } from '../../Context/AppContext';


function App() {
  return (
    <div className="App">
      <AppContext.Provider value={AppContext}>
        Header
        Content
        Footer
      </AppContext.Provider>
    </div>
  );
}

export default App;
