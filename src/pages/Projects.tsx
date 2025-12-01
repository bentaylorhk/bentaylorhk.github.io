import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and TypeScript',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A creative portfolio website with Three.js animations',
    technologies: ['React', 'Three.js', 'Vite'],
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
