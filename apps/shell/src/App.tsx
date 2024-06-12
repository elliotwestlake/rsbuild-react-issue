import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const Navigation = lazy(() => import("navigation_app/app"));
const Home = lazy(() => import("home/app"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="content">
        <Navigation name="Shell" />
        <Home />
      </div>
    </BrowserRouter>
  );
};

export default App;
