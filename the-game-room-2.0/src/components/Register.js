import {useState} from "react";
import {Navigate} from 'react-router-dom';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async e => {
        e.preventDefault();

        await axios.post('register', {
            name, email, password
        });

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/login"/>;
    }
