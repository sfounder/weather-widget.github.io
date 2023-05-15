// Core
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import cn from 'classnames';

// Hooks
import { useStore } from '../../hooks';

// Helpers
import { getDayOfWeek, getDayWithMonth } from '../../helpers';

export const Head = observer(() => {
    const { selectedDay } = useStore();
    const { type, day } = toJS(selectedDay) || {};
    const dayOfWeek = getDayOfWeek(day);
    const dayWithMonth = getDayWithMonth(day);

    return selectedDay && (
        <div className = 'head'>
            <div className = {
                cn('icon', {
                    [ type ]: true,
                }) }></div>
            <div className = 'current-date'><p>{ dayOfWeek }</p><span>{ dayWithMonth }</span></div>
        </div>
    );
});
