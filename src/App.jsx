import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NumberPage } from "./pages/NumberPage";
import { AuthContext } from "./context/AuthContext";
import { CodePage } from "./pages/CodePage";
import { TwoCodePage } from "./pages/TwoCodePage";
import { FinalPage } from "./pages/FinalPage";

const App = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/numberpage" element={<NumberPage />} />
          <Route path="/codepage" element={<CodePage />} />
          <Route path="/twocodepage" element={<TwoCodePage />} />
          <Route path="/finalpage" element={<FinalPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
};

export default App;
