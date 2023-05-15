// Core
import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export const getDayOfWeek = (date) => {
    return date && format(new Date(date), 'eeee', { locale: uk });
};
