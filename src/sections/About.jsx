import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
   const[hasCopied, setHasCopied]= useState(false)

   const handleCopy = () =>{
        navigator.clipboard.writeText('khomkhadka67@gmail.com');
        setHasCopied(true)
   }

   setTimeout(()=>{
    setHasCopied(false)
   },[2000])

  return (
    <section className="c-space my-20" id="about">
      <div
        className="grid xl:grid-cols-3 xl:grid-rows-6
        md:grid-cols-2 grid-cols-1 gap-5 h-full"
      >
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/profile.png"
              alt="profile"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext ">Hi,I'm Khom Khadka</p>
              <p className="grid-subtext">
                MERN Stack Developer from Nepal. I love creating clean,
                responsive, and interactive web applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/skill.png"
              alt="skill"
              className="w-full sm:w-[276] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize javaScript with a focus on React.js Eco-system
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={400}
                width={400}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I am based in Nepal, with remote work available
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied?"assets/tick.svg": "assets/copy.svg"} alt="copy" />
                            <p className="lg:text2xl md:text-xl font-medium text-gray_gradient text-white">khomkhadka67@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default About;
