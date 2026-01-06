const skillCategories = [
  {
    title: 'hard_skills',
    skills: ['Python', 'R (Simulations & Markov Processes)', 'Matlab', 'Lingo', 'Excel', 'SQL', 'Azure (AZ-900 Certified)'],
  },
  {
    title: 'frameworks_&_tools',
    skills: ['PyTorch', 'Streamlit', 'Riskflow', 'Front Arena', 'n8n', 'Power Automate'],
  },
  {
    title: 'domains',
    skills: ['Quantitative Analysis', 'Derivative Pricing', 'Credit Risk', 'IFRS 9', 'Liquidity Risk', 'Data Analytics', 'Financial Modeling'],
  },
  {
    title: 'soft_skills',
    skills: ['Interpersonal Skills', 'Decision Making', 'Communication', 'Adaptability', 'Work Ethic', 'Teamwork'],
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
