import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from './pages/CreatePage';
import Navbar from "./componets/Navbar";
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="bg-[--dark-blue] h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
