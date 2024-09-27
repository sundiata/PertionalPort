import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { duration: 0.5 } }}
  className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
>
  <div>
    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
      <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
    </div>
    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      <ResumeCard
        title="Mobile App Developer"
        subTitle="Zigtech - (2022)"
        result="Gambia"
        des="Developed  mobile applications for various clients, focusing on user-friendly design and functionality. Played a key role in troubleshooting and enhancing app performance, ensuring seamless user experiences."
      />
      <ResumeCard
        title="Mobile App Developer"
        subTitle="2M-Corp - (2021)"
        result="Gambia"
        des="Collaborated with a diverse team to create mobile applications tailored for the Gambian market. Implemented innovative features and optimized performance to meet high user demand and industry standards."
      />
      <ResumeCard
        title="Mobile App Developer"
        subTitle="Yummy Eats - (2022 - 2023)"
        result="Gambia"
        des="Led the development of a food delivery app, integrating GPS tracking and real-time order management. The app significantly improved operational efficiency and user engagement in the competitive food service industry."
      />
    </div>
  </div>
  <div>
    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
      <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
    </div>
    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      <ResumeCard
        title="Web Developer Trainer"
        subTitle="Gomindz (2022 - 2024)"
        result="Gambia"
        des="Trained aspiring web developers in front-end and back-end technologies, including HTML, CSS, JavaScript, and frameworks like React. Provided mentorship and guidance on best coding practices and project development."
      />
      <ResumeCard
        title="Python for Data Analysis Instructor"
        subTitle="Gomindz (2022 - 2024)"
        result="Gambia"
        des="Delivered hands-on training in Python for data analysis, covering libraries such as Pandas and NumPy. Helped students understand data manipulation techniques and build data-driven solutions for real-world problems."
      />
      <ResumeCard
        title="Freelance Developer"
        subTitle="Personal Project (2024)"
        result="Gambia"
        des="Worked independently on various freelance projects, providing custom software solutions for clients across different industries. Focused on delivering high-quality, scalable, and secure applications."
      />
    </div>
  </div>
</motion.div>

  );
};

export default Experience;
