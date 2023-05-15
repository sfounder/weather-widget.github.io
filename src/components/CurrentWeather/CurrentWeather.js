// Core
import { observer } from 'mobx-react-lite';

// Hooks
import { useForecast, useStore } from '../../hooks';

export const CurrentWeather = observer(() => {
    const { data = [] } = useForecast();
    const { selectedDay } = useStore();
    const { id: selectedDayId } = selectedDay || {};

    const {
        temperature,
        rain_probability,
        humidity,
    } = data.find((day) => day.id === selectedDayId) || {};

    return selectedDayId ? (
        <div className = 'current-weather'>
            <p className = 'temperature'>{ temperature }</p>
            <p className = 'meta'>
                <span className = 'rainy'>%{ rain_probability }</span>
                <span className = 'humidity'>%{ humidity }</span>
            </p>
        </div>
    ) : null;
});
