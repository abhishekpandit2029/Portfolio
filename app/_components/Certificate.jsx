import ExperienceImg from "../../public/Experience.svg";
import Image from "next/image";
import Javascript from "../../public/javascript.png"
import CSS from "../../public/css.png"
import React from "../../public/react.png"

const certificateObj = [
  {
    name: "CSS",
    image: CSS,
    issuedBy: "HackerRank",
  },
  {
    name: "Javascript",
    image: Javascript,
    issuedBy: "HackerRank",
  },
  {
    name: "React.js",
    image: React,
    issuedBy: "HackerRank",
  },
];

export default function Certificate() {
  return (
    <div className="mt-20" id="certificate">
      <div className="text-center flex flex-col space-y-2 mb-10">
        <h1 className="text-4xl font-bold">
          Certificate<span className="text-primary">.</span>
        </h1>
        <p className="text-basic">
          Some of my skills, I learnt in my journey of <br /> self-taught coding
          <span className="text-primary">.</span>
        </p>
      </div>
      <div className="flex space-x-6 justify-center">
        {certificateObj.map((item, index) => (
          <div
            key={index}
            className="relative border bg-background dark:bg-secondary max-w-fit rounded-md flex flex-col space-y-4 p-2"
          >
            <div>
              <Image
                className="w-[20rem] h-full rounded-md aspect-video"
                src={item.image}
                alt="certificate"
              />
            </div>
            <div className="flex justify-between p-2">
              <p>{item.name}</p>
              <p>{item.issuedBy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
