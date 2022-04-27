import './ProjectCard.scss';
import ButtonSolid from '../Buttons/ButtonSolid/ButtonSolid';
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline';

export default function ProjectCard(props) {

    return (
        <div className='project-card'>
            <div className='project-card__container'>
                <h3 className='project-card__title'> {props.name} </h3>
                <p className='project-card__description'> {props.description} </p>
                <p className='project-card__tags'> {props.tags} </p>
                <div className='project-card__buttons'>
                    <ButtonOutline
                    // Passing props for Home (parent) to child (this component) 
                    // and now passing it to Learn more component (child component of Porject card)
                    text1={props.text1}
                    webAddress={props.webAddress}
                    />
                    <ButtonSolid
                    text2={props.text2}
                    webAddress2={props.webAddress2}
                    />
                </div>
            </div>
            <div>

            </div>

        </div>
    );
}