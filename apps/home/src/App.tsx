import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Navigation = lazy(() => import("navigation_app/app"));

const App = () => {
  return (
    <>
      <Navigation name="Home" />
      <Routes>
        <Route index element={<h1 style={{ color: "red" }}>Home</h1>} />
      </Routes>
    </>
  );
};

export default App;
