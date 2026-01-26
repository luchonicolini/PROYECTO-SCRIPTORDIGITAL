import React from 'react';
import { motion } from 'framer-motion';
import MainBlock from '../components/Blocks/MainBlock';
import VerticalBlock from '../components/Blocks/VerticalBlock';
import GlobeBlock from '../components/Blocks/GlobeBlock';
import SocialBlock from '../components/Blocks/SocialBlock';
import StoryBlock from '../components/Blocks/StoryBlock';
import GithubBlock from '../components/Blocks/GithubBlock';
import ArticlesBlock from '../components/Blocks/ArticlesBlock';
import ProjectsBlock from '../components/Blocks/ProjectsBlock';
import ContactBlock from '../components/Blocks/ContactBlock';
import ThemeBlock from '../components/Blocks/ThemeBlock';
import TiltWrapper from '../components/TiltWrapper';

const Home = ({ theme, toggleTheme }) => {
    return (
        <motion.main
            className="grid-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
        >
            {/* Row 1 */}
            <TiltWrapper className="span-2">
                <MainBlock />
            </TiltWrapper>

            <TiltWrapper className="row-span-2">
                <VerticalBlock />
            </TiltWrapper>

            {/* Row 2 */}
            <TiltWrapper>
                <GlobeBlock theme={theme} />
            </TiltWrapper>

            <TiltWrapper>
                <GithubBlock />
            </TiltWrapper>

            {/* Row 3 */}
            <TiltWrapper>
                <ThemeBlock theme={theme} toggleTheme={toggleTheme} />
            </TiltWrapper>

            <TiltWrapper>
                <SocialBlock />
            </TiltWrapper>

            <TiltWrapper>
                <StoryBlock />
            </TiltWrapper>

            {/* Row 4 */}
            <TiltWrapper className="span-3">
                <ArticlesBlock />
            </TiltWrapper>

            {/* Row 5 */}
            <TiltWrapper className="span-3">
                <ProjectsBlock />
            </TiltWrapper>

            {/* Row 6 */}
            <TiltWrapper className="span-3">
                <ContactBlock />
            </TiltWrapper>
        </motion.main>
    );
};

export default Home;
