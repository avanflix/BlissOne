import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects({
  openPopup,
}: {
  openPopup: () => void;
}) {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-width">
        <SectionTitle
          title="Featured Projects"
          subtitle="Our Developments"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openPopup={openPopup}
            />
          ))}
        </div>
      </div>
    </section>
  );
}