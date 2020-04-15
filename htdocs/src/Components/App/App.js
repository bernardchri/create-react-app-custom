import '../../../src/Styles/App.scss'
import React from 'react';
import { AppContext } from '../../Context/AppContext';
import ScrollToTop from '../ScrollToTop';
import {  BrowserRouter as  Router, Switch } from 'react-router-dom';
import { RouteForTemplates } from '../Routes/RouteForTemplates';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

function App() {
  const dataRoutes = require('../Routes/RoutesLocal.json');
  const dataHeader = require('../Header/Header.json');

  return (
    <div className="App">
      <AppContext.Provider value={AppContext}>
        <Router>
        <ScrollToTop>
          <Header {...dataHeader} />
          <Switch>
                Content
                {dataRoutes ? (
										dataRoutes.data.map((route) => {
											return <RouteForTemplates key={route._uid} {...route} datas={ {}} />;
										})
									) : null}
            </Switch>
            <Footer/>
        </ScrollToTop>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
