import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Table, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FormMessages } from '../constants/career-planning-form-messages.const';
const { TextArea } = Input;
const { Title } = Typography;
import './career-planning-page.scss';

const CareerPlanningPage = () => {
	const navigation = useNavigate();
	const [formData, setFormData] = useState({
		employeeName: '',
		overalExperience: '',
		expWithFive: '',
		meetingDate: '',
		reviewPeriod: '',
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		console.log('Form values:', formData);
	};

	const columns = [
		{
			title: 'Objective',
			dataIndex: 'objective',
			key: 'objective',
		},
		{
			title: 'Action Items',
			dataIndex: 'actionItems',
			key: 'actionItems',
		},
		{
			title: 'Success Criteria',
			dataIndex: 'successCriteria',
			key: 'successCriteria',
		},
		{
			title: 'Review Term',
			dataIndex: 'reviewTerm',
			key: 'reviewTerm',
		},
	];

	const dataSource = [
		{
			key: '1',
			objective: 'React Native',
			actionItems: `1) Course Udemy or Course Hunter
	2) Read documentation
	3) Pet project`,
			successCriteria: 'Test task, interview completing, working pet project',
			reviewTerm: '',
		},
		{
			key: '2',
			objective: 'React Query',
			actionItems: `1) YouTube tutorials
	2) Read documentation`,
			successCriteria: 'Working pet project',
			reviewTerm: '',
		},
		{
			key: '3',
			objective: 'Time Management',
			actionItems: `1) Read articles about time management
	2) Keep work-life balance
	3) Split tasks into smaller subtasks before implementation`,
			successCriteria: 'Improve performance, avoid overtimes',
			reviewTerm: '',
		},
	];

	const goBack = () => {
		navigation('/');
	};

	return (
		<div style={{ padding: '0px 20px' }}>
			<div className="back" onClick={goBack}>
				Back
			</div>
			<Title level={1} style={{ color: 'white' }}>
				Career Planning Form
			</Title>
			<Form layout="vertical" onFinish={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
				<Form.Item
					label={<span style={{ color: 'white' }}>Employee Name</span>}
					name="employeeName"
					rules={[{ required: true, message: FormMessages.Name }]}
				>
					<div className="add-skill">
						<Input
							placeholder="Enter employee name"
							onChange={handleInputChange}
							defaultValue={'John Doe'}
						/>
					</div>
				</Form.Item>
				<Form.Item
					label={<span style={{ color: 'white' }}>Overall Experience</span>}
					name="overallExperience"
					rules={[{ required: true, message: FormMessages.Exp }]}
				>
					<div className="add-skill">
						<Input
							placeholder="Enter overall experience"
							onChange={handleInputChange}
							defaultValue={'5 years'}
						/>
					</div>
				</Form.Item>
				<Form.Item
					label={<span style={{ color: 'white' }}>Exp with Five</span>}
					name="expWithFive"
					rules={[{ required: true, message: FormMessages.ExpWithFive }]}
				>
					<div className="add-skill">
						<Input placeholder="Enter experience with Five" defaultValue={'3 years'} />
					</div>
				</Form.Item>
				<Form.Item
					label={<span style={{ color: 'white' }}>Meeting Date</span>}
					name="meetingDate"
					rules={[{ required: true, message: FormMessages.MeetDate }]}
				>
					<div className="add-skill">
						<DatePicker style={{ width: '100%' }} />
					</div>
				</Form.Item>
				<Form.Item
					label={<span style={{ color: 'white' }}>Review Period</span>}
					name="reviewPeriod"
					rules={[{ required: true, message: FormMessages.ReviewPeriod }]}
				>
					{' '}
					<div className="add-skill">
						<Input placeholder="Enter review period" defaultValue={'6 months'} />
					</div>
				</Form.Item>
				<Table
					dataSource={dataSource}
					columns={columns}
					pagination={false}
					bordered
					style={{ marginBottom: '20px' }}
				/>
				<Form.Item
					label={<span style={{ color: 'white' }}>2-3 Hard Skills, 1-2 Soft Skills</span>}
					name="skills"
					rules={[{ required: true, message: FormMessages.Skills }]}
					initialValue={
						'Skilled in integrating RESTful APIs and GraphQL endpoints into frontend applications.Proficient in tools like Axios and React Query for efficient data fetching and caching.'
					}
				>
					<TextArea rows={4} placeholder="Enter skills" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" style={{ width: '100%' }}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default CareerPlanningPage;
