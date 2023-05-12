import TeamMember from "../TeamMember/TeamMember";
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import './Team.css'

const Team = () => {
    return (
        <div className="text-center">
                <p className="text-orange-600 font-bold">Team</p>
                <p className="text-3xl font-bold my-5">Meet Our Team</p>
                <p className="text-slate-500 text-xl px-48 mb-12"> the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                <div className="team-body">
                    <TeamMember img={img1}> </TeamMember>
                    <TeamMember img={img2}></TeamMember>
                    <TeamMember img={img3}></TeamMember>
                </div>
        </div>
    );
};

export default Team;