import React from 'react';
import './SignUp.css';
import {Field, Form, Formik} from "formik";

const SignUp = () => {
    return (
        <div>
            <h1 className="title">Sign Up Page</h1>

            <div>
                <Formik
                    initialValues={{
                        userName: '',
                        email: '',
                        password: '',
                        passwordRepeat: '',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <label htmlFor="userName">User name</label>
                        <Field id="userName" name="userName" placeholder="Maximus" />

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="maximus@gmail.com"
                            type="email"
                        />

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                        />

                        <label htmlFor="password-repeat">Repeat your password</label>
                        <Field
                            id="password-repeat"
                            name="password-repeat"
                        />

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default SignUp;