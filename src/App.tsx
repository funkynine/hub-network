import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ProfilePage from "./pages/profile-page.tsx";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<ProfilePage />} />
            {/*<Route path="/planing" element={<CarerPlaning />} />*/}
            {/*<Route path="/cv" element={<GeneratorCV />} />*/}
        </Routes>
      </Router>
  )
}

export default App
