// Components
import {
    CurrentWeather, Filter, Forecast, Head,
} from './components';

export const App = () => {
    return (
        <main>
            <Filter />
            <Head />
            <CurrentWeather />
            <Forecast />
        </main>
    );
};

