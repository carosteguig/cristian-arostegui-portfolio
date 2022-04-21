import './ProjectCard.scss';

export default function ProjectCard(props) {

    return (
        <div>
            <div>
                <h3> {props.name} </h3>
                <p> {props.description} </p>
                <p> {props.tags} </p>
                <div>
                    <button>Learn More</button>
                </div>
            </div>

        </div>
    );
}