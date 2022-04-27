import './ButtonOutline.scss';
import { Link } from 'react-router-dom';


export default function ButtonOutline(props) {

    return (
            <Link to={{ pathname: props.webAddress}} target="_blank">
                <p className='button__outline'>{props.text1}</p>
             </Link>
    );
} 