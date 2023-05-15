export const compareDays = (firstDay, secondDay) => {
    const firstDayDate = new Date(firstDay);
    const secondDayDate = new Date(secondDay);

    return firstDayDate.getDate() >= secondDayDate.getDate()
        && firstDayDate.getMonth() >= secondDayDate.getMonth()
        && firstDayDate.getFullYear() >= secondDayDate.getFullYear();
};
