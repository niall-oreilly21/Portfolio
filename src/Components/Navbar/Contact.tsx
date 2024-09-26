import React, { Component } from "react";
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import spidermanContactImage from "../../Assets/Images/spidey.png";
import emailjs from '@emailjs/browser';

interface ContactState {
    formDetails: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        message: string;
    };
    buttonText: string;
    status: {
        success?: boolean;
        message?: string;
    };
}

export default class Contact extends Component<any, ContactState> {

    constructor(props: any) {
        super(props);
        this.state = {
            formDetails: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            },
            buttonText: 'Send',
            status: {}
        };
    }

    onFormUpdate = (category : string, value : string) : void => {
        this.setState({
            formDetails : {
                ...this.state.formDetails,
                [category]: value
            }
        });
        }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ buttonText: "Sending..." });

        // Prepare the template parameters for EmailJS
        const templateParams = {
            firstName: this.state.formDetails.firstName,
            lastName: this.state.formDetails.lastName,
            email: this.state.formDetails.email,
            phone: this.state.formDetails.phone,
            message: this.state.formDetails.message,
        };

        emailjs.send('service_qvqne92', 'template_uwq3f82', templateParams, 'kXnropTAQUqaDC7bI')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.setState({
                    buttonText: "Send",
                    formDetails: {
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        message: ''
                    },
                    status: { success: true, message: 'Message sent successfully' }
                });
            }, (error) => {
                console.log('FAILED...', error);
                this.setState({
                    buttonText: "Send",
                    status: { success: false, message: 'Something went wrong, please try again later.' }
                });
            });
    };

    render() {
        return(
            <section className="contact" id="connect">
                <Container>
                    <Row className="align-items-center">
                        <Col size={12} md={6}>
                            <TrackVisibility>
                                {({isVisible}) =>
                                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""}
                                         src={spidermanContactImage} alt="Contact Us"/>
                                }
                            </TrackVisibility>
                        </Col>
                        <Col size={12} md={6}>
                            <TrackVisibility>
                                {({isVisible}) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h2>Get In Touch</h2>
                                        <form onSubmit={this.handleSubmit}>
                                            <Row>
                                                <Col size={12} sm={6} className="px-1">
                                                    <input type="text" value={this.state.formDetails.firstName}
                                                           placeholder="First Name"
                                                           onChange={(e) => this.onFormUpdate('firstName', e.target.value)}/>
                                                </Col>
                                                <Col size={12} sm={6} className="px-1">
                                                    <input type="text" value={this.state.formDetails.lastName}
                                                           placeholder="Last Name"
                                                           onChange={(e) => this.onFormUpdate('lastName', e.target.value)}/>
                                                </Col>
                                                <Col size={12} sm={6} className="px-1">
                                                    <input type="email" value={this.state.formDetails.email}
                                                           placeholder="Email Address"
                                                           onChange={(e) => this.onFormUpdate('email', e.target.value)}/>
                                                </Col>
                                                <Col size={12} sm={6} className="px-1">
                                                    <input type="tel" value={this.state.formDetails.phone} placeholder="Phone No."
                                                           onChange={(e) => this.onFormUpdate('phone', e.target.value)}/>
                                                </Col>
                                                <Col size={12} className="px-1">
                                                    <textarea rows={6} value={this.state.formDetails.message} placeholder="Message"
                                                              onChange={(e) => this.onFormUpdate('message', e.target.value)}></textarea>
                                                    <button type="submit"><span>{this.state.buttonText}</span></button>
                                                </Col>
                                                {
                                                    this.state.status.message &&
                                                    <Col>
                                                        <p className={this.state.status.success === false ? "danger" : "success"}>{this.state.status.message}</p>
                                                    </Col>
                                                }
                                            </Row>
                                        </form>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}