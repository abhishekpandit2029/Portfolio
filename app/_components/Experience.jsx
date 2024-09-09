import ExperienceImg from "../../public/EXP.svg";
import Image from "next/image";

export default function Experience() {
  return (
    <div id="experience">
      <div className="text-center flex flex-col space-y-2 justify-center items-center">
        <h1 className="text-4xl font-bold">
          Experience<span className="text-primary">.</span>
        </h1>
        <p className="text-basic text-center w-[80%]">
          In this section, I highlight my professional background and work experience. It showcases the roles I have undertaken, the responsibilities I managed, and the impact I have made in various projects. From internships to full-time positions, this section reflects my growth in the field and the skills I have acquired throughout my career journey.<span className="text-primary">.</span>
        </p>
      </div>
      <div className="flex tab:px-8 tab:pb-4 lap:px-16 lap:pb-8 items-center justify-center">
        <div className="float-left hidden lg:flex">
          <Image src={ExperienceImg} className="w-100%" alt="Logo" />
        </div>
        <div className="flex flex-col space-y-4 px-6 tab:p-0 w-[50%]">
          <div className="bg-white rounded-lg text-black p-4 space-y-2 w-[80%] self-end">
            <div className="flex justify-between">
              <p className="font-bold text-xl">Ethan-ai Banglore</p>
              <p>July 2023 - Present</p>
            </div>
            <p>software developer</p>
          </div>
          <div className="bg-white rounded-lg text-black p-4 space-y-2 w-[80%]">
            <div className="flex justify-between">
              <p className="font-bold text-xl">Oasis Infobyte</p>
              <p>May 2023 - June 2023</p>
            </div>
            <p>frontend developer Intern</p>
          </div>
        </div>
      </div>
    </div>
  );
}
