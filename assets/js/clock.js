
const hour      = document.querySelector('[data-hour-hand]');
const minute    = document.querySelector('[data-minute-hand]');
const second    = document.querySelector('[data-second-hand]');

function wellClock(){
    const time = new Date();

    const getSecond = time.getSeconds();
    const getMinute = time.getMinutes();
    const getHour   = time.getHours();
    
    const mainSecond = getSecond / 60 ;
    const mainMinute = (mainSecond + getMinute) / 60 ;
    const mainHour  = ( mainMinute + getHour) / 12 ;

    
    setTime(second,mainSecond);
    setTime(minute,mainMinute);
    setTime(hour,mainHour);
}

function setTime(arg1,arg2){
    arg1.style.setProperty('--rotation',arg2 * 360 );
}

setInterval(wellClock,1000);
wellClock()
