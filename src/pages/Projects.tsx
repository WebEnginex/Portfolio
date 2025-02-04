import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projects } from '@/components/Portfolio';
import ImageViewer from '@/components/ImageViewer';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-black">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Nos <span className="text-gradient">Projets</span>
          </h1>
          
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Découvrez l'ensemble de nos réalisations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass rounded-lg overflow-hidden flex flex-col justify-between min-h-[500px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Image Section */}
                <div
                  className="relative h-64 cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  {/* Truncate the description to a maximum of 150 characters */}
                  <p className="text-gray-400 mb-4">
                    {project.fullDescription.length > 150
                      ? `${project.fullDescription}`
                      : project.fullDescription}
                  </p>

                  {/* Tags Section */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm glass"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Image Viewer for selected project */}
      {selectedProject !== null && (
        <ImageViewer
          images={projects.find((p) => p.id === selectedProject)?.images || []}
          onClose={() => setSelectedProject(null)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Projects;
