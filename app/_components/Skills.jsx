import {
  SiAmazonaws,
  SiAngular,
  SiAntdesign,
  SiBootstrap,
  SiCss3,
  SiD3Dotjs,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMobx,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPusher,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiShopify,
  SiSwr,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiVuedotjs,
} from "react-icons/si";

const skillsObj = [
  {
    category: "Languages",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    category: "Frameworks and Libraries",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "MobX", icon: SiMobx },
      { name: "Zustand", label: "Zu" },
      { name: "Angular", icon: SiAngular },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Jest", icon: SiJest },
      { name: "jQuery", icon: SiJquery },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "D3.js", icon: SiD3Dotjs },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Developer Tools and Platforms",
    items: [
      { name: "SWR", icon: SiSwr },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "AWS", icon: SiAmazonaws },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "Pub/Sub (Pusher)", icon: SiPusher },
      { name: "Shopify", icon: SiShopify },
    ],
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col space-y-8 mb-20" id="skills">
      <div className="text-center flex flex-col space-y-2 justify-center items-center">
        <h1 className="text-4xl font-bold">
          Skills<span className="text-primary">.</span>
        </h1>
        <p className="text-basic text-center w-[80%]">
          This section provides an overview of my technical and soft skills. I am proficient in a wide range of programming languages, frameworks, and tools essential for modern development. Alongside my technical abilities, I possess strong problem-solving, communication, and collaboration skills that enable me to thrive in team-based environments.<span className="text-primary">.</span>
        </p>
      </div>
      <div className="flex flex-col space-y-8 max-w-3xl mx-auto px-5">
        {skillsObj.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-col space-y-4">
            <p className="text-sm text-center text-muted-foreground">
              {group.category}
              <span className="text-primary">.</span>
            </p>
            <div className="flex gap-3 flex-wrap items-center justify-center rounded-md">
              {group.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <div
                    key={itemIndex}
                    title={item.name}
                    className="h-24 w-24 grid place-items-center content-center gap-2 rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
                  >
                    {Icon ? (
                      <Icon className="h-8 w-8" />
                    ) : (
                      <span className="h-8 w-8 grid place-items-center text-xl font-bold">
                        {item.label}
                      </span>
                    )}
                    <p className="text-[0.65rem] text-center px-1 leading-tight">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
