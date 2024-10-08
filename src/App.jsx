import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import NewPage from "./pages/New/NewPage";
import OriginPage from "./pages/Origin/OriginPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new" element={<NewPage />} />
                <Route path="/origin" element={<OriginPage />} />
            </Routes>
        </div>
    );
}

export default App;
