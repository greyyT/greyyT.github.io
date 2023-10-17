import { SectionWrapper } from '@/hoc';
import { styles } from '@/styles';
import { textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

interface ExperienceCardProps {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: (
    | {
        content: string;
        subContent: null;
      }
    | {
        content: string;
        subContent: string[];
      }
  )[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company_name, icon, iconBg, date, points }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img src={icon} alt={company_name} className="w-[80%] h-[80%] object-contain" />
        </div>
      }
    >
      <div className="">
        <h3 className="text-whtie text-[24px] font-bold">{title}</h3>
        <p className="text-secondary text-base font-semibold" style={{ margin: 0 }}>
          {company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, idx: number) => (
          <li key={idx} className="text-white-100 text-sm pl-1 tracking-wider">
            {point.content}
            {point.subContent && (
              <ul className="list-disc ml-5 mt-3 space-y-2">
                {point.subContent.map((subPoint, idx: number) => (
                  <li key={idx} className="text-secondary text-sm pl-1 tracking-wider">
                    {subPoint}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperiencePage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, idx: number) => (
            <ExperienceCard key={idx} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const Experience = SectionWrapper(ExperiencePage, 'experience');

export default Experience;
