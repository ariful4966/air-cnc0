import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardItem from '../CardItem/CardItem';

const HomeContent = () => {
    return (
        <section className="home_content_area">
            <div className="section_heading">
                <h4>Homes</h4>
            </div>
            <div className="home_content_card">
                <Row>
                    <Col md={3} lg={4}>
                        <CardItem/>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default HomeContent;