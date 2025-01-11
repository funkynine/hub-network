import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './pages/profile-page.tsx';
import CareerPlanningPage from './pages/career-planning-page.tsx';
import 'antd/dist/reset.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ProfilePage />} />
				<Route path="/planing" element={<CareerPlanningPage />} />
			</Routes>
		</Router>
	);
}

export default App;
