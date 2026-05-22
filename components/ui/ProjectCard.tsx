import Image from "next/image";
import { MapPin } from "lucide-react";
import { Project } from "@/types/project";
import Button from "./Button";

interface ProjectCardProps {
  project: Project;
  openPopup: () => void;
}

export default function ProjectCard({ project, openPopup }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden card-shadow group">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold">{project.title}</h3>

          <span className="px-4 py-1 bg-gray-100 rounded-full text-sm">
            {project.status}
          </span>
        </div>

        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          {project.location}
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          {project.description}
        </p>

        <Button variant="red" onClick={openPopup}>
          View Project
        </Button>
      </div>
    </div>
  );
}