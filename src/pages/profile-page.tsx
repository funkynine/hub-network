import Plate from "../components/plate.tsx";
import viteLogo from '/vite.svg'
import './profile-page.css';

const ProfilePage = (props) => {
    const categories = [
        {
            name: 'Meetups',
            type: 'Meetup'
        },
        {
            name: 'CV Generator',
            type: 'Meetup'
        },
        {
            name: 'Career planning',
            type: 'CareerPlanning'
        }
    ]

    return (
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
            {categories.map((category) => <Plate isClickable={true}>
                    {category.name}
                </Plate>)}
            </div>
        </div>
    );
}

export default ProfilePage;
