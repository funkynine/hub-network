import { useState } from 'react';
import ModalEnterLink from '../components/Modal.tsx';
import Plate from '../components/plate.tsx';
import { useNavigate } from 'react-router-dom';
import viteLogo from '/vite.svg';
import { categories } from '../mocks/mock-data.ts';
import './profile-page.css';
import { generatePdf } from '../shared/pdfGeneratorCV.ts';

const ProfilePage = props => {
	const [modalState, setModalState] = useState(false);
	const [userRole, setUserRole] = useState('');
	const navigate = useNavigate();
	const skills = JSON.parse(localStorage.getItem('skills'));

	const handleClickCategory = category => {
		switch (category.type) {
			case 'DailyReports':
				const link = localStorage.getItem('dailyReportLink');

				if (link) {
					window.open(link);
				} else {
					setModalState(true);
				}
				break;
			case 'AdminListDevelopers':
				navigate('admin-list-developers');
				break;
			case 'SkillManagement':
				navigate('skill-management');
				break;
			case 'Meetups':
				navigate('meetups');
				break;
			case 'CareerPlanning':
				navigate('planing');
				break;
			default:
				break;
		}
	};

	const toggleUserRole = () => {
		setUserRole(prevRole => (prevRole === 'Admin' ? '' : 'Admin'));
	};

	return (
		<>
			<div className="profile-page">
				<Plate className="profile-page-main">
					<div className="avatar">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</div>
					<div className="name">Ihor Bazyliuk</div>
					<div className="position">Front-end hub leader</div>
					<div className="skills">
						{skills?.length &&
							skills.map((skill, index) => (
								<div key={index} className="skill-label">
									{skill}
								</div>
							))}
					</div>
				</Plate>

				<div className="profile-page__categories">
					{categories.map((category, index) => {
						const isHaveAccess = category.role.includes(userRole);
						return (
							<div
								className={isHaveAccess ? '' : 'hide'}
								key={index}
								onClick={() => handleClickCategory(category)}
							>
								<Plate
									isClickable={true}
									key={category.name}
									onClick={category.name === 'CV Generator' ? generatePdf : undefined}
								>
									{category.name}
								</Plate>
							</div>
						);
					})}
				</div>

				<button className="toggle-role-button" onClick={toggleUserRole}>
					Change Role
				</button>
			</div>
			<ModalEnterLink state={modalState} setStateModal={setModalState}></ModalEnterLink>
		</>
	);
};

export default ProfilePage;
