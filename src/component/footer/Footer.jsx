import React from 'react'
import { Link } from 'react-router-dom'

// 
import { PhoneCall, Facebook, Twitter, Youtube, Instagram, Mail } from 'react-feather'
import { FaTwitter, FaFacebookF, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SiPaytm } from 'react-icons/si';

const Footer = () => {

    const CurrentYear = new Date().getFullYear();

    return (
        <>
            <div className="homePage-footer">
                <div className="webx-container-fluid py-5">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="coloum-one">
                                    <div className="footer-logo">
                                        <Link>
                                            <img src="https://dostguru.com/HTML/hitech/assets/img/Hitech..png" className="img" alt="Hitech" />
                                        </Link>
                                    </div>
                                    <div className='text-white my-3'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minus omnis tempora saepe qui, temporibus ullam totam doloremque veniam voluptatum natus quia libero sed exercitationem?
                                    </div>
                                    <div class="block-widget_item widget-address">
                                        <div class="text-white">17 Princess Road, London, Greater London NW1 8JR, UK</div>
                                    </div>
                                    <div className="footer-widget-social">
                                        <ul className="widget-social-icons list-inline d-flex align-items-center">
                                            <li><FaFacebookF size={20} className='footer-social-feather' /></li>
                                            <li><FaTwitter size={20} className='footer-social-feather' /></li>
                                            <li><AiFillInstagram size={22} className='footer-social-feather' /></li>
                                            <li><FaYoutube size={23} className='footer-social-feather' /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="footer-title">
                                            <h6>Categories</h6>
                                        </div>
                                        <div className="footer-contain">
                                            <ul class="footer-menu-list">
                                                <li class="menu-item">
                                                    <a href="" >Accessories </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >Gaming </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >Laptops &amp; Computer </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >Mac Computers </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >PC Computers </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >Ultrabooks</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="footer-title">
                                            <h6>Useful Link</h6>
                                        </div>
                                        <div className="footer-contain">
                                            <ul class="footer-menu-list">
                                                <li class="menu-item">
                                                    <a href="" >Accessories </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >Gaming </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >Laptops &amp; Computer </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >Mac Computers </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >PC Computers </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" >Ultrabooks</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="footer-title">
                                            <h6>Contact Us</h6>
                                        </div>
                                        <div className="footer-contain">
                                            <div class="footer-widget-phone d-flex align-items-center my-3">
                                                <div class="me-3">
                                                    <PhoneCall size={30} className='footer-feather-phone' />
                                                </div>
                                                <div class="phone">
                                                    <div class="text-1">Got questions? Call us 24/7!</div>
                                                    <div class="text-2">(800) 8001-8588</div>
                                                </div>
                                            </div>
                                            <div class="footer-widget-phone d-flex align-items-center my-4">
                                                <div class="me-3">
                                                    <Mail size={30} className='footer-feather-phone' />
                                                </div>
                                                <div class="phone">
                                                    <div class="text-1">Email Address</div>
                                                    <div class="text-2">webx@lorecafe.com</div>
                                                </div>
                                            </div>
                                            <div className='text-white mb-2'>Download App :</div>
                                            <div className="d-flex align-items-center">
                                                <span className='me-3'><img src="./img/playstore.svg" alt="" /></span>
                                                <span><img src="./img/appstore.svg" alt="" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="webx-container-fluid">
                        <div className="d-flex align-items-center justify-content-between p-2">
                            <div className='text-white'>&copy; 2010 - {CurrentYear} webx.com </div>
                            <div className="footer-bottom-right">
                                <div className='text-white'>
                                    <span className='me-2'><FaCcVisa size={25} /></span>
                                    <span className='me-2'><FaCcMastercard size={25} /></span>
                                    <span className='me-2'><FaCcPaypal size={25} /></span>
                                    <span className='me-2'><FaGooglePay size={25} /></span>
                                    <span className='me-2'><SiPaytm size={25} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer