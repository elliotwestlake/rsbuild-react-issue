import { lazy } from "react";

const Navigation = lazy(() => import("navigation/app"));

const App = () => {
  return (
    <>
      <Navigation name="Home" />
      <h1 style={{ color: "red" }}>Home</h1>
    </>
  );
};

export default App;
