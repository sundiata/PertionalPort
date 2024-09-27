import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
  >
    <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
        <h2 className="text-3xl md:text-4xl font-bold">Awards</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Minister of Education and Research ICT"
          subTitle="Gambia - (2007 - 2010)"
          result="Success"
          des="Oversaw the development and implementation of educational policies related to ICT. Led initiatives to integrate technology into the curriculum, enhancing learning outcomes and promoting digital literacy across the educational sector."
        />
        <ResumeCard
          title="Certificate of Honor in Mobile App Development"
          subTitle="ITAG - (2021)"
          result="Success"
          des="Awarded for exceptional performance in mobile app development training. Demonstrated advanced skills in designing and developing mobile applications, with a focus on user experience and innovative solutions."
        />
        <ResumeCard
          title="University of The Gambia Degree Certificate"
          subTitle="Gambia - (2023)"
          result="Success"
          des="Received a degree in Information Systems from the University of The Gambia, with a strong focus on IT and computing principles. Achieved a comprehensive understanding of system analysis, design, and development."
        />
      </div>
    </div>
    <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
        <h2 className="text-3xl md:text-4xl font-bold">Awards</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Indian Institution Merit Award for Web Development"
          subTitle="Gambia - (2020)"
          result="Success"
          des="Recognized for outstanding achievement in web development. Demonstrated expertise in building responsive and dynamic websites, and received accolades for contributions to innovative web solutions."
        />
        <ResumeCard
          title="Community Appreciation Award Kanifing"
          subTitle="Gambia - (2008)"
          result="Success"
          des="Awarded for significant contributions to the local community through technology. Recognized for efforts in promoting digital literacy and providing tech support to local organizations and individuals."
        />
        <ResumeCard
          title="Google Analytics Certificate"
          subTitle="Online - (2020)"
          result="Success"
          des="Earned certification in Google Analytics, showcasing proficiency in data analysis and digital marketing. Gained skills in tracking and interpreting web traffic, optimizing online performance, and making data-driven decisions."
        />
      </div>
    </div>
  </motion.div>
  
  );
};

export default Achievement;
