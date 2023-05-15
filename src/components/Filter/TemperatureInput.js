export const TemperatureInput = ({
    label, register, disabled,
}) => {
    return (
        <p className = 'custom-input'>
            <label>{ label }</label>
            <input
                type = 'number'
                { ...register }
                disabled = { disabled } />
        </p>
    );
};
