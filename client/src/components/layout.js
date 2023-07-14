import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Sidebar from './sidebar';
import UserStatus from './userstatus';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from './auth/authprovider';

function Layout() {
    const userState = useAuthContext();

    if (!userState.loggedIn) {
        return (<Navigate to='/login' />);
    } else {
        return (

            <Container fluid>
                <Row>
                    <Col sm={3} md={2} className="bg-secondary sidebar">
                        <Sidebar />
                    </Col>
                    <Col sm={9} md={10} className="content">
                        <div className="d-flex justify-content-end mt-3 pr-4">
                            <UserStatus />
                        </div>
                        <Container>
                            <Outlet />
                        </Container>
                    </Col>
                </Row>
            </Container>

        );
    }

}

export default Layout;
