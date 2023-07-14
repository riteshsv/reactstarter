import React from "react";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";
import { Container,Form,Row,Button } from "react-bootstrap";

const Login = () => {
    const { creds, updateFields, handleLogin } = useLogin();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        
        if (await handleLogin(creds.username, creds.password)) {
            
            navigate('/');
        }
    };

    return (


        <Container fluid className="d-flex vw-100 vh-100 justify-content-center align-items-center" >
            
            <Row className="w-50 border border-primary rounded p-5">
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupUserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required type="text" name="username" value={creds.username} onChange={e => updateFields(e.target.name, e.target.value)} placeholder="User Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" name="password" value={creds.password} onChange={e => updateFields(e.target.name, e.target.value)} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

            

            </Row>
                
          
          
        </Container>

    );
};

export default Login;