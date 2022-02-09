import React from 'react';
import {Field, Form, Formik} from "formik";
import ValidationSchema from '../validation/signUpValidation';
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const Navigate = useNavigate();
    const DashboardUrl = '/dashboard';

    return (
        <div>
            <h1 className="title">Sign Up Page</h1>

            <div>
                <Formik
                    initialValues={{
                        userName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validateOnChange={true}
                    validationSchema={ValidationSchema}
                    onSubmit={() => {
                        Navigate(DashboardUrl);
                    }}
                >
                    {({errors, touched}) => <div className="form__wrapper">
                        <Form className="form">
                            <label htmlFor="userName">User name</label>
                            <Field className="input__field" id="userName" name="userName" placeholder="Maximus" />
                            {touched.userName && errors.userName && <p className="error__message">{errors.userName}</p>}

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

                            <label htmlFor="password-repeat">Repeat your password</label>
                            <Field
                                className="input__field"
                                id="password-repeat"
                                name="confirmPassword"
                                type="password"
                            />
                            {touched.confirmPassword && errors.confirmPassword && <p className="error__message">{errors.confirmPassword}</p>}

                            <div className="button__wrapper">
                                <button type="submit" className="button__submit">Submit</button>
                            </div>
                        </Form>
                    </div>}
                </Formik>
            </div>
        </div>
    );
};

export default SignUpForm;