import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'

import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png'
import experienceImg from'../assets/images/experience.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../Components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../Components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
const Home = () => {
  return( <>
{/* =======================hero section start================= */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero_content">
            <div className="hero_subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before you Go'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore, in quas possimus voluptatibus nobis ratione. Distinctio voluptatum accusamus nihil beatae reiciendis molestiae. Adipisci maxime unde eligendi reiciendis aliquid hic.</p>

          </div>
        </Col>
        <Col lg='2'>
        <div className="hero_img-box">
            <img src={heroImg} alt=""/>
          </div>
          </Col>
          <Col lg='2'>

          <div className="hero_img-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
          </Col>
          <Col lg='2'>

          <div className="hero_img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar/>``
      </Row>
    </Container>
  </section>
{/* =======================hero section end================= */}
    <section>
      <Container>

        <Row>
          <Col lg='3'>
            <h5 className="services_subtitle">What we serve</h5>
            <h2 className="services_title">We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
{/* ===========================featured tour section start====================== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured_tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
{/* ===========================featured tour section end====================== */}


{/* ===========================experience section start====================== */}
        <section>
          <Container>
            <Row>
              <Col lg='6'>
                <div className="experience_content">
                  <Subtitle  subtitle={'Experience'}/>
                  <h2>With our all experience<br/> we will serve you</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br/>
                     In et earum nesciunt repudiandae, tempore eum.
                  </p>
                </div>
                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span>12k+</span>
                    <h6>Successfull Trip</h6>
                  </div>
                  <div className="counter_box">
                    <span>2k+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className="counter_box">
                    <span>15</span>
                    <h6>Years experience</h6>
                  </div>
                </div>
              </Col>
              <Col lg='6'>
                <div className="experience_img">
                  <img src={experienceImg}/>
                </div>
              </Col>

            </Row>
          </Container>
        </section>

{/* ===========================experience section end====================== */}
{/* ===========================gallery section start====================== */}
                <section>
                  <Container>
                    <Row>
                      <Col lg='12'>
                        <Subtitle subtitle={'Gallery'}/>
                        <h2 className="gallery_title">Visit our customers tour gallery </h2>
                      </Col>
                      <Col lg='12'>
                        <MasonryImagesGallery/>

                      </Col>
                    </Row>
                  </Container>
                </section>
{/* ===========================gallery section end====================== */}


{/* ===========================testimonal section start====================== */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial_title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>


{/* ===========================testimonal section end====================== */}
<Newsletter/>





  </>
  );
};

export default Home