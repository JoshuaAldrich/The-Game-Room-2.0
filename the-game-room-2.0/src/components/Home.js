import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

export const Home = () => {
    const [name, setName] = useState('');
    const [navigate, setNavigate] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('user');

                setName(data.name);
            } catch (e) {
                setNavigate(true);
            }
        })();
    }, []);

    const logout = async () => {
        await axios.post('logout', {}, {withCredentials: true});

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/Home"/>;
    }

    return <div className="form-signin mt-5 text-center">
        <h3>Welcome to the Game Room {name}</h3>
        <p>We hope you enjoy our selection of games to play from the list on the left.</p>
        <h2>Highscores:</h2>
      <ol>Top players</ol>
        <a href="javascript:void(0)" className="btn btn-lg btn-primary"
           onClick={logout}
        >Logout</a>
    </div>
}
export default Home;