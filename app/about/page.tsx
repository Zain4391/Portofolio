import Info from "../../components/Info";
import Story from "../../components/Story";

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Info />
            <Story />
          </div>
        </div>
      </div>
    </div>
  );
}
