const skillCategories = [
  {
    title: 'technical_skills',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'HTML/CSS', 'Git'],
  },
  {
    title: 'tools_&_platforms',
    skills: ['VS Code', 'GitHub', 'Docker', 'PostgreSQL', 'MongoDB', 'Firebase', 'Linux', 'Figma'],
  },
  {
    title: 'soft_skills',
    skills: ['Communication', 'Problem Solving', 'Team Collaboration', 'Time Management', 'Adaptability'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 matrix-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-title">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What I Know
          </h2>

          <div className="space-y-10">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-primary font-mono text-sm mb-4">
                  {'> '}{category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
