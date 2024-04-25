import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RapidChat from "../../Assets/Projects/rapid-chat.png";
import Ecom from "../../Assets/Projects/ecom-mern.png";
import CountryApp from "../../Assets/Projects/country-app.png";
import JobListing from "../../Assets/Projects/job-search.png";
import MernBlog from "../../Assets/Projects/mern-blog.png";
import MernBooking from "../../Assets/Projects/mern-booking.png";
import SocioVerse from "../../Assets/Projects/socioverse-main.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecom}
              isBlog={false}
              title="Ecommerce"
              description="Crafted using the MERN stack alongside Redux Toolkit and integrated with Stripe payments, my ecommerce website is a comprehensive platform offering a seamless shopping experience. Users can browse through an extensive product catalog, add items to their cart, and securely checkout with Stripe. The site features robust user authentication, an intuitive shopping cart system, and an admin dashboard for managing orders. With a responsive design and emphasis on security, including JWT authentication and secure payment processing, this project demonstrates my ability to develop scalable and feature-rich web applications"
              ghLink="https://github.com/Shubhangam333/ecommerce-2.0"
              demoLink="https://ecom527-client.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RapidChat}
              isBlog={false}
              title="RapidChat"
              description="My chatting application, developed using Socket.io, Node.js, and Next.js, offers a seamless and real-time communication platform. Users can engage in instant messaging with friends or colleagues through individual or group chats. The application boasts features such as message notifications, typing indicators, and message history retrieval. With its responsive design and efficient backend architecture powered by Socket.io for real-time data transfer, this application fosters seamless communication among users."
              ghLink="https://github.com/Shubhangam333/RapidChat/"
              demoLink="https://rapid-chat-silk.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SocioVerse}
              isBlog={false}
              title="SocioVerse"
              description="SocioVerse is a vibrant social networking platform offering a seamless user experience. With features including post creation and updates, interactive comments and replies, real-time updates, and user-to-user communication through chat, audio, and video calls, SocioVerse fosters engaging and meaningful interactions. Users can effortlessly stay connected with friends, family, and communities while enjoying the flexibility to follow or unfollow other users based on their preferences. Whether sharing thoughts, multimedia content, or engaging in live conversations, SocioVerse provides a dynamic space for users to connect, collaborate, and cultivate relationships in a modern digital environment. "
              ghLink="https://github.com/Shubhangam333/SocioVerse"
              demoLink="https://socio-verse-client.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MernBlog}
              isBlog={false}
              title="DevBlog"
              description="Introducing my cutting-edge MERN blog web app, powered by React, Node.js, Firebase, and Tailwind CSS. This innovative platform not only enables seamless blogging but also features an integrated dashboard for effortless content management. With the latest technologies at its core, users can create, edit, and publish captivating blog posts with ease. The sleek and responsive design ensures an exceptional user experience across devices. Leveraging Firebase for real-time data synchronization and Node.js for backend functionality, this app sets new standards for modern blogging platforms, offering a dynamic and efficient solution for both bloggers and content managers alike."
              ghLink="https://github.com/Shubhangam333/DevBlog/"
              demoLink="https://devblog-wjcy.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MernBooking}
              isBlog={false}
              title="Mern Booking"
              description="Introducing my cutting-edge MERN hotel booking web app, seamlessly integrating React, Node.js, React Query, Tailwind CSS, and Stripe for a top-tier user experience. Users can effortlessly browse and book hotel rooms, while hosts can easily list their properties. With real-time updates and dynamic content management, the platform ensures smooth interactions. The payment process is secure and efficient, facilitated by Stripe integration. Leveraging the latest technologies, including React Query for optimized data fetching and Tailwind CSS for sleek design, this app revolutionizes the hotel booking experience."
              ghLink="https://github.com/Shubhangam333/hotelbooking"
              demoLink="https://hotelbooking-uu3q.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CountryApp}
              isBlog={false}
              title="CountryApp"
              description="This React app harnesses the power of the Context API alongside the REST Countries API to offer users a rich and educational experience. By integrating the REST Countries API, users can explore detailed information about various countries, including their name, population, capital, languages spoken, and more. Additionally, I've incorporated a color theme switcher feature, allowing users to personalize their viewing experience based on their preferences. "
              ghLink="https://github.com/Shubhangam333/World-Country-App"
              demoLink="https://profound-snickerdoodle-3b27db.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JobListing}
              isBlog={false}
              title="JobListing"
              description="My React application leverages the Context API to create a seamless job listing platform with advanced filtering capabilities. Users can browse through a diverse range of job listings and easily filter them based on criteria such as job title, location, company, and job type. The app offers a user-friendly interface, allowing job seekers to quickly find relevant opportunities that match their preferences and qualifications. By harnessing the power of React's component-based architecture and the Context API for state management, the app ensures efficient data handling and smooth interaction. "
              ghLink="https://github.com/Shubhangam333/Frontend-Mentor---Job-listings-with-filtering-solution"
              demoLink="https://lighthearted-bunny-f12f74.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
