import { Container, Row, Col } from "react-bootstrap";
import logo from '../../Assets/Images/image (1).svg';
import SocialIcons from "./SocialIcons";
import React from "react";

export default class Footer extends React.Component<any, any>{
 render() {
   return (
       <footer className="footer">
        <Container>
         <Row className="align-items-center">
          <Col size={12} sm={6}>
           <img src={logo} alt="Logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           <SocialIcons/>
           <p>Copyright 2024. All Rights Reserved</p>
          </Col>
         </Row>
        </Container>
       </footer>
   )
 }
}