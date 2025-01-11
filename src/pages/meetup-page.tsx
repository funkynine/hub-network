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
					<h3>{record.description}</h3>

					<table style={{border: '1px solid #ccc'}}>
						<thead>
						<tr>
							<th>Тема meetup</th>
							<th>Дата проведення</th>
							<th>Офлайн/Онлайн</th>
							<th>Тривалість</th>
							<th>Кількість учасників</th>
							<th>Опис</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>Технології майбутнього</td>
							<td>2025-01-10</td>
							<td>Офлайн</td>
							<td>2 години</td>
							<td>25</td>
							<td>Обговорення інновацій в IT та технологічних стартапів.</td>
						</tr>
						<tr>
							<td>Кулінарний майстер-клас</td>
							<td>2025-01-12</td>
							<td>Офлайн</td>
							<td>3 години</td>
							<td>15</td>
							<td>Вивчення нових кулінарних технік та рецептів, приготування страв.</td>
						</tr>
						<tr>
							<td>Інвестування у стартапи</td>
							<td>2025-01-15</td>
							<td>Онлайн</td>
							<td>1.5 години</td>
							<td>30</td>
							<td>Поради від експертів щодо інвестування в стартапи та ризики.</td>
						</tr>
						<tr>
							<td>Йога та медитація</td>
							<td>2025-01-18</td>
							<td>Офлайн</td>
							<td>2 години</td>
							<td>20</td>
							<td>Релаксаційні вправи та медитація для зняття стресу і покращення здоров'я.</td>
						</tr>
						</tbody>
					</table>
				</p>
			),
			rowExpandable: (record) => record.name !== 'Not Expandable',
		}}
		dataSource={sortedData}

	/>
);

export default EmployeeSchedule;



