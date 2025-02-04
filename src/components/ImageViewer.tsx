import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageViewerProps {
  images: string[];
  onClose: () => void;
}

const ImageViewer = ({ images, onClose }: ImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X size={24} />
        </button>
        
        <button
          onClick={handlePrevious}
          className="absolute left-4 text-white hover:text-gray-300"
        >
          <ChevronLeft size={24} />
        </button>
        
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        
        <button
          onClick={handleNext}
          className="absolute right-4 text-white hover:text-gray-300"
        >
          <ChevronRight size={24} />
        </button>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageViewer;