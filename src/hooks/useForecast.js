// Core
import { useQuery } from 'react-query';

// API
import { api } from '../api';

export const useForecast = () => {
    const { data, isFetched } = useQuery({
        queryKey: ['forecast'],
        queryFn:  api.getWeather,
        onError:  (error) => {
            // eslint-disable-next-line no-console
            console.log(error);
        },
    });

    return { data, isFetched };
};
