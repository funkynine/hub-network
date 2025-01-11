import { useState } from "react";
import ModalEnterLink from "../components/Modal.tsx";
import Plate from "../components/plate.tsx";
import viteLogo from '/vite.svg'
import { categories } from '../mocks/mock-data.ts'
import './profile-page.css';

const ProfilePage = (props) => {
    const [modalState, setModalState] = useState(false)
    const userRole = '';

    const handleClickCategory = (category) => {
        if (category.type === 'DailyReports') {
            const link = localStorage.getItem('dailyReportLink');
            console.log("=>(profile-page.tsx:16) link", link);

            if (link) {
                window.open(link);
            } else {
                setModalState(true);
            }
        }
    }

    return (
        <>
            <div className="profile-page">
               <Plate className="profile-page-main">
                   <div className="avatar">
                       <img src={viteLogo} className="logo" alt="Vite logo"/>
                   </div>
                   <div className="name">Ihor Bazyliuk</div>
                   <div className="position">Front-end hub leader</div>
                   <div className="skills">
                       <div className="skill-label">
                           React
                       </div>
                       <div className="skill-label">
                           Angular
                       </div>
                       <div className="skill-label">
                           Vue
                       </div>
                   </div>
               </Plate>

                <div className="profile-page__categories">
                    {
                        categories.map((category, index) => {
                            const isHaveAccess = category.role.includes(userRole);
                            return  (<div className={isHaveAccess ? '' : 'hide'} key={index} onClick={() => handleClickCategory(category)}>
                                <Plate isClickable={true}>{category.name}</Plate>
                            </div>)
                        })
                    }
                </div>
            </div>
            <ModalEnterLink state={modalState} setStateModal={setModalState}></ModalEnterLink>
        </>
    );
}

export default ProfilePage;
