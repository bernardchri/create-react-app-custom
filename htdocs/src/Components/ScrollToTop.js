import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';


/**
 * ## ScrollToTop
 * @component wrapper autour d'un switch de react-router
 * @example 
 * <ScrollToTop>
 *    <Switch>
 *      <Route/>
 *    </Switch>
 * </ScrollToTop>
 * @param {*} param0 
 * @see ttps://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
 */

function ScrollToTop({ history, children }) {
 
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      // console.log("history")
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);