import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import Admin from './pages/admin/admin';

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
export default App;
