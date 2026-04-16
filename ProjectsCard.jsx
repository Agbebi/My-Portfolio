import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectsCard = () => {
  const location = useLocation();
  const isProjectsSection = location.pathname.includes('projects');

  return (
    <div>
      {isProjectsSection ? (
        <Skills />  // Render without animation
      ) : (
        <motion.div variants={FadeUp} initial="initial" animate="animate">
          <Skills />  // Render with animation
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsCard;