import * as Yup from "yup";

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g

export const MessageSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, '*Слишком короткое имя :(')
        .max(50, '*Слишком длинное имя :(')
        .required('*Это обязательное поле :)'),
    email: Yup.string().email('*Некорректный e-mail :(').required('*Это обязательное поле :)'),
    phone: Yup.string().matches(phoneRegExp, '*Некорректный номер телефона :(').required('*Это обязательное поле :)'),
    message: Yup.string().min(20,  '*Слишком короткое сообщение :(').max(420, '*Сообщение должно быть меньше 420 символов :(').required('*Это обязательное поле :)'),

});