import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../Utils/mutations";

const Login = () => {
    const [formState, setFormState] = useState({ name: '', password: '' });
    // const [login, { error }] = useMutation(LOGIN_USER)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })

    }

    const handleFormSubmit = async (event) => {
        event.prevenDefault();
        // try {
        //     const { data } = await login({
        //         variables: { ...formState }
        //     });
        //     console.log(data);
        // } catch (e) {
        //     console.error(e);
        // }
    }
    return (
        <div className="flex-row justify-center mt-4">
            <div className="col-12">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label >Name</label>
                        <input
                            type="test"
                            className="form-control"
                            placeholder="Name"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
               
            </div>

        </div>
    )
}

export default Login;