import React from 'react';
import {Field, Form, Formik} from "formik";
import ValidationSchema from '../validation/signInValidation';
import { useNavigate } from "react-router-dom";
import ROUTES from '../defaultData/routes';

const SignInForm = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="title">Sign In Page</h1>

            <div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validateOnChange={true}
                    validationSchema={ValidationSchema}
                    onSubmit={() => {
                        navigate(ROUTES.DASHBOARD_PAGE);
                    }}
                >
                    {({values, errors, touched}) => <div className="form__wrapper">
                        <Form className="form">
                            <label htmlFor="email">Email</label>
                            <Field
                                className="input__field"
                                id="email"
                                name="email"
                                placeholder="maximus@gmail.com"
                                type="email"
                            />
                            {touched.email && errors.email && <p className="error__message">{errors.email}</p>}

                            <label htmlFor="password">Password</label>
                            <Field
                                className="input__field"
                                id="password"
                                name="password"
                                type="password"
                            />
                            {touched.password && errors.password && <p className="error__message">{errors.password}</p>}

                            <div className="button__wrapper">
                                <button type="submit" className="button__submit" onClick={() => {
                                    localStorage.setItem('form', JSON.stringify(values))
                                }}>Submit</button>
                            </div>
                        </Form>
                    </div>}
                </Formik>
            </div>
        </div>
    );
};

export default SignInForm;