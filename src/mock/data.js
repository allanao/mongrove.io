import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mongrove', // e.g: 'Name | Developer'
  lang: 'EN', // e.g: en, es, fr, jp
  description: 'Welcome to Mongrove!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'This is',
  name: 'Mongrove',
  subtitle: 'A NoSQL Analytics Tool for MongoDB',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Mongrove1.png',
  paragraphOne: 'Mongrove is a metrics tool that helps developers design and optimize different schema and queries configurations for time-optimized interaction with NoSQL MongoDB databases.',
  paragraphTwo: 'Developers can quickly generate mock databases tailored to their specifications.',
  paragraphThree: 'Query response times and query throughput results are displayed numerically and with graphical visualizations, allowing developers to compare and analzye their data.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Results.jpg',
    title: 'Compare Multiple Schemas & Queries Simultaneously',
    info: 'Generate multiple different schemas, test databases, and queries all in one go. Toggle results on or off to view one at a time or see all your options compared at a glance.',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'DataVisualization3.jpg',
    title: 'Interactive Data Visualization',
    info: 'View results as raw data, or use the built-in graphic display to clearly visualize top contenders.',
    info2: '',
    // url: '',
  },
  {
    id: nanoid(),
    img: 'SaveDatabase2.jpg',
    title: 'Containerized MongoDB Instance Included',
    info: 'Use the built-in containerized MongoDB instance to generate test databases and run test queries without involving, or in any way impacting, your existing Mongo set up on your machine.',
    info2: '',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Check Us Out On Medium',
  email: 'https://ayaordonez.medium.com/introducing-mongrove-an-exciting-nosql-database-optimization-tool-3b68c3fdb299',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  // isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
