import * as yup from 'yup';

export const schema = yup.object().shape({
    type: yup
        .string()
        .oneOf([null, 'cloudy', 'sunny'])
        .nullable()
        .notRequired(),
    minTemperature: yup
        .string()
        .notRequired(),
    maxTemperature: yup
        .string()
        .notRequired(),
});
