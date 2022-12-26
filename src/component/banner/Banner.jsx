import React from 'react'
import Slider from "react-slick";
// icon
import { ShoppingBag } from 'react-feather'

const Banner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };


    const BannerImg = [
        { url: './img/banner-9.jpg', content: false },
        { url: './img/banner-11.jpg', content: false },
        { url: './img/banner-7.jpg', content: false },
        { url: './img/banner-8.jpg', content: false },
        { url: './img/banner-4.jpg', content: false },
        { url: './img/banner-5.jpg', content: true }
    ]


    return (
        <>
            <div className="webx-homePage-banner mb-5">
                <div className="webx-container-fluid">
                    <div className="row g-3">
                        <div className="col-12 col-lg-8 col-xl-9">
                            <div className="row h-100">
                                <Slider {...settings}>
                                    {
                                        BannerImg && BannerImg.map((Banner, index) => {
                                            return (
                                                <div className="col-12 single-banner-card">
                                                    <div className="ratio-contain">
                                                        <div className="ratio-50">
                                                            <img src={Banner.url} className="ratio-contain-image" alt="" />
                                                        </div>
                                                        {
                                                            !Banner.content ? '' :
                                                                <div className="homePage-banner-content w-75 d-flex align-item-center justify-content-start">
                                                                    <div>
                                                                        <h6>Exclusive offer <span>30% Off</span></h6>
                                                                        <h1 className="text-uppercase">Stay home &amp; delivered your <span className="daily">Daily
                                                                            Needs</span></h1>
                                                                        <p className="w-75 d-none d-sm-block">Vegetables contain many vitamins and minerals that are
                                                                            good for your health.</p>
                                                                        <button className="homePage-banner-shopBtn"><ShoppingBag size={16} className="me-2" />Shop Now </button>
                                                                    </div>
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-xl-3">
                            <div className="row g-3">
                                <div className="col-xl-12 col-md-6 col-6 banner-card-right">
                                    <div className="ratio-contain">
                                        <div className="ratio-50" >
                                            <img src="./img/banner-11.jpg" className="ratio-contain-image" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-md-6 col-6 banner-card-right">
                                    <div className="ratio-contain">
                                        <div className="ratio-50" >
                                            <img src="./img/banner-5.jpg" className="ratio-contain-image" alt="" />
                                            {/* <div className="homePage-banner-content-s2 w-75 d-flex align-item-center justify-content-start">
                                                <div>
                                                    <h6>Exclusive offer <span>30% Off</span></h6>
                                                    <h1 className="text-uppercase">Stay home &amp; delivered your <span className="daily">Daily
                                                        Needs</span></h1>
                                                    <button className="home-button-2"><ShoppingBag size={16} className="me-2" />Shop Now </button>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-md-6 col-6 d-none d-lg-block banner-card-right">
                                    <div className="ratio-contain">
                                        <div className="ratio-50" >
                                            <img src="./img/banner-9.jpg" className="ratio-contain-image" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner