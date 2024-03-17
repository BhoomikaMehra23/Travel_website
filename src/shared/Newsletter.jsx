import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
  return (
  <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter_content">
                <h2>Subscribe now to get useful travelling information.</h2>
                <div className="newsletter_input">
                    <input type="email" placeholder='Enter yoyr email'/>
                    <buttton className="btn newsletter_btn">Subscribe</buttton>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab itaque laborum totam porro perspiciatis vitae!</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter_img">
                    <img src={maleTourist} alt=""/>
                </div>
            </Col>

        </Row>
    </Container>
  </section>
  )
}

export default Newsletter