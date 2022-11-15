import React from 'react'
import { Container, Col, Row  } from "react-bootstrap";
import RPS from "../images/RPS.jpg";
import highorlow from "../images/highorlow.jpg";
import HoT from "../images/HoT.jpg";
import Logo from "../images/Logo.png";
import spades from "../images/spades.png";
import questionmark from "../images/questionmark.png";




export const Game = () => {
  return (
    <section className="games" id="games">
        <Container>
            <Row>
                <Col>
                <div className="games-box">
                    <h2>
                        Games
                    </h2>
                    <p> jjbdbfhdfbhshbfhbBEfbwe </p>
                    <div className='item'>
                        <img src={RPS} alt="Images" />
                        <h3>Rock Paper Scissors</h3>
                    </div>
                    <div className='item'>
                        <img src={highorlow} alt="Images" />
                        <h3>High Or Low</h3>
                    </div>
                    <div className='item'>
                        <img src={HoT} alt="Images" />
                        <h3>Heads or Tails</h3>
                    </div>
                    <div className='item'>
                        <img src={Logo} alt="Images" />
                        <h3>snap</h3>
                    </div>
                    <div className='item'>
                        <img src={spades} alt="Images" />
                        <h3>crackle</h3>
                    </div>
                    <div className='item'>
                        <img src={questionmark} alt="Images" />
                        <h3>POP</h3>
                    </div>
                </div>
               </Col>
            </Row>
        </Container>
    </section>
  )
}
export default Game;
