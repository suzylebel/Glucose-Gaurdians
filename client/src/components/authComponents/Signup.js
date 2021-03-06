import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SignupComp from "./SignupComp"
import LoginLogo from '../../Images/loginlogo.png'



export default function Signup({children}) {
    return (
        
        <Container> 
            <Row className="row py-5 mt-4 align-items-center">
                <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">

                <img src={LoginLogo}
                 alt ="logo"
                  
                    className="img-fluid mb-3 d-md-block"
                />{' '}
                
                    <h1>Create an Account</h1>
                    <p>Track your blood sugar and medication with the Glucose Guardian App!</p>
                   

                </div>
                <div className="col-md-7 col-lg-6 ml-auto">
                    <SignupComp />


                </div>

            </Row>

        
      </Container>
    )
}



