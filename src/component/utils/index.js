import { ChevronRight, ChevronLeft } from 'react-feather'

// @Slick Slider Custom Arrow 
export const SlickArrowPrev = ({ className, style, onClick }) => {
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <ChevronLeft />
        </div>
    )
}
export const SlickArrowNext = ({ className, style, onClick }) => {
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <ChevronRight />
        </div>
    )
}

// slider configaration
export const FeatureSlider = {
    dots: false,
    arrows: false,
    draggable: false,
    slidesToShow: 5,
    rows: 2,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false,
                draggable: false,
                slidesToShow: 2,
                rows: 3
            }
        },
        {
            breakpoint: 976,
            settings: {
                dots: false,
                arrows: false,
                draggable: false,
                slidesToShow: 3,
                rows: 2
            }
        }
    ]
}
export const CategorySlider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    prevArrow: <SlickArrowPrev />,
    nextArrow: <SlickArrowNext />,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 976,
            settings: {
                slidesToShow: 3.3,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
}
// slider configaration
export const ProductGrid = {
    dots: false,
    arrows: false,
    draggable: false,
    slidesToShow: 4,
    rows: 2,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots: false,
                arrows: false,
                draggable: false,
                slidesToShow: 2,
                rows: 3
            }
        },
        {
            breakpoint: 976,
            settings: {
                dots: false,
                arrows: false,
                draggable: false,
                slidesToShow: 3,
                rows: 2
            }
        }
    ]
}