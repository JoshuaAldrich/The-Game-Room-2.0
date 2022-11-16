import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import headsImg from "../images/coin.svg";
import RPSImg from "../images/Rock.png";
import HoLImg from "../images/HoL.jpg";
import hangmanImg from "../images/hangman.png";
import diceImg from "../images/diceImage.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className=" mx-auto text-center pt-5 border bg-dark text-white border border-white border border-4 rounded ">
        <div className="col-12">
          <h1 className="">Welcome to the Game room!</h1>
          <p>
            {" "}
            We have a wide array of games for our users to enjoy! Check out the
            games below.
          </p>
          <div className="row rounded shadow-lg p-3 bg-danger mb-2 text-white border border-white">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={headsImg} />
              <Card.Body>
                <Card.Title>Heads or Tails</Card.Title>
                <Card.Text>
                  In this game you can choose heads or tails and test your luck!
                </Card.Text>
                <Button variant="light">
                  <Link to="/HoT"> View Game </Link>
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={RPSImg} />
              <Card.Body>
                <Card.Title>Rock Paper Scissors</Card.Title>
                <Card.Text>
                  In this game mode you can challenge the computer to a classic.
                </Card.Text>
                <Button variant="light">
                  <Link to="/RPS"> View Game </Link>
                </Button>
              </Card.Body>
            </Card>
            
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={HoLImg} />
              <Card.Body>
                <Card.Title>High or Low</Card.Title>
                <Card.Text>
                  Given a beginning number decide wether the next number will be
                  higher or lower.
                </Card.Text>
                <Button variant="light">
                  <Link to="/HoL"> View Game </Link>
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={hangmanImg} />
              <Card.Body>
                <Card.Title>Hangman</Card.Title>
                <Card.Text>
                  A classic from grade school guess the word correctly or lose.
                </Card.Text>
                <Button variant="light">
                  <Link to="/HoT"> View Game </Link>
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={diceImg} />
              <Card.Body>
                <Card.Title>Dice</Card.Title>
                <Card.Text>
                  Test your luck in dice playing against a computer to see who
                  rolls higher.
                </Card.Text>
                <Button variant="light">
                  <Link to="/HoT"> View Game </Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;