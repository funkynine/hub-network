import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Plate from '../components/plate.tsx';
import './SkillManagement.css';

const SkillsManagement = () => {
    const [skills, setSkills] = useState(JSON.parse(localStorage.getItem('skills')) ?? []);
    const [newSkill, setNewSkill] = useState("");
    const navigation = useNavigate()

    const addSkill = () => {
        if (newSkill && !skills?.includes(newSkill)) {
            const result = [...skills, newSkill];
            localStorage.setItem('skills', JSON.stringify(result));
            setSkills(result);
            setNewSkill("");
        }
    };

    const goBack = () => {
        navigation('/')
    }

    const removeSkill = (index) => {
        const result = skills.filter((_, i) => i !== index);
        localStorage.setItem('skills', JSON.stringify(result));
        setSkills(result);
    };

    return (
        <div className="skills-management">
            <div className="back" onClick={goBack}>Back</div>
            <div className="skills-management">
                <h2>Manage Skills</h2>

                { !skills?.length && (<div>Not found skills</div>) }

                <div className="skills-list">
                    {!!skills?.length && skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <Plate>
                                {skill}
                                <button className="remove-btn" onClick={() => removeSkill(index)}>×</button>
                            </Plate>
                        </div>
                    ))}
                </div>

                <div className="add-skill">
                    <input
                        type="text"
                        placeholder="New skill..."
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                    />
                    <button onClick={addSkill}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default SkillsManagement;
