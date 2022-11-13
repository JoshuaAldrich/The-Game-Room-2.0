import React from "react";

const Login = () => {
    return (
        <div className="flex-row justify-center mt-4">
            <div className="col-12">

                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />

                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>

            </div>

        </div>
    )
}

export default Login;