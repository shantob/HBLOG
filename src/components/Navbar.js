import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    const handleClick = event => {

        event.currentTarget.classList.add('w-full');

    };
    return (
        <nav className="navbar navbar-expand-lg py-0 navbar-light bg-color sticky-top">
            <div className="container">
                <Link className="navbar-brand text-light" to="#" style={{ fontWeight: 'bold', fontSize: '2rem' }}>H<span className='text-info'>BLOG</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <form className="d-flex">
                    <input className="form-control mx-auto" type="search" onClick={handleClick} placeholder="Search" aria-label="Search" />
                </form>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item btn ">
                            <NavLink className="nav-link text-light " aria-current="page" to="/"><i className="fa-solid fa-house"></i>
                                <br /><span style={{ fontSize: '12px' }}>Home</span></NavLink>
                        </li>
                        <li className="nav-item btn px-3">
                            <NavLink className="nav-link text-light" to="/friends"><i className="fa-solid fa-user-group"></i>
                                <br /><span style={{ fontSize: '12px' }}>Friends</span></NavLink>
                        </li>
                        <li className="nav-item btn  px-3">
                            <NavLink className="nav-link text-light" to="/messages"><i className="fa-regular fa-message"></i>
                                <br /><span style={{ fontSize: '12px' }}>Message</span></NavLink>
                        </li>
                        <li className="nav-item btn px-3">
                            <NavLink className="nav-link text-light" to="/notification"><i className="fa-sharp fa-solid fa-bell"></i>
                                <br /><span style={{ fontSize: '12px' }}>Notification</span></NavLink>
                        </li>
                        <li className="nav-item btn dropdown">
                            <NavLink className="nav-link dropdown-toggle text-light" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-sharp fa-solid fa-user"></i>
                                <br /><span style={{ fontSize: '12px' }}>Shanto</span>
                            </NavLink>
                            <ul className="dropdown-menu text-light" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item py-2 hover" to="#">Profile</Link></li>
                                <li><Link className="dropdown-item py-2 hover" to="#">Logout</Link></li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar