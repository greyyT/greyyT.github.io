import { technologies } from '@/constants';
import { SectionWrapper } from '@/hoc';
import { BallCanvas } from '.';

const TechPage = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology, idx: number) => (
        <div className="w-28 h-28" key={idx}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const Tech = SectionWrapper(TechPage, '');

export default Tech;
