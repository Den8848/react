import React from 'react';
import './SignIn.css';
import { Formik, Field, Form } from 'formik';

const SignIn = () => {
    return (
        <div>
            <h1 className="title">Sign In Page</h1>

            <div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
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

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default SignIn;