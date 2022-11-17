import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../Utils/mutations";
import Auth from "../Utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ name: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      console.log(error);
    }
    return (
        <div className="mt-4">
            <div className="col-12 bg-dark text-danger border border-4 border border warning rounded p-3 border border-danger">
                <h3>Login </h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group ">
                        <label >Name</label>
                        <input
                            name="name"
                            type="test"
                            className="form-control"
                            placeholder="name"
                            onChange={handleChange}
                        />

                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={formState.password}
                            placeholder="password"
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-danger m-3 ">Submit</button>
                </form>
                {error && <div>Login failed</div>}
            </div>

        </div>
    )
}

export default Login;