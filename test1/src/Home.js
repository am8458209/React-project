
import 'bootstrap/dist/css/bootstrap.min.css';
import lmg from './scott-webb-yekGLpc3vro-unsplash.jpg';
import s_img from './download.jpg';
import s1_img from './download (1).jpg';
import s2_img from './scott-webb-yekGLpc3vro-unsplash.jpg';
import s3_img from './pexels-brett-sayles-1990764.jpg';
import s4_img from './pawel-czerwinski-OfwiURcZwYw-unsplash.jpg';
import s5_img from './pexels-pixabay-279810.jpg';
import s6_img from './pexels-onemorecoffee-179993.jpg';
import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import Na from './Nav';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
     
<Na/>
      <header>
        <img
          src={lmg}
          alt="Web Security"
          className="img-fluid w-100"
          style={{ objectFit: 'cover', height: '100vh' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1 className="display-5">Welcome to Web Security</h1>
          <p className="lead">Secure your web applications with our advanced solutions</p>
        </div>
      </header>

    
      

      
     


      <section id="services" className="py-5 ">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-primary">Our Services</h2>
              <p>We offer comprehensive web security solutions to protect your business.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body className='card'> 
                  <Card.Title className='text-center'>Secure installation </Card.Title>
                  <img src={s_img}  className='img-fluid' />
                  <Card.Text className='text-center'>We can install any sides for you.</Card.Text>
                  <button className='btn btn-outline-dark'> <a to="">more information</a></button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body className='card'>
                  <Card.Title className='text-center'>Maintenance</Card.Title>
                  <img src={s1_img} className='img-fluid' />
                  <Card.Text className='text-center'>Can Maintenance any device.</Card.Text>
                  <button className='btn btn-outline-dark'> <a to="">more information</a></button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body className='card'>
                  <Card.Title className='text-center'>Sale</Card.Title>
                  <img src={s2_img}  className='img-fluid' />
                  <Card.Text className='text-center'>Identify and neutralize threats in real-time.</Card.Text>
                  <button className='btn btn-outline-dark'> <a to="">more information</a></button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    
      <section id="card" className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-primary">Our Key Features</h2>
              <p>Explore the highlights of our platform.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body className='card'>
                  <Card.Title className='text-center'>Lock</Card.Title>
                  <img  src={s3_img} alt='#'  className='img-fluid'/>
                  <Card.Text className='text-center'>This lock save your home or combany.</Card.Text>
                  <Link to="/card" className='btn btn-outline-dark'>more information</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body className='card'>
                  <Card.Title className='text-center'>Camera</Card.Title>
                  <img  src={s4_img} alt='#'  className='img-fluid'/>
                  <Card.Text className='text-center'>Camera it is important device security.</Card.Text>
                  <Link to="/card" className='btn btn-outline-dark'>more information</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body className='card'>
                  <Card.Title className='text-center'>Door Lock</Card.Title>
                  <img  src={s5_img} alt='#'  className='img-fluid'/>
                  <Card.Text className='text-center'>Lock For You Door For More Security.</Card.Text>
                  <Link to="/card" className='btn btn-outline-dark'>more information</Link>                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      <section id="about" className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="text-primary">About Us</h2>
              <p>Get to know more about our mission and expertise.</p>
            </Col>
          </Row>
          <Row>
            <Col className='Col-6'>
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </Col>
            <Col className='Col-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.77769374968!2d31.340866513180945!3d30.059462761148104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1734893654751!5m2!1sar!2seg" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>&copy;Web Security. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default HomePage;
