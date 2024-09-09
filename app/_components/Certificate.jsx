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
      <div className="text-center flex flex-col space-y-2 justify-center items-center mb-10">
        <h1 className="text-4xl font-bold">
          Certificate<span className="text-primary">.</span>
        </h1>
        <p className="text-basic text-center w-[80%]">
          This section showcases the certifications and training I have completed to further my knowledge and professional development. From technical courses to industry-recognized certifications, these credentials illustrate my commitment to continuous learning and staying updated with the latest industry trends.
          <span className="text-primary">.</span>
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4">
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
