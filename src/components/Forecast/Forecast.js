// Core
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

// Hooks
import { useForecast, useStore } from '../../hooks';

// Helpers
import { getDaysFromCurrent, getFirstItems } from '../../helpers';

// Components
import { Day } from './Day';

export const Forecast = observer(() => {
    const { getFilteredDays, setSelectedDay } = useStore();
    const { data = [], isFetched } = useForecast();
    const filteredDays = getFilteredDays(data);

    const daysFromCurrent = getDaysFromCurrent(filteredDays);
    const first7Items = getFirstItems(daysFromCurrent, 7);

    useEffect(() => {
        setSelectedDay(first7Items[ 0 ]);
    }, [first7Items]);


    const forecastJSX = first7Items.map((day) => {
        return (
            <Day
                key = { day.id } day = { day } />
        );
    });

    return !isFetched ? <div>loading...</div> : (
        <div className = 'forecast'>
            {  forecastJSX.length ? forecastJSX : (
                <p className = 'message'>За заданими критеріями немає доступних днів!</p>
            ) }
        </div>
    );
});
