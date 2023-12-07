import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gpt3.png";
import projImg2 from "../assets/img/project-img2.png";
import sonesta from "../assets/img/sonesta.png";
import doomBurst from "../assets/img/doomburst.png";
import LookAi from "../assets/img/lookai.png";
import flickPlix from "../assets/img/flickplix.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import farmer from "../assets/img/farmer.png";
import bank from "../assets/img/bank.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://sonesta-frontend-design-eeih.vercel.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://sonesta-frontend-design-eeih.vercel.app/",
    },
    {
      title: "LOOK AI",
      description: "Research Project",
      imgUrl: LookAi,
      link: "https://look-ai-web-yl66.vercel.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bank,
      link: "https://react-fully-responsive-project.vercel.app/",
    },
    {
      title: "Hotel Sonesta",
      description: "Custom Web Design",
      imgUrl: sonesta,
      link: "https://sonesta-frontend-design-eeih.vercel.app/",
    },
    {
      title: "Smart Farmer",
      description: "Research Project",
      imgUrl: farmer,
      link: "https://smart-farmer.vercel.app/",
    },
  ];

  const apps = [
    {
      title: "Flick Plix",
      description: "Movie Stream Application",
      imgUrl: flickPlix,
      link: "https://sonesta-frontend-design-eeih.vercel.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: doomBurst,
      link: "https://sonesta-frontend-design-eeih.vercel.app/",
    },
    {
      title: "LOOK AI",
      description: "Research Project",
      imgUrl: LookAi,
      link: "",
      link: "https://sonesta-frontend-design-eeih.vercel.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://sonesta-frontend-design-eeih.vercel.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: sonesta,
      link: "https://sonesta-frontend-design-eeih.vercel.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: LookAi,
      link: "https://sonesta-frontend-design-eeih.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore some of my diverse projects showcasing a range of
                    skills in web design and development. From captivating web
                    designs to dynamic web applications, I've crafted solutions
                    across various domains including movie streaming, social
                    media, and project management. Each project reflects my
                    commitment to creativity, functionality, and user-centric
                    design.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Designs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile Apps</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {apps.map((app, index) => {
                            return <ProjectCard key={index} {...app} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
