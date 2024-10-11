import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import NewPage from "./pages/New/NewPage";
import OriginPage from "./pages/Origin/OriginPage";
import { Footer, Header } from "./components";
import OriginStoryPage from "./pages/OriginStory/OriginStoryPage";
import NewStoryPage from "./pages/NewStory/NewStoryPage";

function App() {
    return (
        <div>
            <Header />
            <div className="gif">
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/new" element={<NewPage />} />
                        <Route path="/origin" element={<OriginPage />} />
                        <Route
                            path="/origin-story/:id"
                            element={<OriginStoryPage />}
                        />
                        <Route
                            path="/new-story/:id"
                            element={<NewStoryPage />}
                        />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
