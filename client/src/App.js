import "./App.css";
import { Routes, Route } from "react-router-dom";
import Activities from "./pages/Activities";
import ActivitiesDetail from "./pages/ActivitiesDetail";
import { FilterProvider } from "./components/Context/FilterContext";
import Home from "./components/Home";

function App() {
  return (
    <>
      <FilterProvider>
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
      </FilterProvider>
    </>
  );
}

export default App;
