import Image from "next/image";
import { Award, BadgeCheck } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
import { certificates } from "../../lib/certificates";

export default function Certificate() {
  return (
    <section id="certificate" className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Credentials"
          icon={Award}
          title="Certificates"
          subtitle="Certifications I have earned while sharpening my fundamentals and keeping up with the ecosystem."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((item) => (
            <figure
              key={item.name}
              className="group surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <Image
                  className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={`${item.name} certificate issued by ${item.issuedBy}`}
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 p-4">
                <p className="font-medium">{item.name}</p>
                <span className="chip">
                  <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                  {item.issuedBy}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
