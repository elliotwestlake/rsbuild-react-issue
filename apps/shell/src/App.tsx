import { lazy } from "react";
import "./App.css";

const Home = lazy(() => import("home/app"));

const App = () => {
  return (
    <div className="content">
      <Home />
    </div>
  );
};

export default App;
