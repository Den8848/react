import React from 'react';
import {Field, Form, Formik} from "formik";
import ValidationSchema from '../validation/signInValidation';
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    let navigate = useNavigate();

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
                    onSubmit={(values) => {
                        console.log(values);
                        console.log('Form is validated!');
                        navigate('/dashboard');
                    }}
                >
                    {props => <div className="form__wrapper">
                        <Form className="form">
                            <label htmlFor="email">Email</label>
                            <Field
                                className="input__field"
                                id="email"
                                name="email"
                                placeholder="maximus@gmail.com"
                                type="email"
                            />
                            {props.touched.email && props.errors.email && <p className="error__message">{props.errors.email}</p>}

                            <label htmlFor="password">Password</label>
                            <Field
                                className="input__field"
                                id="password"
                                name="password"
                                type="password"
                            />
                            {props.touched.password && props.errors.password && <p className="error__message">{props.errors.password}</p>}

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

export default SignInForm;