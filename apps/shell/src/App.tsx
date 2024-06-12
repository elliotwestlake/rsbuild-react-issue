import { lazy } from "react";
import "./App.css";

const Home = lazy(() => import("home/app"));
const Navigation = lazy(() => import("navigation/app"));

const App = () => {
  return (
    <div className="content">
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
