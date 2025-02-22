export enum DevLevel {
  JuniorFEDev = 'Junior Front-End Engineer',
  MidFEDev = 'Mid-Level Front-End Engineer',
  SeniorFEDev = 'Senior Front-End Engineer',
  LeadFEDev = 'Lead Front-End Engineer',
  FEArchitect = 'Front-End Architect / Principal Front-End Engineer',
}

const devLevels: Record<
  DevLevel,
  {
    description: string;
    experience: string;
    skills: string[];
    responsabilities: string;
  }
> = {
  [DevLevel.JuniorFEDev]: {
    description: 'Works under supervision and focuses on smaller tasks.',
    experience: '0–2 years',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular'],
    responsabilities:
      'Completing smaller tasks under supervision, learning front-end best practices.',
  },
  [DevLevel.MidFEDev]: {
    description: 'Able to work independently on projects and contribute to architecture decisions.',
    experience: '2–5 years',
    skills: [
      'JavaScript (ES6+)',
      'CSS preprocessors',
      'React',
      'Next.js',
      'Angular',
      'Git',
      'API integration',
      'Performance optimization',
    ],
    responsabilities:
      'Developing features independently, optimizing performance, and integrating APIs.',
  },
  [DevLevel.SeniorFEDev]: {
    description: 'Can lead projects, mentor junior developers, and make architectural decisions.',
    experience: '5–8 years',
    skills: [
      'Front-end performance optimization',
      'Testing frameworks',
      'Accessibility',
      'Architecture decision-making',
    ],
    responsabilities:
      'Leading projects, mentoring juniors, ensuring code quality, and making architectural choices.',
  },
  [DevLevel.LeadFEDev]: {
    description: 'Manages front-end teams, sets technical direction, and ensures best practices.',
    experience: '8+ years',
    skills: [
      'Team management',
      'Technical leadership',
      'Code reviews',
      'Scaling performance',
      'Collaboration with designers and backend teams',
    ],
    responsabilities:
      'Managing teams, reviewing code, setting technical standards, and ensuring scalability.',
  },
  [DevLevel.FEArchitect]: {
    description: 'Designs and oversees the front-end architecture for large-scale applications.',
    experience: '10+ years',
    skills: [
      'Micro-frontends',
      'Design systems',
      'Performance at scale',
      'Company-wide strategy',
      'Coding standards',
    ],
    responsabilities:
      'Defining front-end architecture, setting company-wide standards, and solving complex front-end challenges.',
  },
};

const devLevelsArray = Object.entries(devLevels).map(([title, details], index) => {
  const skills = details.skills.join(', ').replace(/, ([^,]*)$/, ' and $1');
  return `${index + 1}. ${title} (${details.experience}): ${details.description} Skills include ${skills}. Responsibilities include ${details.responsabilities}\n`;
});

export const devLevelsListing = devLevelsArray.join('\n');
