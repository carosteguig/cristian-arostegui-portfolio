import './Navigation.scss';
import { NavLink } from 'react-router-dom'; 
import Logo from '../../assets/images/logo/logo.svg';

export default function Navigation() {

    return (

        <nav className='nav'>
            <NavLink to='/'>
                <img className='nav__logo' src={Logo} alt='Cristian Arostegui logo' />
            </NavLink>
            <div className='nav__list'>
                <NavLink className='nav__list-link' to='/' activeClassName='nav__list-link--active'>
                    <p className='nav__list-text'>Home</p>
                </NavLink>
                <NavLink className='nav__list-link' to='' activeClassName='nav__list-link--active'> {/*links to projects in the same page */}
                    <p className='nav__list-text'>Projects</p>
                </NavLink>
            </div>
        </nav>

    );
}