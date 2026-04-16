// Assuming you have imported motion from 'framer-motion' or similar library
import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Skills = () => {
    const location = useLocation();
    const disableAnimations = location.pathname.includes('/projects');

    return (
        <div>
            {disableAnimations ? (
                <div>Your Skills content without animations</div>
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h2>Your Skills</h2>
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>Animated Span</motion.span>
                </motion.div>
            )}
        </div>
    );
};

export default Skills;