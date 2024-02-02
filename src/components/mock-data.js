const mockData = {
  personalInfo: {
    name: 'John Doe',
    phoneno: '123-456-7890',
    email: 'john.doe@example.com',
  },
  education: [
    {
      universityName: 'University 1',
      startDate: '2010-09-01',
      endDate: '2014-05-30',
      degree: 'Bachelor of Science',
      city: 'City 1',
      state: 'State 1',
      gpa: '3.5',
      id: 1,
    },
    {
      universityName: 'University 2',
      startDate: '2014-09-01',
      endDate: '2016-05-30',
      degree: 'Master of Science',
      city: 'City 2',
      state: 'State 2',
      gpa: '3.8',
      id: 2,
    },
  ],
  workExperience: [
    {
      companyName: 'Company 1',
      jobTitle: 'Software Engineer',
      city: 'City 3',
      state: 'State 3',
      fromDate: '2016-06-01',
      toDate: '2018-05-31',
      jobDone: [
        'Developed and maintained web applications using technologies such as JavaScript, React, and Node.js.',
        'Collaborated with cross-functional teams including product managers and UX/UI designers to deliver high-quality software.',
        'Optimized code for performance and scalability, resulting in a 20% improvement in application speed.',
        'Developed and implemented new features to enhance user experience and functionality.',
        'Collaborated with cross-functional teams, conducting regular code reviews and providing constructive feedback.',
      ],
      jobDoneCounter: 5,
      id: 1,
    },
    {
      companyName: 'Company 2',
      jobTitle: 'Senior Software Engineer',
      city: 'City 4',
      state: 'State 4',
      fromDate: '2018-06-01',
      toDate: '2020-05-31',
      jobDone: [
        'Led a team of developers in project delivery, providing technical guidance and support.',
        'Designed and implemented new features, contributing to a 30% increase in user engagement.',
        'Performed code reviews and mentored junior developers, improving overall team code quality.',
        'Led the development of a scalable microservices architecture, improving system performance.',
        'Mentored junior developers, fostering a collaborative and knowledge-sharing work environment.',
      ],
      jobDoneCounter: 5,
      id: 2,
    },
  ],
  education2: true,
  experienceShow: true,
  projectCounter: 2,
  projects: [
    {
      projectName: 'Project 1',
      projectTechnologies: 'Tech 1, Tech 2',
      projectSummary: 'Summary 1',
      id: 1,
    },
    {
      projectName: 'Project 2',
      projectTechnologies: 'Tech 3, Tech 4',
      projectSummary: 'Summary 2',
      id: 2,
    },
    {
      projectName: 'Project 3',
      projectTechnologies: 'Tech 5, Tech 6',
      projectSummary: 'Summary 3',
      id: 3,
    },
  ],
  skillList: ['C', 'JavaScript', 'C++', 'Python', 'HTML/CSS'],
  skillsCounter: 4,
};
export default mockData;
