import ExperienceImg from "../../public/EXP.svg";
import Image from "next/image";

const experienceObj = [
  {
    role: "Software Development Engineer 1",
    company: "VIXII",
    location: "United Kingdom",
    mode: "Remote",
    duration: "August 2025 - Present",
    points: [
      "Spearheaded the development of a Headless Shopify platform using Next.js, leveraging Shopify Storefront and Admin APIs to deliver a scalable, high-performance experience.",
      "Designed and developed reusable, API-driven frontend architecture for product discovery, collections, product detail pages, cart, customer authentication, and checkout, improving maintainability and application performance.",
      "Built a centralized Admin Dashboard to streamline product, inventory, customer, event, marketing, and order management while integrating digital analytics and marketing platforms to enable customer insights, campaign optimization, and data-driven decision-making.",
      "Optimized platform performance and search visibility by implementing server-side rendering (SSR), dynamic metadata, structured data, image optimization, and modern SEO best practices, enhancing Core Web Vitals and organic discoverability.",
      "Collaborated with designers, product managers, and marketing teams to deliver scalable features, optimize user journeys, and enhance customer experience.",
    ],
  },
  {
    role: "Software Developer",
    company: "Ethan.ai",
    location: "Bengaluru, Karnataka, India",
    mode: "On-site",
    duration: "June 2023 - July 2025",
    points: [
      "Worked on a fintech product as part of the frontend team, contributing to frontend architecture, key feature development, and a seamless, high-performance user experience.",
      "Played a key role in developing the Wealth Management Dashboard, crafting an intuitive and responsive UI for wealth managers, banks, and high net worth individuals (HNIs) to efficiently track and manage over $100M in assets under platform (AUP).",
      "Built interactive platforms with rich data visualizations for ICICI, CSBL, and Axis Bank, enhancing user experience and enabling impactful financial decision-making.",
      "Integrated a Pub/Sub architecture to minimize redundant API calls and enable efficient real-time data updates, improving system performance and scalability.",
      "Integrated an automated data-cleaning service into the frontend, ensuring real-time data accuracy and consistency across the platform.",
      "Implemented a robust payment UI and integrated Razorpay's payment gateway, managing database interactions and webhook-driven updates for a seamless transaction experience.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Oasis Infobyte",
    location: "New Delhi, India",
    mode: "Remote",
    duration: "May 2023 - June 2023",
    points: [
      "Developed and optimized reusable UI components using React.js and Tailwind CSS, significantly improving performance, maintainability, and design consistency across the platform.",
      "Integrated REST APIs for dynamic data rendering and ensured smooth, responsive user interactions by resolving UI/UX issues and enhancing accessibility.",
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="mb-20">
      <div className="text-center flex flex-col space-y-2 justify-center items-center mb-10">
        <h1 className="text-4xl font-bold">
          Experience<span className="text-primary">.</span>
        </h1>
        <p className="text-basic text-center w-[80%]">
          In this section, I highlight my professional background and work experience. It showcases the roles I have undertaken, the responsibilities I managed, and the impact I have made in various projects. From internships to full-time positions, this section reflects my growth in the field and the skills I have acquired throughout my career journey.<span className="text-primary">.</span>
        </p>
      </div>
      <div className="flex items-start justify-center gap-6 md:px-8 lg:px-16">
        <div className="hidden lg:flex lg:w-[40%] lg:sticky lg:top-24">
          <Image src={ExperienceImg} className="w-full h-auto" alt="Experience" />
        </div>
        <div className="flex flex-col space-y-4 px-5 lg:px-0 w-full lg:w-[60%]">
          {experienceObj.map((item, index) => (
            <div
              key={index}
              className="relative border bg-background dark:bg-secondary rounded-md p-4 space-y-3"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-4">
                <div className="space-y-1">
                  <p className="font-bold text-xl">{item.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.company} &middot; {item.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <p className="text-sm text-muted-foreground">
                    {item.duration}
                  </p>
                  <span className="text-xs border rounded-full px-2 py-0.5">
                    {item.mode}
                  </span>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm marker:text-primary">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
