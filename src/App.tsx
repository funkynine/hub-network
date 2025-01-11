import './assets/styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ProfilePage from "./pages/profile-page.tsx";
import EmployeeSchedule from './pages/meetup-page.tsx';

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/x" element={<EmployeeSchedule/>}/>
            {/*<Route path="/planing" element={<CarerPlaning />} />*/}
            {/*<Route path="/cv" element={<GeneratorCV />} />*/}
        </Routes>
      </Router>
  )
}

export default App
