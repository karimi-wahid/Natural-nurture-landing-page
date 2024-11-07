import * as yup from 'yup';

export const userSchema = yup.object().shape({
    email: yup.string().email().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    companyName: yup.string(),
    countryName: yup.string().required(),
    houseAdd: yup.string().required(),
    cityName: yup.string().required(),
    stateName: yup.string().required(),
    postZipCode: yup.string().required(),
    phone: yup.string().required(),
    paymentMethod: yup.string().required(),
})