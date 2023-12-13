import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, techStack }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="proj-img" src={imgUrl} alt="" />
        <a href={link}>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <span>Tech Stack : {techStack}</span>
        </div></a>
      </div>
    </Col>
  )
}
