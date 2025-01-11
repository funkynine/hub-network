import React from 'react';
import {Table} from 'antd';
import './meetup-page.css'

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Number of meetup',
		dataIndex: 'numberOfMeetup',
		key: 'age',
	},
	{
		title: 'Last meetup',
		dataIndex: 'dataOfLastMeetup',
		key: 'address',
	},
	{
		title: 'The necessity of organizing a meetup',
		dataIndex: 'necessity',
		key: 'necessity',
	},
	{
		title: 'deadline',
		dataIndex: 'deadline',
		key: 'Deadline',
	},
];
const data = [
	{
		key: 1,
		name: 'John Brown',
		numberOfMeetup: 32,
		dataOfLastMeetup: '09.01.2024',
		description: 'Information about employee',
		necessity:'High',
		deadline:'09.01.2025'
	},
	{
		key: 2,
		name: 'Jim Green',
		numberOfMeetup: 42,
		dataOfLastMeetup: '09.01.2025',
		description: 'Information about employee',
		necessity:'Moderate',
		deadline:'09.01.2025'

	},
	{
		key: 3,
		name: 'Joe Black',
		numberOfMeetup: 32,
		dataOfLastMeetup: '09.01.2025',
		description: 'Information about employee',
		necessity:'Low',
		deadline:'09.01.2025'
	},
	{
		key: 4,
		name: 'Joe Black',
		numberOfMeetup: 32,
		dataOfLastMeetup: '09.01.2025',
		description: 'Information about employee',
		necessity:'High',
		deadline:'09.01.2025'
	},
	{
		key: 5,
		name: 'Joe Black',
		numberOfMeetup: 32,
		dataOfLastMeetup: '09.01.2025',
		description: 'Information about employee',
		necessity:'High',
		deadline:'09.01.2025'

	},
];

const sortedData = data.sort((a, b) => {
	const priorities = { 'Low': 1, 'Moderate': 2, 'High': 3 };
	return priorities[b.necessity] - priorities[a.necessity]; // Sort 'High' first
});


const EmployeeSchedule: React.FC = () => (
	<Table
		columns={columns}
		expandable={{
			expandedRowRender: (record) => (
				<p
					style={{
						margin: 0,
					}}
				>
					{record.description}
				</p>
			),
			rowExpandable: (record) => record.name !== 'Not Expandable',
		}}
		dataSource={sortedData}

	/>
);

export default EmployeeSchedule;



