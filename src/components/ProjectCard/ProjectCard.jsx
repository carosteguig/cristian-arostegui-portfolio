import './ProjectCard.scss';
import LearnMoreButton from '../Buttons/LearnMoreButton/LearnMoreButton';
import RepositoryButton from '../Buttons/RepositoryButton/RepositoryButton';

export default function ProjectCard(props) {

    return (
        <div className='project-card'>
            <div className='project-card__container'>
                <h3 className='project-card__title'> {props.name} </h3>
                <p className='project-card__description'> {props.description} </p>
                <p className='project-card__tags'> {props.tags} </p>
                <div>
                    <LearnMoreButton 
                    // Passing props for Home (parent) to child (this component) 
                    // and now passing it to Learn more component (child component of Porject card)
                    webAddress={props.webAddress}
                    />
                    <RepositoryButton 
                    repoAddress={props.repoAddress}
                    />
                </div>
            </div>
            <div>

            </div>

        </div>
    );
}