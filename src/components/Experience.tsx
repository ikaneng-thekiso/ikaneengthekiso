import { CheckCircle2, Circle } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Tech Company',
    period: '2024 - Present',
    achievements: [
      { text: 'Developed and maintained web applications', completed: true },
      { text: 'Collaborated with cross-functional teams', completed: true },
      { text: 'Implemented new features and improvements', completed: false },
      { text: 'Participated in code reviews', completed: false },
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Startup Inc.',
    period: '2023 - 2024',
    achievements: [
      { text: 'Built responsive user interfaces', completed: false },
      { text: 'Worked with RESTful APIs', completed: false },
      { text: 'Contributed to team projects', completed: false },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-title">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Where I've Worked
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-mono text-sm">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      {achievement.completed ? (
                        <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      ) : (
                        <Circle size={18} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-muted-foreground">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
