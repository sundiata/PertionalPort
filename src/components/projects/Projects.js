import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
    id="projects"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        des="My Projects"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
        title="Inventory Management System"
        des="A comprehensive system designed to streamline inventory management processes for businesses. Features real-time stock tracking, automated alerts, and detailed reporting to ensure efficient inventory control."
        src={projectOne}
      />
      <ProjectsCard
        title="NCCR Data Portal"
        des="An interactive data portal created for the National Centre for Cardiovascular Research (NCCR). It facilitates data visualization, analysis, and sharing, enhancing the accessibility and usability of complex cardiovascular datasets."
        src={projectTwo}
      />
      <ProjectsCard
        title="Yummy Eats"
        des="A user-friendly mobile app designed to connect food enthusiasts with local dining options. It features restaurant reviews, menus, and a reservation system, aimed at improving the dining experience and convenience for users."
        src={projectThree}
      />
      <ProjectsCard
        title="E-learning App"
        des="An educational application offering a range of online courses and interactive learning modules. It supports various learning styles with features such as video lectures, quizzes, and progress tracking to enhance the online education experience."
        src={projectFour}
      />
      <ProjectsCard
        title="Instagram Clone"
        des="A social media platform inspired by Instagram, featuring core functionalities like photo sharing, user profiles, and social interactions. It showcases capabilities in developing scalable and engaging social networking applications."
        src={projectFive}
      />
      <ProjectsCard
        title="Com-Conference"
        des="A conference management system designed to facilitate event organization and participant management. It includes features for scheduling, attendee registration, and session tracking, aimed at optimizing the conference experience for organizers and attendees."
        src={projectSix}
      />
    </div>
  </section>
  
  );
}

export default Projects