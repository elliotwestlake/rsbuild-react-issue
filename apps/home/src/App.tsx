import { lazy } from "react";

const Navigation = lazy(() => import("navigation/app"));

const App = () => {
  return (
    <>
      <Navigation />
      <h1 style={{ color: "red" }}>Home</h1>
    </>
  );
};

export default App;
