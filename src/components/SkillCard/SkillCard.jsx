import './SkillCard.scss';

export default function SkillCrad(props) {

    const { image, altText, title, description, skillsTitle, } = props;

    return (
        <div className='card'>
                <img className='card__icon' src={image} alt={altText} />
                <h3 className='card__title'> {title} </h3>
                <p className='card__description'> {description} </p>
                <h3 className='card__skills-title'> {skillsTitle} </h3>
                <ul className='card__skills'>
                    {props.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
        </div>
    );
}