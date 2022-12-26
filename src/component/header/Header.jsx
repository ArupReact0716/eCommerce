import { Link, NavLink } from 'react-router-dom'
// reactstrap
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Slider from "react-slick";
// top header part
import CurrencyDropdown from './CurrencyDropdown'
import LanguageDropdown from './LanguageDropdown'
// icon
import { ShoppingCart, Heart, User, List, RefreshCw, ChevronDown, ChevronRight, Menu, Search } from 'react-feather'
import { useState } from 'react';
import MobileMenu from './MobileMenu';


const Header = () => {

    const [show, setShow] = useState(false);
    const [searchBox, setSearchBox] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var offerScrollSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };


    return (
        <>
            <div className="kart-header-top border-bottom">
                <div className="kart-container-fluid py-2">
                    <div className="row">
                        <div className="col-lg-8 d-none d-lg-block">
                            <Slider {...offerScrollSettings} className="offer-scroll-slider">
                                <div className='offer-content-kart1'>
                                    <p className='text-white p-0 m-0'>Get 30% Off On Selected Items</p>
                                </div>
                                <div>
                                    <p className='text-white p-0 m-0'>Something you love is now on sale!</p>
                                </div>
                            </Slider>
                        </div>
                        <div className="col-12 col-lg-4 text-end">
                            <div className="d-inline-block">
                                <ul className='list-style-none d-flex align-items-center p-0 m-0'>
                                    <LanguageDropdown />
                                    <CurrencyDropdown />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header>
                <div className="py-2  bg-white">
                    <div className="kart-container-fluid header-top-container mb-3">





                        <div className="kart-header-part1 d-flex align-items-center py-2">
                            <div className="d-lg-none d-block me-3">
                                <Menu onClick={handleShow} />
                            </div>
                            <div className="header-part1-brand-logo">
                                <div className="header-top-left header-brand-logo">
                                    <a href="/kj">
                                        <img src="https://dostguru.com/HTML/hitech/assets/img/Hitech..png" className="img" alt="Hitech" />
                                    </a>
                                </div>
                            </div>

                            <div className="header-part1-search-box d-none d-lg-block">
                                <div className="search-container d-flex align-items-center">
                                    <div className="category-select d-flex align-items-center">
                                        <UncontrolledDropdown direction="down" tag='div' className='d-flex align-items-center'>
                                            <DropdownToggle tag='div' className='d-flex align-items-center'>
                                                <List size={20} />
                                                <span className='ms-2'>All Category</span>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem tag='div'>
                                                    <span className='ms-1'>Laptop</span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                    <div className="input-group">
                                        <input type="text" placeholder="Search" className="form-control" />

                                        <div className="input-group-btn">
                                            <button type="button" className="form-button">search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="header-part1-action-btn">
                                <div className='right-side-icon d-flex align-items-center'>
                                    <div className="right-icon-menu-01 divider d-block d-lg-none">
                                        <Search size={22} className="feather" onClick={() => setSearchBox(!searchBox)} />
                                    </div>

                                    <div className="right-icon-menu-01 divider d-none d-md-block">
                                        <Link className='d-flex align-items-center'>
                                            <RefreshCw size={22} className="feather" />
                                        </Link>
                                    </div>
                                    <div className="right-icon-menu-01 divider d-none d-md-block">
                                        <Link className='d-flex align-items-center'>
                                            <Heart size={22} className="feather" />
                                        </Link>
                                    </div>
                                    <div className="right-icon-menu-01 divider">
                                        <UncontrolledDropdown tag='div' className='header-user'>
                                            <DropdownToggle tag='div' className='dropdown-header px-2'>
                                                <User size={22} className="feather" />
                                            </DropdownToggle>
                                            <DropdownMenu end>
                                                <DropdownItem tag='div'>
                                                    <span className='ms-1'>Log in</span>
                                                </DropdownItem>
                                                <DropdownItem tag='div'>
                                                    <span className='ms-1'>Register</span>
                                                </DropdownItem>
                                                <DropdownItem tag='div'>
                                                    <span className='ms-1'>Forget Password</span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>

                                    <div className="right-icon-menu-01">
                                        <UncontrolledDropdown tag='div' className='header-cart'>
                                            <DropdownToggle tag='div' className='dropdown-header px-2'>
                                                <ShoppingCart size={22} className="feather" />
                                                <span className='badge'>35</span>
                                            </DropdownToggle>
                                            <DropdownMenu end>
                                                <DropdownItem tag='div'>
                                                    <span className='ms-1'>Laptop</span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className={`search-box-popup d-lg-none ${searchBox ? 'd-block' : ' d-none'}`}>
                            <div className="input-group">
                                <input type="text" placeholder="Search" className="form-control" />

                                <div className="input-group-btn">
                                    <button type="button" className="form-button"> <Search size={22} className="feather" /></button>
                                </div>
                            </div>
                        </div>
                        
                    </div>



                    <div className="webx-container-fluid header-bottom-menu d-none d-lg-block">
                        <div className="row">
                            <div className="col-12">
                                <div className='d-flex align-item-center justify-content-between'>

                                    <div className="bottom-menu-left">
                                        <button className='categories-dropdown'>
                                            <List size={22} />
                                            <span className='ms-2'>All Categories</span>
                                        </button>
                                    </div>


                                    <div class="header-nav-middle">
                                        <div class="navbar navbar-expand-xl ">



                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <NavLink to='/' className='nav-link'>Home</NavLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NavLink to='/shop' className='nav-link'>Shop</NavLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NavLink to='/shop' className='nav-link'>Product</NavLink>
                                                </li>



                                                <li class="nav-item dropdown ">
                                                    <a class="nav-link" href="http://example.com">
                                                        Mega menu
                                                        <ChevronDown size={17} className='ms-1' />
                                                    </a>


                                                    <div class="dropdown-menu dropdown-menu-2">
                                                        <div class="row">
                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">Daily Vegetables</h5>
                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Beans
                                                                    &amp; Brinjals</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Cauliflower</a>

                                                                <a href="shop-left-sidebar.html" class="dropdown-item">Chilies, Garlic</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Herbs
                                                                    &amp; Sprouts</a>

                                                                <a href="demo-personal-portfolio.html" class="dropdown-item">Lettuce &amp; Leafy</a>
                                                            </div>

                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">Baby Tender</h5>
                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Beans
                                                                    &amp; Brinjals</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Cauliflower</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Chilies, Garlic</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Vegetables &amp; Salads</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Gourd, Cucumber</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Potatoes &amp; Tomatoes</a>

                                                                <a href="shop-left-sidebar.html" class="dropdown-item">Peas
                                                                    &amp; Corn</a>
                                                            </div>

                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">Exotic Vegetables</h5>
                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Asparagus &amp; Artichokes</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Avocados &amp; Peppers</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Broccoli &amp; Zucchini</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Celery, Fennel &amp; Leeks</a>

                                                                <a class="dropdown-item" href="shop-left-sidebar.html">Chilies &amp; Lime</a>
                                                            </div>

                                                            <div class="dropdown-column dropdown-column-img col-3"></div>
                                                        </div>
                                                    </div>


                                                </li>


                                                <li class="nav-item dropdown">

                                                    <a class="nav-link" href="http://example.com">
                                                        Pages
                                                        <ChevronDown size={17} className='ms-1' />
                                                    </a>

                                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                                        <li><a class="dropdown-item" href="/">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a></li>

                                                        <li class="dropdown-submenu">
                                                            <a class="dropdown-item " href="http://google.com">Google<ChevronRight size={16} /></a>

                                                            <ul class="dropdown-menu">
                                                                <li><a class="dropdown-item" href="#">Submenu</a></li>
                                                                <li><a class="dropdown-item" href="#">Submenu0</a></li>
                                                                <li class="dropdown-submenu"><a class="dropdown-item " href="#">Submenu 1<ChevronRight size={16} /></a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                                                        <li><a class="dropdown-item" href="#">Subsubmenu1</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Submenu 2</a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                                                                        <li><a class="dropdown-item" href="#">Subsubmenu2</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>


                                                </li>





                                                <li class="nav-item">
                                                    <NavLink to='/shop' className='nav-link'>Blogu</NavLink>
                                                </li>
                                                <li class="nav-item">
                                                    <NavLink to='/shop' className='nav-link'>About us</NavLink>
                                                </li>
                                            </ul>





                                        </div>
                                    </div>


                                    <div className="bottom-menu-left">
                                        <button className='categories-dropdown'>
                                            <List size={22} />
                                            <span className='ms-2'>All Categories</span>
                                        </button>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <Offcanvas show={show} onHide={handleClose} className='mobile-menu'>
                    <Offcanvas.Header closeButton>
                        <div className='mobile-menu-logo'>
                            <a href="/kj">
                                <img src="https://dostguru.com/HTML/hitech/assets/img/Hitech..png" className="img" alt="Hitech" />
                            </a>
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <MobileMenu />
                    </Offcanvas.Body>
                </Offcanvas>
            </header>
        </>
    )
}

export default Header