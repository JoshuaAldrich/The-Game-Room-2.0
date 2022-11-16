import React, {useState} from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../Utils/mutations";

const Login = () => {
    const [formstate, setFormState] = useState({ name: '', password: '' });
    

    const handleFormSubmit = async (event) => {
        event.prevenDefault();
    }
    return (
        <div className="flex justify-center mt-4">
            <div className="col-12">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Name" />

                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
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