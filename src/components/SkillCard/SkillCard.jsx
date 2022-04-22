import './SkillCard.scss';

export default function SkillCrad(props) {

    return (
        <div className='card'>
                <img className='card__icon' src={props.image} alt={props.altText} />
                <h3 className='card__title'> {props.title} </h3>
                <p className='card__description'> {props.description} </p>
                <h3 className='card__skills-title'> {props.skillsTitle} </h3>
                <ul className='card__skills'>
                    {props.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
        </div>
    );
}