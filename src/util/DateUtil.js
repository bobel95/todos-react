
const getTimeLeft = date => {
    const now = Date.now();
    let delta = Math.abs(date - now) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60) % 60;

    return {daysLeft: days, hoursLeft: hours, minutesLeft: minutes};
}

const getDateAndTimeString = date => {
    const year = date.getFullYear();
    const month = padLeft(date.getMonth() + 1, 2);
    const day = padLeft(date.getDate(), 2);

    const hours = padLeft(date.getHours(), 2);
    const minutes = padLeft(date.getMinutes(), 2);

    return `${day}.${month}.${year} - ${hours}:${minutes}`;
}

const padLeft = (num, len) => {
    return num.toString().padStart(len, 0);
}

export {getTimeLeft, getDateAndTimeString};