
const getTimeLeft = date => {
    const now = Date.now();
    let delta = Math.abs(date - now) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;

    return {daysLeft: days, hoursLeft: hours};
}

export {getTimeLeft};