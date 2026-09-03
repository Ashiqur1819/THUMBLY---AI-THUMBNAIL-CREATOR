import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import GeneratePage from "./pages/GeneratePage";
import MyGenerationPage from "./pages/MyGenerationPage";
import YtPreviewPage from "./pages/YtPreviewPage";
import Login from "./components/Login";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generate/:id" element={<GeneratePage />} />
                <Route path="/my-generation" element={<MyGenerationPage />} />
                <Route path="/preview" element={<YtPreviewPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
}