import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './pages/profile-page.tsx';
import AdminListDevelopers from './pages/AdminListDevelopers.tsx';
import EmployeeSchedule from './pages/meetup-page.tsx';
import SkillsManagement from './pages/SkillManagement.tsx';
import CareerPlanningPage from './pages/career-planning-page.tsx';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ProfilePage />} />
				<Route path="/admin-list-developers" element={<AdminListDevelopers />} />
				<Route path="/meetups" element={<EmployeeSchedule />} />
				<Route path="/skill-management" element={<SkillsManagement />} />
				<Route path="/planing" element={<CareerPlanningPage />} />
			</Routes>
		</Router>
	);
}

export default App;
