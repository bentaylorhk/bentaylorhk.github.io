const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="max-w-3xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Background</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm a passionate developer with experience in modern web technologies.
              I love building interactive and responsive applications that provide
              great user experiences.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Three.js', 'Node.js'].map((skill) => (
                <div
                  key={skill}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-center font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Feel free to reach out if you'd like to connect or collaborate on a project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
