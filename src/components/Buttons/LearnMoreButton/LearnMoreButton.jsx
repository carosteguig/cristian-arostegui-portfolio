import './LearnMoreButton.scss';
import { Link } from 'react-router-dom';


export default function LearnMoreButton(props) {

    return (
            <Link to={props.webAddress}>
                <p className='button__learn-more'>Learn More</p>
             </Link>
    );
} 

{/* <SkillCard
    image={WebDevIcon}
    altText='code icon'
    title='Web Developer'
    description='You know the feeling when a line of code works!  Looking forward to getting many more of those. Excited to what comes later'
    skillsTitle='Skills'
    skills={webDevSkills}
/> */}