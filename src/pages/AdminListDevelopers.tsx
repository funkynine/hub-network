import { Table, Tag, Checkbox } from "antd";
import { mockData } from "../mocks/mock-employees";
import "./AdminListDevelopers.css"; 

const projectColumns = ["Project A", "Project B", "Project C"];

function AdminListDevelopers() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "English Level",
      dataIndex: "englishLevel",
      key: "englishLevel",
    },
    {
      title: "Mentor",
      dataIndex: "mentor",
      key: "mentor",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Workload",
      dataIndex: "workload",
      key: "workload",
      render: (workload: string) => {
        let color = "green";
        if (workload === "Part-time") color = "blue";
        if (workload === "Bench") color = "red";
        return <Tag color={color}>{workload}</Tag>;
      },
    },
    ...projectColumns.map((project) => ({
      title: project,
      key: project,
      render: (_: any, record: any) => (
        <Checkbox checked={record.projects[project.toLowerCase().replace(/ /g, "")]} disabled />
      ),
    })),
  ];

  return (
    <div className="table-container">
      <Table columns={columns} dataSource={mockData} pagination={{ pageSize: 7 }} />
    </div>
  );
}

export default AdminListDevelopers;
