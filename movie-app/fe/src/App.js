import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext/AuthProvider.js";
import routes from "./routers/config.js";
import PrivateRoute from "./routers/PrivateRoute.js";
import NotAuthRoute from "./routers/NotAuthRoute.js";
import PageNotFound from "./pages/errorpage/PageNotFound.jsx";
import ComingSoonPage from "./pages/commingsoon/ComingSoonPage.jsx";
const App = () => {
  const isDevelopment = true;
  const isLinkValid = (link) => {
    return link === "/valid-link";
  };
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {routes.map((route, index) => {
            const { path, component, isPrivate, notAuth } =
              route;
            return (
              <Route
                key={index}
                path={path}
                element={
                  isPrivate ? (
                    <PrivateRoute
                      component={component}
                    />
                  ) : notAuth ? (
                    <NotAuthRoute
                      component={component}
                    />
                  ) : (
                    component
                  )
                }
              />
            );
          })}
          {isDevelopment && isLinkValid(window.location.pathname) && (
            <Route path="*" element={<ComingSoonPage />} />
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;