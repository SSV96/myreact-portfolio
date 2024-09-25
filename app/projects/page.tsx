interface Project {
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "Description of project one.",
    url: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    url: "https://github.com/yourusername/project-two",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        My Projects
      </h1>
      <div className="mt-8 space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
