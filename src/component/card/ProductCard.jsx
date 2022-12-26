import React from 'react'
import { Link } from 'react-router-dom';
import { UncontrolledTooltip } from 'reactstrap'
import Rating from 'react-rating'
import { Star, ShoppingCart, RefreshCw, Eye, Heart } from 'react-feather'


const ProductCard = ({ product, index }) => {

    return (
        <>
            <div className="homePage-product-card bg-white p-2">
                <div className="product-image ratio-contain">
                    <Link className='ratio-75'>
                        <img src={product.thumbnail} className='ratio-contain-image' alt="" />
                    </Link>
                    <ul className="product-option d-flex align-items-center justify-content-between">
                        <li id={`productCart${index}`}><ShoppingCart size={17} /></li>
                        <UncontrolledTooltip placement='top' target={`productCart${index}`} className='tooltips'>Cart</UncontrolledTooltip>

                        <li id={`productCompare${index}`}><RefreshCw size={17} /></li>
                        <UncontrolledTooltip placement='top' target={`productCompare${index}`} className='tooltips'>Compare</UncontrolledTooltip>

                        <li id={`productWishlist${index}`}><Heart size={17} /></li>
                        <UncontrolledTooltip placement='top' target={`productWishlist${index}`} className='tooltips'>Wishlist</UncontrolledTooltip>

                        <li id={`productView${index}`} ><Eye size={17} /></li>
                        <UncontrolledTooltip placement='top' target={`productView${index}`} className='tooltips'>View</UncontrolledTooltip>
                    </ul>
                </div>
                {
                    !product.discountPercentage ? ' ' :
                        <div className="product-offer-popup">
                            <div className="offer-popup-text1">{Math.ceil(product.discountPercentage)} %</div>
                            <div className="offer-popup-text2">Save</div>
                        </div>
                }
                <div className="product-content">
                    <div className='product-rating'>
                        <Rating
                            readonly
                            direction='ltr'
                            initialRating={product.rating}
                            emptySymbol={<Star size={13} fill='#fff' stroke='#ffb321' strokeWidth={1} />}
                            fullSymbol={<Star size={13} fill='#ffb321' stroke='#ffb321' strokeWidth={1} />}
                        />
                    </div>
                    <h2 className="product-name text-truncate"><Link>{product.title}</Link></h2>
                    <h6 className='product-price'>
                        <span>${product.price}</span>
                        <del>${product.price}</del>
                    </h6>
                </div>
            </div>
        </>
    )
}

export default ProductCard