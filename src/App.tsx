import './App.css';
import {HashRouter, Route, Routes} from 'react-router';
import {Home} from './route-components';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Add a 404 Catch-all */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
