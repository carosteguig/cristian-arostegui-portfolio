import './SkillCard.scss';

export default function SkillCrad(props) {

    return (
        <div>
            <img src={props.image} alt={props.altText} />
            <h3> {props.title} </h3>
            <p> {props.description} </p>
            <h3> {props.skillsTitle} </h3>
            <ul>
                {props.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}