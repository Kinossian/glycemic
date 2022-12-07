import timeBeginDay from "./begin-day";

function timeToday() {
    const now = new Date();
    return timeBeginDay(now);
}

export default timeToday;
