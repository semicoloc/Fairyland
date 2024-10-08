import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import NewPage from "./pages/New/NewPage";
import OriginPage from "./pages/Origin/OriginPage";
import { Header } from "./components";

function App() {
    return (
        <div>
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/new" element={<NewPage />} />
                    <Route path="/origin" element={<OriginPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
