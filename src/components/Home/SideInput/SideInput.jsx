import React from 'react';
import { Form, Button, Row, Col, FloatingLabel, Card, FormControl } from 'react-bootstrap';
import { adultDecrement, adultIncrement, babyDecrement, babyIncrement, childDecrement, childIncrement } from '../../../redux/Actions/bookingAction';
import { connect } from 'react-redux'
import './SideInput.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCoffee, faMinus, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

const SideInput = (props) => {
    const { adultDecrement, adultIncrement, adult, childIncrement, childDecrement, child, baby, babyDecrement, babyIncrement } = props

    const onSubmiteSearch = () => {

    }
    
    return (
        <aside className="sidebar_area">
            <h4>Where do you want to go</h4>
            <div className="sidebar_form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="email" placeholder="Chose You Location" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Row className="g-2">
                            <Col md={6}>
                                <FloatingLabel controlId="floatingInputGrid" label="Arival">
                                    <Form.Control type="date" placeholder="name@example.com" />
                                </FloatingLabel>
                            </Col>
                            <Col md={6}>
                                <FloatingLabel controlId="floatingInputGrid" label="Departure">
                                    <Form.Control type="date" placeholder="name@example.com" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Card>
                        <Card.Header>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Guest</Form.Label>
                                <Form.Control type="text" placeholder="Guest" value={
                                    (adult > 0 ? 'ADULT ' + adult : '') + (child > 0 ? "," : "") +
                                    (child > 0 ? ' CHILD ' + child : '') + (baby > 0 ? "," : "") +
                                    (baby > 0 ? 'BABY ' + baby : '') ||
                                    ((!adult && !child && !baby) && 0)
                                } />
                            </Form.Group>
                            <Card.Body className="sideBar_card">
                                <div className="d-flex justify-content-between align-items-center py-3">
                                    <Card.Title>ADULTS</Card.Title>
                                    <Card.Text className="d-flex ">
                                        <Button onClick={adultDecrement} variant="outline-success"><FontAwesomeIcon icon={faMinus}/></Button>
                                        <input type="number" value={adult} placeholder="Large text" />
                                        <Button onClick={adultIncrement} variant="outline-success"><FontAwesomeIcon icon={faPlus} /></Button>
                                    </Card.Text>
                                </div>
                                <div className="d-flex justify-content-between align-items-center py-3">
                                    <Card.Title>CHILD</Card.Title>
                                    <Card.Text className="d-flex ">
                                        <Button onClick={childDecrement} variant="outline-success" ><FontAwesomeIcon icon={faMinus}/></Button>
                                        <Form.Control type="number" value={child} placeholder="Large text" />
                                        <Button onClick={childIncrement} variant="outline-success"><FontAwesomeIcon icon={faPlus} /></Button>
                                    </Card.Text>
                                </div>
                                <div className="d-flex justify-content-between align-items-center py-3">
                                    <Card.Title>BABIES</Card.Title>
                                    <Card.Text className="d-flex ">
                                        <Button onClick={babyDecrement} variant="outline-success"><FontAwesomeIcon icon={faMinus}/></Button>
                                        <Form.Control type="number" value={baby} placeholder="Large text" />
                                        <Button onClick={babyIncrement} variant="outline-success"><FontAwesomeIcon icon={faPlus}/></Button>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card.Header>

                    </Card>
                    <Button className="brand_btn_outline ms-auto d-block m-3" type="submit">
                        Apply
                    </Button>
                </Form>
            </div>
            <Form className="d-flex brand_search" onSubmit={onSubmiteSearch}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2 brand_bg "
                    aria-label="Search"
                />
                <label className="search_icon"><FontAwesomeIcon icon={faSearch}/> Search</label>
            </Form>
        </aside>
    );
};
const mapDispatchToProps = {
    adultIncrement: adultIncrement,
    adultDecrement: adultDecrement,
    childIncrement: childIncrement,
    childDecrement: childDecrement,
    babyIncrement: babyIncrement,
    babyDecrement: babyDecrement
}
const mapStateToProps = state => {
    return {
        adult: state.adult,
        child: state.child,
        baby: state.baby
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideInput);