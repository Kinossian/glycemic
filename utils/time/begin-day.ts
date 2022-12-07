function timeBeginDay(currentDate: Date) {
    return new Date(
        `${currentDate.getFullYear()}-${
            currentDate.getMonth() + 1
        }-${currentDate.getDate()}`
    ).getTime();
}

export default timeBeginDay;
