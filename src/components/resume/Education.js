import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
  >
    {/* part one */}
    <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="BSc in Information System"
          subTitle="University Of The Gambia (2019 - 2023)"
          des="A comprehensive program that combines theoretical knowledge with practical skills in information systems. Focus areas include system design, data management, and IT project management, preparing students for various roles in the tech industry."
        />
        <ResumeCard
          title="Diploma Course"
          subTitle="Indian Institute of Hardware and Technology (2019)"
          des="A specialized diploma that covers web development, providing hands-on experience in troubleshooting, system maintenance, and basic networking. This course is designed to build a strong foundation in IT hardware."
        />
        <ResumeCard
          title="High School Education"
          subTitle="Gambia Senior Secondary School (2016 - 2019)"
          des="A well-rounded secondary education that provided a strong foundation in science, mathematics, and humanities. The curriculum emphasized critical thinking, problem-solving, and communication skills."
        />
      </div>
    </div>
    {/* part two */}
    <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
        <h2 className="text-3xl md:text-4xl font-bold">Professional Certifications</h2>
      </div>
      <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Google Analytics Certificate"
          subTitle="Coursera Online (2020 - 2021)"
          des="A certification program that covers the fundamentals of Google Analytics, including data collection, reporting, and analysis. This course helps professionals to measure website performance and make data-driven decisions."
        />
        <ResumeCard
          title="Mobile App Developer Certificate"
          subTitle="ITAG The Gambia (2021 - 2022)"
          des="An intensive certification focused on mobile app development, covering both iOS and Android platforms. The course teaches programming, user interface design, and app deployment, equipping graduates with the skills to create functional and user-friendly apps."
        />
        <ResumeCard
          title="Entrepreneurship Certificate"
          subTitle="The Gambia Investment & Export Promotion Agency (2019)"
          des="A certification designed to provide aspiring entrepreneurs with the knowledge and tools to start and grow their businesses. The program covers business planning, market research, and financial management, with a focus on innovation and sustainable growth."
        />
      </div>
    </div>
  </motion.div>
  
  );
};

export default Education;
