import { useLocation } from "react-router-dom";
const App = ({ name }: { name: string }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <h1 style={{ color: "red" }}>{name} Navigations</h1>
    </>
  );
};

export default App;
