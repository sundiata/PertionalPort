import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (

    <section
  id="features"
  className="w-full py-20 border-b-[1px] border-b-black"
>
  <Title title="Features" des="What I Do" />
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
    <Card
      title="Web Development"
      des="Building responsive and engaging websites with a focus on user experience and performance. From custom design to full-stack development, I ensure your site is optimized and functional."
      icon={<AiFillAppstore />}
    />
    <Card
      title="Mobile Development"
      des="Creating intuitive mobile applications for both iOS and Android platforms. I specialize in developing apps that provide seamless experiences across various devices."
      icon={<FaMobile />}
    />
    <Card
      title="Data Analysis"
      des="Transforming raw data into actionable insights with advanced analytical techniques. I help you make informed decisions by analyzing trends and patterns in your data."
      icon={<SiProgress />}
    />
    <Card
      title="Online Class"
      des="Offering engaging and interactive online classes tailored to your needs. Whether for professional development or personal growth, I provide high-quality educational content."
      icon={<FaMobile />}
    />
    <Card
      title="Graphic Design"
      des="Designing visually appealing graphics for various mediums including web, print, and social media. My designs aim to enhance brand identity and communicate effectively."
      icon={<SiAntdesign />}
    />
    <Card
      title="Hosting Websites"
      des="Providing reliable and secure web hosting services to ensure your website is always accessible. I offer scalable solutions to meet the needs of any business or personal site."
      icon={<FaGlobe />}
    />
  </div>
</section>


  );
}

export default Features