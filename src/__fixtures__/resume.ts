import { Resume } from '../types'

export const resume: Resume = {
  jobs: [
    {
      bullets: [
        {
          id: 0,
          text: 'Designed systems architecture as a full stack LAMP web developer.'
        },
        {
          id: 1,
          text: 'Designed and implemented numerous essential site features.'
        },
        {
          id: 2,
          text: 'Specified hardware, configured servers, and installed Linux applications.'
        },
        {
          id: 3,
          text: 'Managed MySQL and MSSQL databases.'
        },
        {
          id: 4,
          text: 'Provided tech support to coworkers.'
        }
      ],
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
      bullets: [
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
      ],
      company: 'Yahoo',
      dateEnd: 'Nov 2013',
      dateStart: 'Apr 2011',
      duration: '2 yrs 8 mos',
      id: 3,
      location: 'Santa Monica, CA',

      title: 'Frontend Engineer'
    },
    {
      bullets: [
        {
          id: 0,
          text: 'Selected Ember and was a primary contributor to the effort to replace the legacy Angular home page and checkout funnel with a high-performance SPA.'
        },
        {
          id: 1,
          text: 'Built Docker container for Ember application. This simple deliverable from front end to devops enabled faster development cycles, better cooperation and CI/CD automation, and fewer environment-related bugs.'
        },
        {
          id: 2,
          text: 'Implemented many A/B tested features in the acquisition funnel with measurable impact on our key metric: customer conversion rate.'
        }
      ],
      company: 'Dollar Shave Club',
      dateEnd: 'Apr 2018',
      dateStart: 'Dec 2013',
      duration: '4 yrs 5 mos',
      id: 4,
      location: 'Venice, CA',
      title: 'Principal Engineer, Front End'
    },
    {
      bullets: [
        {
          id: 0,
          text: 'Created modular content system for home page and all editorial pages.'
        },
        {
          id: 1,
          text: 'Built accessible site navigation bar and menus.'
        },
        {
          id: 2,
          text: 'Owned features end-to-end: created Typescript React modules, unit tests, sample data, interactive Storybook demos, Contentful CMS data models, API endpoints, and e2e tests.'
        },
        {
          id: 3,
          text: 'Set front end standards, reviewed code, and assisted junior engineers.'
        }
      ],
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
    links: [
      {
        id: 0,
        text: 'linkedin.com/in/pwfisher',
        url: 'https://www.linkedin.com/in/pwfisher'
      },
      {
        id: 1,
        text: 'pwfisher.github.io/resume',
        url: 'https://pwfisher.github.io/resume/'
      },
      {
        id: 2,
        text: 'github.com/pwfisher/resume',
        url: 'https://github.com/pwfisher/resume'
      }
    ],
    location: 'Thousand Oaks, CA',
    name: 'Patrick Fisher',
    title: 'Senior Frontend Software Engineer'
  },
  schools: [
    {
      id: 0,
      dateEnd: '2002',
      dateStart: '1998',
      degree: 'B.S., Computer Engineering and Computer Science',
      name: 'University of Southern California',
      bullets: [
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
    {
      id: 1,
      dateEnd: '2007',
      dateStart: '2005',
      name: 'USC Gould School of Law',
      bullets: [
        {
          id: 0,
          text: 'Activities and societies: Katrina Legal Aid Project, Club Water Polo, Tae Kwon Do.'
        }
      ]
    }
  ]
}
