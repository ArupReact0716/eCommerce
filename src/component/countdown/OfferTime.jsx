import React, { useState } from 'react'

const OfferTime = () => {

    const [countDays, setDay] = useState(0);
    const [countHours, setHour] = useState(0);
    const [countMinutes, setMin] = useState(0);
    const [countSeconds, setSec] = useState(0);

    const Countdown = () => {
        const time = '2022-12-25T23:14:01.593Z'
        var offerEnd = new Date(time);
        var offerStart = new Date();

        var differenceTravel = offerEnd.getTime() - offerStart.getTime();
        var remainingSeconds = (differenceTravel) / (1000);

        const remainingDay = Math.floor(remainingSeconds / (3600 * 24));
        const remainingHour = Math.floor(remainingSeconds % (3600 * 24) / 3600);
        const remainingMinute = Math.floor(remainingSeconds % 3600 / 60);
        const remainingSecond = Math.floor(remainingSeconds % 60);

        setDay(remainingDay)
        setHour(remainingHour)
        setMin(remainingMinute)
        setSec(remainingSecond)
    }

    setInterval(function () {
        Countdown()
    }, 1000);

    return (
        <>
            <div className="deal-countdown-h1">
                <span className="countdown-section countdown-days">
                    <span className="countdown-value">{countDays}</span>
                    <span className="countdown-text">Day</span>
                </span>
                <span className="countdown-section countdown-hours">
                    <span className="countdown-value">{countHours}</span>
                    <span className="countdown-text">Hour</span>
                </span>
                <span className="countdown-section countdown-minutes">
                    <span className="countdown-value">{countMinutes}</span>
                    <span className="countdown-text">Min</span>
                </span>
                <span className="countdown-section countdown-seconds">
                    <span className="countdown-value">{countSeconds}</span>
                    <span className="countdown-text">Sec</span>
                </span>
            </div>
        </>
    )
}

export default OfferTime