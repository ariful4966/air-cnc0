import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CardItem from '../CardItem/CardItem';

const Experiences = () => {
    return (
        <section className="experiences_area">
            <div className="section_heading">
                <h4>Experiences</h4>
            </div>
            <div className="exprences_content">
                <Row>
                    <Col md={4} lg={3}>
                        <CardItem />
                    </Col>
                    <Col md={4} lg={3}>
                        <CardItem />
                    </Col>
                    <Col md={4} lg={3}>
                        <CardItem />
                    </Col>
                    <Col md={4} lg={3}>
                        <CardItem />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Experiences;