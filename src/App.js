import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './unAuth/components/Layout';
import LandingPage from './unAuth/components/LandingPage';
import FeaturesPage from './unAuth/components/FeaturesPage';
import ContactPage from './unAuth/components/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
