import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AdminListDevelopers from "./pages/AdminListDevelopers.tsx";
import ProfilePage from "./pages/profile-page.tsx";
import EmployeeSchedule from './pages/meetup-page.tsx';
import SkillsManagement from "./pages/SkillManagement.tsx";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/admin-list-developers" element={<AdminListDevelopers />} />
            <Route path="/x" element={<EmployeeSchedule/>}/>
            <Route path="/skill-management" element={<SkillsManagement />} />
            {/*<Route path="/planing" element={<CarerPlaning />} />*/}
            {/*<Route path="/cv" element={<GeneratorCV />} />*/}
        </Routes>
      </Router>
  )
}

export default App
