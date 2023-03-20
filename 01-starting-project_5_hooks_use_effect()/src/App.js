import React, { useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
 
  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      {/* <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout:logoutHandler
        }}> */}
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
