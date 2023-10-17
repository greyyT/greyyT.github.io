import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  hcmus,
  aisia,
  postgre,
  django,
  express,
  linux,
  python,
  luna,
  aisiaWeb,
  ubunchuu,
} from '@/assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Responsive Design',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Version Control',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'PostgreSQL',
    icon: postgre,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'django',
    icon: django,
  },
  {
    name: 'express',
    icon: express,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'linux',
    icon: linux,
  },
  {
    name: 'python',
    icon: python,
  },
];

const experiences = [
  {
    title: 'Bachelor Degree in Data Science',
    company_name: 'University of Science - VNUHCM',
    icon: hcmus,
    iconBg: '#E6DEDD',
    date: 'Oct 2021 - Present',
    points: [
      {
        content: 'Current GPA: 3.26/4.0',
        subContent: null,
      },
      {
        content: 'Revelant Coursework:',
        subContent: [
          'Databases',
          'Database Management Systems',
          'Computer Network',
          'Data Structures and Algorithms',
          'Probability and Statistics',
          'Discrete Math',
          'Object Oriented Programming',
        ],
      },
      {
        content: 'Activities:',
        subContent: ['Former member of the VNU HCMUS Math and Computer Science Academic Club (2021 - 2022).'],
      },
    ],
  },
  {
    title: 'Frontend Developer Freelancer',
    company_name: 'AISIA Research Lab',
    icon: aisia,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - March 2023',
    points: [
      {
        content:
          'Reimplementing the old website written in Wordpress to a new, clean, maintainable website supported by Ruby on Rails template engine and other technologies.',
        subContent: null,
      },
      {
        content:
          'Collaborating with cross-functional teams including designers and other developers to create high-quality products.',
        subContent: null,
      },
      {
        content: 'Implementing responsive design and ensuring cross-browser compatibility.',
        subContent: null,
      },
      {
        content: 'Participating in code reviews and providing constructive feedback to other developers.',
        subContent: null,
      },
    ],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Luna eProcurement',
    description:
      'Web-based platform for project and member management, providing control over project outcomes and effective product and vendor management.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'django',
        color: 'pink-text-gradient',
      },
    ],
    image: luna,
    source_code_link: 'https://github.com/greyyT/luna-eprocurement-system',
  },
  {
    name: 'Aisia Research Lab',
    description:
      'A web application designed for the Aisia Research Lab to showcase their research projects, team members, courses, services and publications.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: aisiaWeb,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Ubunchuu Truong US',
    description:
      'A university community project dedicated to assisting students in learning, installing, and exchanging knowledge about Linux and its various distributions.',
    tags: [
      {
        name: 'hugo',
        color: 'blue-text-gradient',
      },
    ],
    image: ubunchuu,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
