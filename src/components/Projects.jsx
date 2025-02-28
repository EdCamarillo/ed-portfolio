const projects = [
  {
    title: "Task Tracker App",
    description: "Django Framework",
    thumbnail: "/thumbnails/tasktracking_thumbnail.jpg",
    preview: "/previews/tasktracking_preview.mp4",
  },
  {
    title: "LessonLab",
    description: "OpenAI, Flutter, Rust",
    thumbnail: "/thumbnails/lessonlab_thumbnail.jpg",
    preview: "/previews/lessonlab_preview.mp4",
  },
  {
    title: "Vstore",
    description: "Android Studio, Firebase",
    thumbnail: "/thumbnails/vstore_thumbnail.jpg",
    preview: "/previews/vstore_preview.mp4",
  },
  {
    title: "Mathic-matic",
    description: "React, Spring Boot, WebSocket",
    thumbnail: "/thumbnails/mathicmatic_thumbnail.jpg",
    preview: "/previews/mathicmatic_preview.mp4",
  },
  {
    title: "Hypertext",
    description: "React, Tailwind CSS, OpenAI",
    thumbnail: "/thumbnails/hypertext_thumbnail.jpg",
    preview: "/previews/hypertext_preview.mp4",
  },
];

const Projects = () => {
  return (
    <section className="flex flex-col md:flex-row p-8 h-full items-center justify-center min-h-screen animate-slideUp max-w-7xl mx-auto will-change-transform">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4"
          >
            {/* Thumbnail */}
            <div className="relative w-full md:w-64 aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg group">
              {/* Video for preview */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src={project.preview}
                muted
                loop
                autoPlay
              ></video>
              {/* Static thumbnail image */}
              <img
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                src={project.thumbnail}
                alt={project.title}
              />
            </div>

            {/* Title and Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
