import './RepositoryButton.scss';
import { Link } from 'react-router-dom';


export default function RepositoryButton(props) {

    return (
            <Link to={{ pathname: props.repoAddress}} target="_blank">
                <p className='button__repo'>Repository</p>
             </Link>
    );
} 