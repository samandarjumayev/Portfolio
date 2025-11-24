import * as Yup from 'yup';

export const LoginSchema = Yup.object({
    name: Yup.string().matches(/[a-zA-Z]/).min(4).required('Ismingizni kiriting.!'),
    email: Yup.string().email().required('Emailingizni kiriting'),
    password: Yup.string().matches(/[a-zA-Z0-9]/).min(6).required('Passwordni kiriting.!')
})