import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
