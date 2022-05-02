import './ProjectCard.scss';
import ButtonSolid from '../Buttons/ButtonSolid/ButtonSolid';
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline';

export default function ProjectCard(props) {

    const { name, description, tags, webAddress, text1, webAddress2, text2 } = props;

    return (
        <div className='project-card'>
            <div className='project-card__container'>
                <h3 className='project-card__title'> {name} </h3>
                <p className='project-card__description'> {description} </p>
                <p className='project-card__tags'> {tags} </p>
                <div className='project-card__buttons'>
                    <ButtonOutline
                    // Passing props for Home (parent) to child (this component) 
                    // and now passing it to Learn more component (child component of Porject card)
                    text1={text1}
                    webAddress={webAddress}
                    />
                    <ButtonSolid
                    text2={text2}
                    webAddress2={webAddress2}
                    />
                </div>
            </div>
            <div>

            </div>

        </div>
    );
}