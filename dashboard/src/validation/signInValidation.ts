import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address format')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be 6 characters at minimum')
        .max(20, 'Password must be 20 characters at maximum')
        .required('Password is required')
});

export default ValidationSchema;