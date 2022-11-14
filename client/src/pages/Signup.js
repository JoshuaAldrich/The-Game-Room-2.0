import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { SIGNUP_ADDUSER } from "../Utils/mutations";
import Auth from "../Utils/auth";

const Signup = () => {
    const [formState, setFormState] = useState({ name: '', email: '', password: '' });
    // const [signup, { error }] = useMutation(SIGNUP_ADDUSER)

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
        //     const { data } = await addUser({
        //         variables: { ...formState }
        //     });
        //     Auth.login(data.addUser.token);
        // } catch (e) {
        //     console.error(e);
        // }
    }
    return (
        <div className="flex-row justify-center mt-4">
            <div className="col-12 border rounded p-3">
                <h3>Sign Up </h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group ">
                        <label >Name</label>
                        <input
                            type="test"
                            className="form-control"
                            placeholder="Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group ">
                        <label >Email</label>
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
                {/* {error && <div><h1>Login failed</h1></div>} */}
            </div>

        </div>
    )
}

export default Signup;