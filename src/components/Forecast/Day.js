// Core
import cn from 'classnames';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

// Hooks
import { useStore } from '../../hooks';

// Helpers
import { capitalizeFirstLetter, getDayOfWeek } from '../../helpers';

export const Day = observer(({ day }) => {
    const {
        id, type, temperature, day: date,
    } = day;
    const dayOfWeek = getDayOfWeek(date);
    const capitalizedDayOfWeek = capitalizeFirstLetter(dayOfWeek);
    const { selectedDay, setSelectedDay } = useStore();
    const { id: selectedDayId } = toJS(selectedDay) || {};

    const handleClick = () => {
        setSelectedDay(day);
    };

    return (
        <div
            className = { cn('day', {
                [ type ]: true,
                selected: id === selectedDayId,
            }) }
            onClick = { handleClick }>
            <p>{ capitalizedDayOfWeek }</p>
            <span>{ temperature }</span>
        </div>
    );
});
