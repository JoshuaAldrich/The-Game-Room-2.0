import {useState} from "react";
import {Navigate} from 'react-router-dom';
import axios from "axios";

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async e => {
        e.preventDefault();

        await axios.post('register', {
            name, email, password
        }
    );
    setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/Login"/>;
    }
    return <main className="form-signin">
        <form onSubmit={submit}>
            <h1 className="h4 mb-3 fw-bold">Register Here</h1>
            <div className="form-floating">
                <input className="form-control" placeholder="Place Name"
                       onChange={e => setName(e.target.value)}
                />
                <label>Name
                </label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="Email"
                       onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                       onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-200 btn btn-primary" type="submit">Submit</button>
        </form>
    </main>
}
