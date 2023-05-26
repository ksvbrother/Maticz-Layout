import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Images/Logo.png"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='d-flex flex-wrap  rowGap '>
                    <div className='col-12 col-lg-2'>
                        <p className='footerHead'>Company</p>
                        <ul className='list-unstyled'>
                            <li><Link to={"/"} className='footerLink'>Vision</Link></li>
                            <li><Link to={"/"} className='footerLink'>Mission</Link></li>
                            <li><Link to={"/"} className='footerLink'>Core Values</Link></li>
                            <li><Link to={"/"} className='footerLink'>Contact us</Link></li>
                            <li><Link to={"/"} className='footerLink'>Branding</Link></li>
                            <li><Link to={"/"} className='footerLink'>Team</Link></li>
                            <li><Link to={"/"} className='footerLink'>Careers</Link></li>
                            <li><Link to={"/"} className='footerLink'>FAQ</Link></li>
                        </ul>

                    </div>

                    <div className='col-12 col-lg-2'>
                        <p className='footerHead'>Products</p>
                        <ul className='list-unstyled'>
                            <li><Link to={"/"} className='footerLink'>Eda Token</Link></li>
                            <li><Link to={"/"} className='footerLink'>Digital Clinic</Link></li>
                            <li><Link to={"/"} className='footerLink'>School of Cryptos</Link></li>
                            <li><Link to={"/"} className='footerLink'>Litepaper</Link></li>
                            <li><Link to={"/"} className='footerLink'>Whitepaper</Link></li>
                            <li><Link to={"/"} className='footerLink'>Welfare Donations</Link></li>
                            <li><Link to={"/"} className='footerLink'>How to Use EdaFace</Link></li>

                        </ul>
                    </div>
                    <div className='col-12 col-lg-4'>
                        <img src={Logo} alt='logo' className='footerLogo'  />
                        <p className='footerHead'>Subscribe Our Newsletter</p>
                        <div>
                            <form className='d-flex'>
                                <input type="email" className='footerInput' placeholder='Enter email id' />
                                <button type='submit' className='footerBtn' >Subscribe</button>
                            </form>

                        </div>

                    </div>
                    <div className='col-12 col-lg-2'>
                        <p className='footerHead'>Legal</p>
                        <ul className='list-unstyled'>
                            <li><Link to={"/"} className='footerLink'>Terms of Use</Link></li>
                            <li><Link to={"/"} className='footerLink'>Privacy Policy</Link></li>
                            <li><Link to={"/"} className='footerLink'>Disclaimers</Link></li>
                            <li><Link to={"/"} className='footerLink'>Listing T&C</Link></li>
                        </ul>

                    </div>
                    <div className='col-12 col-lg-2'>
                        <p className='footerHead'>Communities</p>
                        <ul className='list-unstyled'>
                            <li><Link to={"/"} className='footerLink'>Facebook</Link></li>
                            <li><Link to={"/"} className='footerLink'>Instagram</Link></li>
                            <li><Link to={"/"} className='footerLink'>Telegram</Link></li>
                            <li><Link to={"/"} className='footerLink'>Twitter</Link></li>
                        </ul>
                    </div>

                </div>
                <div>
                    <p className='copyRight'>Copyright @ 2022. Edaface is a product of EDA Holdings. All Rights Reserved. </p>
                </div>

            </div>
        </div>
    )
}

export default Footer