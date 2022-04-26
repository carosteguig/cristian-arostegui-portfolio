import './ProjectCard.scss';
import LearnMoreButton from '../Buttons/LearnMoreButton/LearnMoreButton';

export default function ProjectCard(props) {

    return (
        <div className='project-card'>
            <div className='project-card__container'>
                <h3 className='project-card__title'> {props.name} </h3>
                <p className='project-card__description'> {props.description} </p>
                <p className='project-card__tags'> {props.tags} </p>
                <div>
                    <LearnMoreButton 
                    webAddress
                    />
                </div>
            </div>
            <div>

            </div>

        </div>
    );
}