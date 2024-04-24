import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

function Booking() {
  return (
    <div>
      <Container className='mt-5'>
        <h1 style={{ fontFamily: "Monotype Corsiva" }} className='text-start'>Book A Table</h1>
        <Row>
          <Col>
            <Form className='mt-4'>
              <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">

                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">

                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">

                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="exampleForm.ControlSelect4">

                <Form.Control as="select" >
                  <option>How Many Persons?</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
                <Form.Control type="date" />
              </Form.Group>
              <Button variant="warning" className='text-white fs-5 px-4 rounded-pill  float-start'>Book Now  </Button>

            </Form>
          </Col>
          <Col>
            <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121065.75395511108!2d73.85866541301662!3d18.515122892977853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c31fa5f4db8b%3A0xd59c68b2ef3273ca!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1711084650288!5m2!1sen!2sin" width="600" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded'></iframe>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Booking
