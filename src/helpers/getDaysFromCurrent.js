// Helpers
import { compareDays } from './compareDays';

export const getDaysFromCurrent = (days) => {
    const date = Date.now();

    return days.filter(({ day }) => compareDays(day, date));
};
