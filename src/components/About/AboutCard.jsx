import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubhangam Saxena </span>
            from <span className="purple"> India.</span>
            <br />
            I am currently looking for Opportunity to work as a Developer
            <br />
            I have completed B.Tech in ECE from JSS Academy of Technical
            Education,Noida
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Vedic Scriptures
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Knowing about mysterious things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shubhangam Saxena</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
