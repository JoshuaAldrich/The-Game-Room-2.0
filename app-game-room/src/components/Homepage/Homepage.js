import React from "react";
import Header from "../Nav/Header";

import './Homepage.css';


const Homepage = () => {
    return (

        <div className="container-fluid">
            <div className="row text-center justify-content-center p-5 homepage ">
                <div className="col-md-5 text-align-center my auto">
                    <div className="card card-block d-flex" >
                        <div className="card-body align-items-center d-flex justify-content-center">

                            <div id="homepage" className="container-fluid">
                                <h1>Welcome to the Game Room</h1>
                                <p className="h2">We hope you enjoy our selection of games to play from the list on the left.</p>
                                <h2 className="Highscores">Highscores:</h2>
                                <ol>Top players</ol>
                                <ol>
                                    <p>dasdas</p>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Homepage;