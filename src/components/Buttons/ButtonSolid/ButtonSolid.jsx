import './ButtonSolid.scss';
import { Link } from 'react-router-dom';


export default function ButtonSolid(props) {

    return (
            <Link to={{ pathname: props.webAddress2}} target="_blank">
                <p className='button__solid'>{props.text2}</p>
             </Link>
    );
} 
