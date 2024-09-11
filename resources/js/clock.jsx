import React, { useState, useEffect } from 'react';
import '../css/clock.css';

const DigitalClock = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const startTime = () => {
            const today = new Date();
            let hr = today.getHours();
            let min = today.getMinutes();
            let sec = today.getSeconds();
            const ap = hr < 12 ? 'AM' : 'PM';
            hr = hr === 0 ? 12 : hr > 12 ? hr - 12 : hr;
            hr = checkTime(hr);
            min = checkTime(min);
            sec = checkTime(sec);

            setTime(`${hr}:${min}:${sec} ${ap}`);

            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const curWeekDay = days[today.getDay()];
            const curDay = today.getDate();
            const curMonth = months[today.getMonth()];
            const curYear = today.getFullYear();
            const dateString = `${curWeekDay}, ${curDay} ${curMonth} ${curYear}`;
            setDate(dateString);
        };

        const checkTime = (i) => (i < 10 ? '0' + i : i);

        startTime();
        const interval = setInterval(startTime, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="clockdate">
            <div className="clockdate-wrapper">
                <div id="clock">{time}</div>
                <div id="date">{date}</div>
            </div>
        </div>
    );
};

export default DigitalClock;
