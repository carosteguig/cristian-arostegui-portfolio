import './Navigation.scss';
import { NavLink } from 'react-router-dom'; 

export default function Navigation() {

    return (

        <nav clssName='nav'>
            <NavLink to='/'>
                <img className='nav__logo' src='' alt='Cristian Arostegui logo' />
            </NavLink>
            <div className='nav__list'>
                <NavLink className='nav__list-link' to='/' >
                    <p className='nav__list-text'>Home</p>
                </NavLink>
                <NavLink className='nav__list-link' to='/'> {/*links to projects in the same page */}
                    <p className='nav__list-text'>Projects</p>
                </NavLink>
            </div>
        </nav>

    );
}