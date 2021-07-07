
const getTimeLeft = date => {
    const now = Date.now();
    let delta = Math.abs(date - now) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;

    return {daysLeft: days, hoursLeft: hours};
}

const getDateAndTimeString = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day}.${month}.${year} - ${hours}:${minutes}`;
}

export {getTimeLeft, getDateAndTimeString};