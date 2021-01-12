import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <Fragment>
                <Link to='/' className='navbar-brand ml-4'>
                    <span className='name-braces'>&lt; </span>
                    <span className='name-logo'>Sanket Kulkarni</span>
                    <span className='name-braces'> /&gt;</span>
                </Link>
            </Fragment>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
            >
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item mr-4'>
                        <Link to='/' className='nav-link nav-text'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item mr-4'>
                        <Link to='/education' className='nav-link nav-text'>
                            Education
                        </Link>
                    </li>
                    <li className='nav-item mr-4'>
                        <Link to='/projects' className='nav-link nav-text'>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item mr-4'>
                        <Link to='/contact' className='nav-link nav-text'>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
