import React, { Component } from 'react'
import { Carousel, Container } from "react-bootstrap";
import "./Home.css"

export default class Home extends Component {
    render() {
        return (
            <div className="home-body">
                <Carousel className="home-carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src={require("../../images/speed.jpg")}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-shadow">High Performance</h3>
                            <p className="text-shadow">Dot <span className="accent-text">Star</span> Programming implements state of the art performance optimizations and [[[]]]] to bring you functionality you didn't even think possible</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src={require("../../images/circlething.jpg")}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-shadow">Fast Turnaround Times</h3>
                            <p className="text-shadow">Get prototypes for your project in as little as 1 week, with frequent updates on features</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-img"
                            src={require("../../images/businessman.jpg")}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-shadow">Flexible Solutions</h3>
                            <p className="text-shadow">Whether you just want a small piece of software to fit into your larger business operations, or you want a front to back solution from server setup to database design. Dot Star Programming has a solution for you</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container>
                    <h3 className="display-3">About Dot <span className="accent-text">Star</span></h3>
                    <p>Dot <span className="accent-text">Star</span> provides solutions for everything programming. From automation, to web design, to [[[]]]. <br></br>We employ only the absolute best of the best, blazing fast developers to get projects done extremely quickly, without sacrificing quality</p>
                    <hr></hr>
                </Container>

            </div>
        )
    }
}
