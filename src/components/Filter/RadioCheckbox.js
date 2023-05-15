// Core
import cn from 'classnames';

export const RadioCheckbox = ({
    label, register, error, selected, disabled, value,
}) => {
    return (
        <label className = { cn('checkbox', {
            selected,
        }) }>
            <div>
                <span className = 'error-message'>{ error?.message }</span>
                { label }
            </div>
            <input
                value = { value }
                type = 'radio'
                { ...register }
                disabled = { disabled } />
        </label>
    );
};
