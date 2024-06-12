import { Suspense, lazy } from "react";
import "./App.css";

const Navigation = lazy(() => import("navigation_app/app"));
const Home = lazy(() => import("home/app"));

const App = () => {
  return (
    <div className="content">
      <Navigation name="Shell" />
      <Home />
    </div>
  );
};

export default App;
