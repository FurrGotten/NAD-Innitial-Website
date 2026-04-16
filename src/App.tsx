import './App.css';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router';
import {Home} from './route-components';

function App() {
  const isGitHubPages = window.location.hostname.includes('github.io');
  const Router = isGitHubPages ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Add a 404 Catch-all */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
