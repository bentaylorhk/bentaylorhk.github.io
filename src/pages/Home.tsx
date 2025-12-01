import ThreeScene from '../components/ThreeScene';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center min-h-screen">
          <div className="md:w-1/2 py-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Hi, I'm a developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="space-x-4">
              <a
                href="/about"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Learn More
              </a>
              <a
                href="/projects"
                className="inline-block bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 h-96 md:h-screen">
            <ThreeScene />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
