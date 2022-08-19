import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>

  );
};

export default AppRoutes;
