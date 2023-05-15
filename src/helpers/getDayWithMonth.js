// Core
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const getDayWithMonth = (date) => {
    return date && format(new Date(date), 'd MMMM', { locale: ru });
};
