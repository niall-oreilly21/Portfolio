import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../Assets/Images/niall-pic.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from "react";

interface BannerState {
    loopNum: number;
    isDeleting: boolean;
    text: string;
    delta: number;
    index: number;
    toRotate: string[];
    period: number;
}
export default class Banner extends React.Component<any, BannerState>{

    private ticker: NodeJS.Timeout | undefined;
    constructor(props : any)
    {
        super(props);
        this.state = {
            loopNum: 0,
            isDeleting: false,
            text: '',
            delta: 300 - Math.random() * 100,
            index: 1,
            toRotate: ["Game Designer", "Programming", "User Testing"],
            period: 2000
        }
    }

    componentDidMount() {
        this.ticker = setInterval(() => this.tick(), this.state.delta);
    }

    componentWillUnmount() {
        if (this.ticker) {
            clearInterval(this.ticker);
        }
    }


    tick = () => {
        const i : number = this.state.loopNum % this.state.toRotate.length;

        const fullText : string = this.state.toRotate[i];

        const updatedText : string = this.state.isDeleting
            ? fullText.substring(0, this.state.text.length - 1)
            : fullText.substring(0, this.state.text.length + 1);

        this.setState({ text: updatedText });

        if (this.state.isDeleting)
        {
            this.setState({ delta: this.state.delta / 2 });
        }

        if (!this.state.isDeleting && updatedText === fullText)
        {
            this.setState({isDeleting: true, delta: this.state.period});
        }
        else if (this.state.isDeleting && updatedText === '')
        {
            this.setState({isDeleting: false, loopNum: this.state.loopNum + 1, delta: 500});
        }
    };

render() {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>
                                        {`👋 Hi! I'm Niall `}
                                        <span
                                            className="txt-rotate"
                                            data-period="1000"
                                            data-rotate='[ "Dia Dhuit a Hobo", "Game Designer", "Programming", "User Testing" ]'>
                                            <span className="wrap">{this.state.text}</span>
                                        </span>
                                    </h1>
                                    <p>🛠️💡✨ With a strong Computer Science skillset, including coding in Unity and Unreal, I enjoy bringing ideas to life through code and design, always seeking to make an impact in the world of game development.
                                        I try to blend my personal interests with my projects, keeping them fun and innovative while ensuring a polished final product.</p>
                                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

}
