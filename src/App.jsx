import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Releases from "./pages/Releases";

function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={
          <Navigate
            to="/releases"
            replace
          />
        }
      />

      <Route
        path="/releases"
        element={<Releases />}
      />

      <Route
        path="/releases/:releaseNumber"
        element={<Releases />}
      />

    </Routes>
  );
}

export default App;