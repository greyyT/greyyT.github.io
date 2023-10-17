import { github, live } from '@/assets';
import { projects } from '@/constants';
import { SectionWrapper } from '@/hoc';
import { styles } from '@/styles';
import { fadeIn, textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import ReactParallaxTilt from 'react-parallax-tilt';

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  github_repo: boolean;
  source_code_link: string;
  live_demo: boolean;
  live_demo_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  github_repo,
  source_code_link,
  live_demo,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <ReactParallaxTilt
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt="name" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {github_repo && (
              <div
                className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => window.open(source_code_link, '_blank')}
              >
                <img src={github} alt="github" className="w-3/4 h-3/4 object-contain" />
              </div>
            )}
            {live_demo && (
              <div
                className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ml-3"
                onClick={() => window.open(live_demo_link, '_blank')}
              >
                <img src={live} alt="live" className="w-3/5 h-3/5 object-contain" />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-sm">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, idx: number) => (
              <div className="rounded-md" style={{ background: 'rgba(0, 0, 0, 0.4)' }} key={idx}>
                <p className={`text-sm ${tag.color} px-2 py-1`}>#{tag.name}</p>
              </div>
            ))}
          </div>
        </div>
      </ReactParallaxTilt>
    </motion.div>
  );
};

const WorksPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects serve as real-world demonstrations of my skills and expertise, offering clear examples of my
          work. Each project is accompanied by concise descriptions and links to their respective code repositories or
          live deployments. They illustrate my proficiency in tackling complex challenges, my adaptability with various
          technologies and my project management skill.
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] flex gap-8"
      >
        <div className="flex gap-2 items-center">
          <img src={github} alt="" className="w-8 h-8" />
          <p className="text-white">Github Repository</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={live} alt="" className="w-8 h-8" />
          <p className="text-white">Live demo or deployment</p>
        </div>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, idx: number) => (
          <ProjectCard key={idx} index={idx} {...project} />
        ))}
      </div>
    </>
  );
};

const Works = SectionWrapper(WorksPage, 'work');

export default Works;
