import './LearnMoreButton.scss';
import { Link } from 'react-router-dom';


export default function LearnMoreButton(props) {

    return (
            <Link to={{ pathname: props.webAddress}} target="_blank">
                <p className='button__learn-more'>Learn More</p>
             </Link>
    );
} 
