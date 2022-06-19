import "./App.css";
import { Routes, Route } from "react-router-dom";
import Activities from "./pages/Activities";
import ActivitiesDetail from "./pages/ActivitiesDetail";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
      <div id="content">
        <Routes>
          <Route path="/" element={<Activities />} />
          <Route
            path="/ActivitiesDetail/:Activity_id"
            element={<ActivitiesDetail />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
