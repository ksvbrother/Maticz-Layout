import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Images/Logo.png"
import { FaUserCircle } from 'react-icons/fa';
import { RiWalletFill } from 'react-icons/ri';
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            // Modify the threshold value as per your requirement
            if (scrollTop > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const Iconcolor = {
        color: "#3671a0",
        width: "30px",
        height: "30px"
    }
    return (
        <div>

            <nav className={`navbar navbar-expand-xl fixed-top homeNavbar ${isScrolled && "scroll"}`}>
                <div className="container">
                    <a className="navbar-brand" to={"/"}><img src={Logo} width="180px" height="50px" alt='Gallery' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#homeNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="homeNavbar">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Art</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Collections </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Gaming</Link>
                            </li>
                            <li className="nav-item">
                                <form className="d-flex search">
                                    <input className="form-control headerInput" type="text" placeholder="Search items..." />
                                    <button className="headerBtn nav-item" type="button">Create</button>
                                </form>
                            </li>
                            <li className="nav-item">
                                <FaUserCircle style={Iconcolor} />
                            </li>
                            <li className="nav-item">
                                <RiWalletFill style={Iconcolor} />
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            {/* <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="javascript:void(0)">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0)">Link</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="text" placeholder="Search" />
                            <button class="btn btn-primary" type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}

        </div>
    )
}

export default Header