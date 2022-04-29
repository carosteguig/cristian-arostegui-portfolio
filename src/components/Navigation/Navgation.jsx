import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import Logo from '../../assets/images/logo/logo.svg';

export default function Navigation() {

    return (

        <nav className='nav'>
            <div className='nav__content'>
                <NavLink to='/'>
                    <img className='nav__logo' src={Logo} alt='Cristian Arostegui logo' />
                </NavLink>
                <div className='nav__list'>
                    <NavLink className='nav__list-link' to='/' activeClassName='nav__list-link--active'>
                        <p className='nav__list-text'>Home</p>
                    </NavLink>
                    <NavHashLink className='nav__list-link' to='#projects' activeClassName='nav__list-link--active'> {/*links to projects in the same page */}
                        <p className='nav__list-text'>Projects</p>
                    </NavHashLink>
                    <NavHashLink className='nav__list-link' to='#contact' activeClassName='nav__list-link--active'> {/*links to projects in the same page */}
                        <p className='nav__list-text'>Contact</p>
                    </NavHashLink>
                </div>
            </div>
        </nav>

    );
}