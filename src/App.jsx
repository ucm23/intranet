import { Route, Routes } from "react-router-dom";
import './styles/styles.css';
import Index from "./pages/Index";

function App() {
    return (
        <Routes>
            <Route index element={<Index />} />
            <Route path="*" element={<Index />} />
        </Routes>
    );
}

export default App;
