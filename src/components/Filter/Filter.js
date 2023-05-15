// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';

// Hooks
import { useStore } from '../../hooks';

// Components
import { RadioCheckbox } from './RadioCheckbox';
import { TemperatureInput } from './TemperatureInput';

// Other
import { schema } from './config';


export const Filter = observer(() => {
    const {
        isFiltered,
        resetFilter,
        applyFilter,
    } = useStore();
    const {
        formState, watch, register, handleSubmit, reset,
    } = useForm({
        mode:     'onSubmit',
        resolver: yupResolver(schema),
    });
    const type = watch('type');

    const onSubmit = handleSubmit((data) => {
        applyFilter(data);
    });

    const handleReset = () => {
        reset();
        resetFilter();
    };

    return (
        <form className = 'filter' onSubmit = { onSubmit } >
            <fieldset disabled = { isFiltered }>
                <RadioCheckbox
                    dsiabled = { isFiltered }
                    label = 'Хмарно'
                    error = { formState.errors.cloudy }
                    register = { register('type') }
                    value = 'cloudy'
                    selected = { type === 'cloudy' } />
                <RadioCheckbox
                    disabled = { isFiltered }
                    label = 'Сонячно'
                    error = { formState.errors.sunny }
                    register = { register('type') }
                    value = 'sunny'
                    selected = { type === 'sunny' } />
                <TemperatureInput
                    disabled = { isFiltered }
                    label = 'Мінімальна температура'
                    register = { register('minTemperature') }
                    error = { formState.errors.minTemperature } />
                <TemperatureInput
                    disabled = { isFiltered }
                    label = 'Максимальна температура'
                    register = { register('maxTemperature') }
                    error = { formState.errors.maxTemperature } />
            </fieldset>
            { isFiltered
                ? <button onClick = { handleReset }>Скинути</button>
                : <button disabled = { !formState.isDirty } type = 'submit'>Відфільтрувати</button> }
        </form>
    );
});
