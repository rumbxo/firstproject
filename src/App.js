import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './unAuth/components/Layout';
import LandingPage from './unAuth/components/LandingPage';
import VideosPage from './unAuth/components/VideosPage';
import ProjectsPage from './unAuth/components/ProjectsPage';
import ContactPage from './unAuth/components/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
