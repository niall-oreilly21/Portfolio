import React, { Component } from "react";
import CardData from "../CardData";
import Card from "../Card";
import projectsData from '../../projects.json';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import SearchBar from "../Navbar/SearchBar";

class ProjectsPage extends Component<any, {filteredProjects: any[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            filteredProjects: projectsData.projects // Initialize with all projects
        };
    }

    // Callback to receive filtered projects from SearchBar
    onFilterProjects = (tags: string[]): void => {

        const filteredProjects = projectsData.projects
            .map(project => ({
                ...project,
                matchCount: project.tags.filter(tag => tags.includes(tag)).length // Count matching tags
            }))
            .filter(project => project.matchCount > 0) // Filter projects with at least one matching tag
            .sort((a, b) => b.matchCount - a.matchCount); // Sort by number of matches

        this.setState({ filteredProjects });
    }

    render() {
        return (
            <>
                <section className="project" id="projects">
                    <Container>
                        <Row>
                            <Col size={12}>
                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                            <h2>Projects</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                                1500s, when an unknown printer took a galley of type and scrambled it to
                                                make a type specimen book.</p>
                                            <SearchBar onFilterProjects={this.onFilterProjects} /> {/* Pass the callback */}
                                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                                <Nav variant="pills"
                                                     className="nav-pills mb-5 justify-content-center align-items-center"
                                                     id="pills-tab">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                                <Tab.Content id="slideInUp"
                                                             className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                                    <Tab.Pane eventKey="first">
                                                        <Row>
                                                            {
                                                                this.state.filteredProjects.map((project: CardData, index: number) => {
                                                                    return (
                                                                        <Card
                                                                            key={index}
                                                                            cardData={project}
                                                                        />
                                                                    )
                                                                })
                                                            }
                                                        </Row>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="second">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                                            quam, quod neque provident velit, rem explicabo excepturi id
                                                            illo molestiae blanditiis, eligendi dicta officiis asperiores
                                                            delectus quasi inventore debitis quo.</p>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="third">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                                                            quam, quod neque provident velit, rem explicabo excepturi id
                                                            illo molestiae blanditiis, eligendi dicta officiis asperiores
                                                            delectus quasi inventore debitis quo.</p>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Tab.Container>
                                        </div>}
                                </TrackVisibility>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default ProjectsPage;
