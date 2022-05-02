import './ButtonOutline.scss';
import { Link } from 'react-router-dom';


export default function ButtonOutline(props) {

    const { webAddress, text1 } = props;
    return (
            <Link to={{ pathname: webAddress}} target="_blank">
                <p className='button__outline'>{text1}</p>
             </Link>
    );
} 