import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect } from "./helpers/routes";
import UserContext from "./context/user";
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Routes>
          <Route element={<IsUserRedirect user={user} />}>
            <Route path={ROUTES.SIGN_IN} element={<Signin />} />
            <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          </Route>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
