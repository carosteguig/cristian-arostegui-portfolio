import './ButtonSolid.scss';
import { Link } from 'react-router-dom';


export default function ButtonSolid(props) {

    const { webAddress2, text2 } = props;

    return (
            <Link to={{ pathname: webAddress2}} target="_blank">
                <p className='button__solid'>{text2}</p>
             </Link>
    );
} 
