import React from 'react'
import { Container } from "react-bootstrap";
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
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                    <img src="RPS" class="card-img-top" alt="../images"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</section>
  )
}
export default Game;
