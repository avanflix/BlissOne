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
          title=" Project"
          subtitle="Our Developments"
        />

        <div className="grid lg:grid-cols-1 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="max-w-4xl mx-auto w-full"
            >
              <ProjectCard
                project={project}
                openPopup={openPopup}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}