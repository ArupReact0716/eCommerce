import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../component/banner/Banner'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { dealProduct, featureProduct } from './redux';
// reactstrap
import Slider from "react-slick";
// 3rd party
import { ChevronRight } from 'react-feather'
// custom
import ProductCard from '../../component/card/ProductCard';
import ProductDeal from '../../component/card/ProductDeal';
import { CategorySlider, FeatureSlider, ProductGrid } from '../../component/utils'


const Home = () => {

    const dispatch = useDispatch()
    const store = useSelector((state) => state.home)

    useEffect(() => {
        dispatch(dealProduct())
        dispatch(featureProduct())
    }, [dispatch])




    const category = [
        { img: './img/cat-laptop.png', name: 'Laptop' },
        { img: './img/cat-camera.png', name: 'Camera' },
        { img: './img/cat-headphone.png', name: 'HeadPhone' },
        { img: './img/cat-watch.png', name: 'Watchs' },
        { img: './img/cat-earbud.png', name: 'Ear Bud' },
        { img: './img/cat-tv.png', name: 'Tvs' },
        { img: './img/cat-hphone.png', name: 'Yotstick' },
        { img: './img/cat-watch.png', name: 'Watchs' },
        { img: './img/cat-earbud.png', name: 'Ear Bud' },
        { img: './img/cat-tv.png', name: 'Tvs' },
        { img: './img/cat-hphone.png', name: 'Yotstick' },
    ]




    return (
        <>
            <Header />
            <Banner />
            {/* Homepage */}
            <div className="homePage-content webx-container-fluid py-4">



                {/* feature product */}
                <div className="section-title d-flex align-items-center justify-content-between">
                    <h4><span>Feature</span> Product</h4>
                    <Link>View All<ChevronRight size={17} className="ms-2 feather" /></Link>
                </div>
                <div className="homePage-productList row gx-3 gx-lg-4">
                    <Slider {...FeatureSlider}>
                        {
                            store && store.featureProducts?.map((product, index) => {
                                return (
                                    <div className='slider-item'>
                                        <ProductCard product={product} index={index} key={index} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

                {/* ad */}
                <div className='row my-5'>
                    <div className="col-lg-6 col-md-6 col-12 pb-3">
                        <div className="advertigement-banner ratio-contain">
                            <Link className='ratio-40 ratio-lg-30'><img src="./img/ad-1.jpg" className='ratio-contain-image' alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 pb-3">
                        <div className="advertigement-banner ratio-contain">
                            <Link className='ratio-40 ratio-lg-30'><img src="./img/ad-1.jpg" className='ratio-contain-image' alt="" /></Link>
                        </div>
                    </div>
                </div>

                {/* category list */}
                <div className="section-title d-flex align-items-center">
                    <h4>Top<span> Categories</span></h4>
                    <small></small>
                </div>
                <div className="homePage-productList row gx-3 gx-lg-4">
                    <Slider {...CategorySlider} className="custom-arrow">
                        {
                            category && category.map((category, index) => {
                                return (
                                    <div className="slider-item">
                                        <div className="bg-white p-3">
                                            <div className="ratio-contain mb-3">
                                                <Link to='/' className='ratio-75'>
                                                    <img src={category.img} className="ratio-contain-image" alt="" />
                                                </Link>
                                            </div>
                                            <div className="text-center text-truncate">
                                                <Link to='/' className='fs-15'>{category.name}</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>


                {/* today deal product */}
                <div className="section-title d-flex align-items-center justify-content-between">
                    <h4>Today <span>Deals</span></h4>
                    <Link>View All<ChevronRight size={17} className="ms-2 feather" /></Link>
                </div>
                <div className="row g-4 mb-4">
                    <div className="col-lg-3">
                        <ProductDeal />
                    </div>
                    <div className="col-lg-9">
                        <div className="homePage-productList row gx-3">
                            <Slider {...ProductGrid}>
                                {
                                    store && store.featureProducts?.map((product, index) => {
                                        return (
                                            <div className='slider-item'>
                                                <ProductCard product={product} index={index} key={index} />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div >
                </div>


                {/* today deal product */}
                <div className="section-title d-flex align-items-center justify-content-between">
                    <h4>Top <span>Mobiles</span></h4>
                    <Link>View All<ChevronRight size={17} className="ms-2 feather" /></Link>
                </div>
                <div className="row g-4 mb-4">
                    <div className="col-lg-3 order-lg-2">
                        <ProductDeal />
                    </div>
                    <div className="col-lg-9">
                        <div className="homePage-productList row gx-3">
                            <Slider {...ProductGrid}>
                                {
                                    store && store.featureProducts?.map((product, index) => {
                                        return (
                                            <div className='slider-item'>
                                                <ProductCard product={product} index={index} key={index} />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div >
                </div>


                {/* ad */}
                <div className='row my-5'>
                    <div className="col-lg-6 col-md-6 col-12 pb-3">
                        <div className="advertigement-banner ratio-contain">
                            <Link className='ratio-40 ratio-lg-30'><img src="./img/ad-1.jpg" className='ratio-contain-image' alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 pb-3">
                        <div className="advertigement-banner ratio-contain">
                            <Link className='ratio-40 ratio-lg-30'><img src="./img/ad-1.jpg" className='ratio-contain-image' alt="" /></Link>
                        </div>
                    </div>
                </div>


                {/* feature product */}
                <div className="section-title d-flex align-items-center justify-content-between">
                    <h4>New <span>Arrival</span> Product</h4>
                    <Link>View All<ChevronRight size={17} className="ms-2 feather" /></Link>
                </div>
                <div className="homePage-productList row gx-3 gx-lg-4">
                    <Slider {...FeatureSlider}>
                        {
                            store && store.featureProducts?.map((product, index) => {
                                return (
                                    <div className='slider-item'>
                                        <ProductCard product={product} index={index} key={index} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>


                {/* ad */}
                <div className='row my-5'>
                    <div className="col-lg-12 col-12">
                        <div className="advertigement-banner ratio-contain">
                            <Link className='ratio-15'><img src="./img/ad-1.jpg" className='ratio-contain-image' alt="" /></Link>
                        </div>
                    </div>
                </div>



            </div>
            <Footer />

        </>
    )
}

export default Home

