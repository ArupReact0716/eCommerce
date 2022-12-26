import React from 'react'
import { Link } from 'react-router-dom';
// reactstrap
import { Progress } from 'reactstrap'
// 3rd party
import Rating from 'react-rating'
import { Star, } from 'react-feather'
// custom
import OfferTime from '../countdown/OfferTime';

const ProductDeal = () => {
    return (
        <>
            <div className='deal-productCard bg-white'>
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-12 pb-xl-3">
                        <div className="product-image ratio-contain p-3">
                            <Link className='ratio-75'>
                                <img src="./img/pro-3.jpg" className='ratio-contain-image' alt="" />
                            </Link>
                            <div className="product-offer-popup">
                                <div className="offer-popup-text1">40 %</div>
                                <div className="offer-popup-text2">Save</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-12">

                        <div className="product-content">
                            <h2 className="product-name text-truncate"> <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum quisquam laudantium doloribus eligendi fuga!</Link></h2>

                            <div>
                                <Rating
                                    readonly
                                    direction='ltr'
                                    initialRating={2.25}
                                    emptySymbol={<Star size={14} fill='#fff' stroke='#ffb321' strokeWidth={1} />}
                                    fullSymbol={<Star size={14} fill='#ffb321' stroke='#ffb321' strokeWidth={1} />}
                                />
                            </div>
                            <h6 className='product-price'>
                                <span>$25.75</span>
                                <del>$27.69</del>
                            </h6>
                        </div>
                        <div className='my-3'>
                            <h6> <span>Available : </span>250</h6>
                            <Progress value={75} />
                        </div>
                        <p>Hurry Up! Offer ends in:</p>
                        <OfferTime time='2022-12-25T23:14:01.593Z' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDeal