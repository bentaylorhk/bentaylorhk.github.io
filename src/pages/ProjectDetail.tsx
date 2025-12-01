import { useParams, Link } from 'react-router-dom';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
}

const projectsData: Record<string, ProjectData> = {
  '1': {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and TypeScript',
    longDescription: 'This is a full-featured e-commerce platform that allows users to browse products, add items to cart, and complete purchases. The platform includes a responsive design that works seamlessly across all devices.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    features: [
      'Product catalog with search and filtering',
      'Shopping cart functionality',
      'User authentication',
      'Responsive design',
    ],
  },
  '2': {
    id: '2',
    title: 'Portfolio Website',
    description: 'A creative portfolio website with Three.js animations',
    longDescription: 'An interactive portfolio website showcasing creative work with stunning 3D animations powered by Three.js. The site features smooth transitions and an intuitive user interface.',
    technologies: ['React', 'Three.js', 'Vite', 'Tailwind CSS'],
    features: [
      'Interactive 3D animations',
      'Smooth page transitions',
      'Responsive layout',
      'Optimized performance',
    ],
  },
  '3': {
    id: '3',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects',
    longDescription: 'A comprehensive task management application that helps teams collaborate and stay organized. Features include task assignment, deadlines, priority levels, and progress tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: [
      'Task creation and assignment',
      'Project organization',
      'Deadline tracking',
      'Team collaboration',
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-500 hover:text-blue-600">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <Link
          to="/projects"
          className="text-blue-500 hover:text-blue-600 mb-8 inline-block"
        >
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <p className="text-xl text-gray-700 mb-8">{project.description}</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">{project.longDescription}</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
