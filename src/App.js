import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { AuthorizedRoutes, UnAuthorizedRoutes } from "./routes";
import AddCollaborator from "./Pages/AddCollaborator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={
            <UnAuthorizedRoutes>
              <Register />
            </UnAuthorizedRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <UnAuthorizedRoutes>
              <Login />
            </UnAuthorizedRoutes>
          }
        />
        <Route
          path="/"
          element={
            <AuthorizedRoutes>
              <Home />
            </AuthorizedRoutes>
          }
        />
        <Route
          path="/add-collaborator"
          element={
            <AuthorizedRoutes>
              <AddCollaborator />
            </AuthorizedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
