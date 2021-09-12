import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import Experiences from '../Experiences/Experiences';
import HomeContent from '../HomesContent/HomeContent';
import SideInput from '../SideInput/SideInput';

const Home = () => {
    return (
        <div className="home_area">
            <Navigation home />
            <main>
                <Container>
                    <Row>
                        <Col md={4}>
                            <SideInput/>
                        </Col>
                        <Col md={8}>
                            <div className="home_content">
                                <Experiences/>
                                <HomeContent/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
};

export default Home;