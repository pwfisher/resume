import { Resume } from '../types'

export const resume: Resume = {
  jobs: [
    {
      body: {
        paragraphs: [
          {
            id: 0,
            text: 'Designed and analyzed sewer, water and storm drain systems for new and existing developments. Created graphic model of Santa Clarita Valley sewer mains, synthesizing multiple data sets and visualizing results with GIS software. Created master sewerage plan for Agua Dulce. Obtained EIT certification.'
          }
        ]
      },
      company: 'Dexter Wilson Engineering, Inc.',
      dateEnd: '2004',
      dateStart: '2003',
      duration: '1 yr',
      id: 0,
      location: 'Carlsbad, CA',
      title: 'Assistant Engineer'
    },
    {
      body: {
        paragraphs: [
          {
            id: 0,
            text: 'Project Manager and Technical Lead for company-wide Document Imaging project. Part of an excellent team which succeeded, where previous efforts had failed, to replace paper-based claims processing at a claims processing company.'
          },
          {
            id: 1,
            text: 'Documented existing processes with simple diagrams and detailed back-up information to aid communication and understanding. Drafted RFP with technical and business requirements. Calculated project ROI. Worked with subject matter experts to design new system and procedures.'
          },
          {
            id: 2,
            text: 'Managed highly successful implementation of $300,000 system to support 100 concurrent users, input 10,000+ pages daily, scan 4 million pages of existing files and securely store up to 10 million pages.'
          }
        ]
      },
      company: 'VPA, Inc.',
      dateEnd: '2005',
      dateStart: '2004',
      duration: '1 yr',
      id: 1,
      location: 'Calabasas, CA',
      title: 'Systems Analyst'
    },
    {
      body: {
        paragraphs: [
          {
            id: 0,
            text: 'Full stack LAMP web developer. Lead systems architect. Designed and implemented site features. Specified hardware, configured servers and installed applications. Managed databases. Provided tech support.'
          }
        ]
      },
      company: 'All Access Music Group, Inc.',
      dateEnd: 'Apr 2011',
      dateStart: 'Nov 2007',
      duration: '3 yrs 6 mos',
      id: 2,
      location: 'Malibu, CA',
      title: 'Web Developer',
      tools: []
    },
    {
      body: {
        paragraphs: [
          {
            id: 0,
            text: 'As an engineer for Yahoo Global Media Foundation, I worked on teams building components shared by hundreds of Yahoo media properties, including News, Sports, and Finance.'
          },
          {
            id: 1,
            text: 'I was the primary author of the list and carousel modules which became ubiquitous on Yahoo Global Media sites in 2012. My carousel batching logic implements an async request queue which is lazy until interaction, then prefetches and intelligently handles rapid-fire requests in LIFO order.'
          },
          {
            id: 2,
            text: 'Tech stack: AJAX, Apache, Bash, HTML, Hudson, JavaScript, JSON, Linux, NoSQL, PHP, PHPUnit, REST, Scrum, svn, XML, YUI.'
          },
          {
            id: 3,
            text: 'Our team of 8 engineers led the development of a new version of all media sites using PJAX and ESI to improve client- and server-side performance, respectively. This new version of the Yahoo Publishing Platform was designed from the ground up to support multiple client device types including full capability desktop systems, touch screen tablets and smartphones.'
          },
          {
            id: 4,
            text: 'I independently conceived and implemented the method by which the entire page is scrollable but each column of content moves independently. I contributed a synthetic scrollbar module which was adopted as a company standard. I enhanced an open source SVG compression utility to achieve a 50-80% reduction in our icon file sizes. github.com/pwfisher/scour.py'
          },
          {
            id: 5,
            text: 'Same tech stack as above, plus: Android browser, ESI, Kanban, Mobile Safari, Mustache, PJAX, Sass.'
          },
          {
            id: 6,
            text: 'Our team built and launched a completely new version of screen.yahoo.com on a NodeJS stack in 6 weeks.'
          },
          {
            id: 7,
            text: 'I led the effort to create a mobile version of the site, contributed the social media sharing module, and led the sitemap implementation. I advocated for the enhancement of sitemaps with rich metadata using the Schema.org and Yahoo Media RSS taxonomies and initiated discussions between Yahoo, Google, and Microsoft on this industry standard.'
          },
          {
            id: 8,
            text: 'Tech stack: Express, Git, Github, Mustache, NodeJS, PJAX, Sass, YUI.'
          }
        ]
      },
      company: 'Yahoo',
      dateEnd: 'Nov 2013',
      dateStart: 'Apr 2011',
      duration: '2 yrs 8 mos',
      id: 3,
      location: 'Santa Monica, CA',
      title: 'Frontend Engineer'
    },
    {
      body: {
        paragraphs: [
          {
            id: 0,
            text: 'Ember. Docker. Angular legacy.'
          }
        ]
      },
      company: 'Dollar Shave Club',
      dateEnd: 'Apr 2018',
      dateStart: 'Dec 2013',
      duration: '4 yrs 5 mos',
      id: 4,
      location: 'Venice, CA',
      title: 'Principal Engineer, Front End'
    },
    {
      body: {
        paragraphs: [
          {
            id: 0,
            text: 'Created modular content system for home page and all editorial pages. Built accessible site navigation bar and menus. Owned features end-to-end: creating Typescript React modules, unit tests, sample data, interactive Storybook demos, Contentful CMS data models, API endpoints, and e2e tests. Set front end standards, reviewed code, and assisted junior engineers.'
          }
        ]
      },
      company: 'FIGS',
      dateEnd: 'Jun 2022',
      dateStart: 'Jul 2019',
      duration: '3 yrs',
      id: 5,
      location: 'Santa Monica, CA',
      title: 'Senior Frontend Software Engineer',
      tools: ['Apollo', 'babel', 'bash', 'CircleCI', 'Contentful', 'CSS', 'cypress', 'express', 'Figma', 'flexbox', 'git', 'GitHub', 'GraphQL', 'GTM', 'HTML', 'HTTP', 'JavaScript', 'jest', 'lerna', 'mergify', 'Netlify', 'Next.js', 'node', 'React', 'Regex', 'Shopify', 'storybook', 'styled-components', 'TSConfig', 'TypeScript', 'VSCode', 'webpack', 'yarn', 'zsh']
    }
  ],
  person: {
    contact: {
      email: 'pfisher42@gmail.com',
      phone: '213-247-4130'
    },
    location: 'Thousand Oaks, California',
    name: 'Patrick Fisher',
    title: 'Senior Frontend Software Engineer'
  },
  schools: [
    {
      body: {
        paragraphs: [
          {
            id: 0,
            text: 'Activities and societies: Climbing Club, Study Abroad, Alternative Spring Break, Masters Swimming, Club Water Polo (Edinburgh), Tau Beta Pi, Pi Tau Sigma, Golden Key, Formula SAE, Robotics Lab.'
          },
          {
            id: 1,
            text: 'Cum Laude. Trustee Scholar, R.C. Byrd Scholar, National Merit Scholar, Engineering Honors Program, Thematic Option Honors General Education, Honors Physics, Merit Research Program. Spring 2001 semester in Edinburgh, Scotland.'
          }
        ]
      },
      id: 0,
      dateEnd: '2002',
      dateStart: '1998',
      degree: 'B.S., Computer Engineering and Computer Science',
      name: 'University of Southern California'
    },
    {
      body: {
        paragraphs: [
          {
            id: 0,
            text: 'Activities and societies: Katrina Legal Aid Project, Club Water Polo, Tae Kwon Do.'
          }
        ]
      },
      id: 1,
      dateEnd: '2005',
      dateStart: '2007',
      name: 'USC Gould School of Law'
    }
  ]
}
