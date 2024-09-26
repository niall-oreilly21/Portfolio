import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../Assets/Images/image (1).svg';
import { HashLink } from 'react-router-hash-link';
import '../../Css/App.css';
import SocialIcons from "../Navbar/SocialIcons";
import React from "react";

export default class NavBar extends React.Component<any, any>{

    constructor(props : any) {
        super(props);

        this.state ={
            scrolled : true
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll = () : void => {
        if (window.scrollY > 50)
        {
            this.setState({ scrolled: true });
        }
        else
        {
            this.setState({ scrolled: false });
        }
    }
    render() {
        return(
        <Navbar expand="md" className={this.state.scrolled ? "scrolled" : ""}>
         <Container>
                 <img src={logo} alt="Logo" />
             <Navbar.Toggle aria-controls="basic-navbar-nav">
                 <span className="navbar-toggler-icon"></span>
             </Navbar.Toggle>
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ms-auto">
                     <Nav.Link href="/home" className="navbar-link">Home</Nav.Link>
                     <Nav.Link href="/projects" className="navbar-link">Projects</Nav.Link>
                     <Nav.Link href="/hobbies" className="navbar-link">Hobbies</Nav.Link>
                 </Nav>
                 <span className="navbar-text">
                  <SocialIcons/>
               <HashLink to='www.linkedin.com/in/niall-o-́reilly-b0291b24b'>
                 <button className="vvd"><span>Let’s Connect</span></button>
               </HashLink>
             </span>
            </Navbar.Collapse>
         </Container>

     </Navbar>
    )
    }
}