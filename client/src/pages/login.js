import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../Utils/mutations";
import Auth from "../Utils/auth";

const Login = () => {
    const [formState, setFormState] = useState({ name: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })

    }

    const handleFormSubmit = async (event) => {
        event.prevenDefault();
        try {
            const { data } = await login({
                variables: { ...formState }
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <div className="flex-row justify-center border-4 p-1 mt-4">
            <div className="col-6 border rounded  p-4">
                <h3 className="login">Login </h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group ">
                        <label className="Name">Name</label>
                        <input
                            type="test"
                            className="form-control"
                            placeholder="Name"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="form-group">
                        <label className="PWD">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
                {error && <div><h1 className="logfail">Login failed</h1></div>}
            </div>

        </div>
    )
}

export default Login;