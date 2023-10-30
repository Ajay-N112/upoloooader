import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img className='logooo' src="https://i.postimg.cc/05JKy4pw/upload-animation.gif" alt="" />
          </Col>

          <Col xs={12} md={6}>
            <h1 className='font2'>Video Uploader</h1>
            <br />
            <p className='p1'>
              <i class="fa-solid fa-palette"></i> 100% fully customizable
            </p>
            <p className='p1'>
              <i class="fa-solid fa-mobile"></i> Edit and Download on 
            </p>
            <p className='p1'>
              <i class="fa-solid fa-upload"></i> Share and publish anywhere
            </p>
            <p className='p1'>
              <i class="fa-solid fa-users"></i> Collaborate in real time
            </p>
            <p className='p1'>
              <i class="fa-solid fa-icons"></i> Millions of images & icons
            </p>
            <p className='p1'>
              <i class="fa-solid fa-tape"></i> Animation and transformations
            </p>
            <p className='p1'>
              <i class="fa-solid fa-eraser"></i>beautiful and Creative Assets
            </p>
            <p className='p1'>
              <i class="fa-solid fa-fill-drip"></i>Businesses to create design
            </p>
            <Link to={'/home'}>
              <Button className='ml'>Get started</Button>{' '}
            </Link>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <hr />
      <h1 className='text'>FEATURES</h1>
      <Container className='c1'>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/KjtF52mk/460a6dc4e3949182fe60cf720c912a96-w200.gif" />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Management is the process of getting things done through others with the help of some basic activities like planning, organizing, directing, coordinating, and controlling to achieve the desired goals and objectives.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/4NbPrSdz/76TJ.gif" />
              <Card.Body>
                <Card.Title>Categories videos</Card.Title>
                <Card.Text>
                  Channels and videos can be arranged using YouTube video categories. It goes without saying that you will get greater results if you apply your video to the correct category. It makes
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/WpxwFPDm/9hHa.gif" />
              <Card.Body>
                <Card.Title>Watch videos</Card.Title>
                <Card.Text>
                  "Watched" generally refers to the action of viewing a video on the platform. When you watch a video on YouTube, it means you are actively engaging with the content by viewing it on your device.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
