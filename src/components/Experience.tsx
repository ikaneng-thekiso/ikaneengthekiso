import { CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Quantitative Analyst',
    company: 'Investec',
    period: '2023 - Present',
    description: 'Gained exposure across multiple units of the bank, including Treasury, Derivative Pricing, IFRS 9, and the Private Bank Data team.',
    rotations: [
      {
        name: 'Private Bank Analytics Team',
        achievements: [
          'Respond to stakeholder requests and provide data analysis supporting key business decisions',
          'Analysed clients who default and identified early indicators using data-driven insights',
          'Supported both the Fraud team and Visa on critical initiatives',
           'Worked on two major new business cases and provided insights on both. Used a combination of internal and external data to build the business cases and to explore potential pricing options to ensure the product remainscompetitive.',
           'Using AI and Python (Playwright), I built aweb-scraping tool to gather data from the internet and help estimate market size.',
        ],
      },
      {
        name: 'Treasury',
        achievements: [
    
          'Gained exposure to core banking concepts including NSFR, LCR, and FTP',
          'Attended ALCO and LPPF meetings on a monthly basis',
          'Analysed bank assets and developed views highlighting funding costs, capital costs, and ROE',
          'Used Python and SQL to automate data cleaning for complex datasets',
        ],
      },
      {
        name: 'Derivative Pricing',
        achievements: [
          'Developed Python script comparing Front Arena with Riskflow pricing system',
          'Bootstrapped yield curves and replicated exotic derivative pricing',
          'Assisted with counterparty credit work, focused on collateral processes.',
          'Towards the end of my rotation I started building a sensitivity tool in Riskflow to assess portfolio risk shocks.',
        ],
      },
   {
        name: 'IFRS 9 Model Development',
        achievements: [
          'Performed ECL calculations and assisted with the end-to-end model development process, including data preprocessing and backtesting of credit risk models.',
          'Conducted extensive data cleaning in Python to ensure data quality and improve model reliability.',
          'Designed alternative approach for calculating regression coefficients with constrained percentage contribution',
          'Implemented projected gradient descent into IFRS 9 code to automate model selection',   
          'Collaborated with quantitative analysts and risk managers to test model outputs, validate assumptions, and present findings to stakeholders.',
        ],
      },


    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-title">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Where I've Worked
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-card">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-mono text-sm">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                  <p className="text-muted-foreground mt-4">{exp.description}</p>
                </div>

                <div className="space-y-6">
                  {exp.rotations.map((rotation, rotIndex) => (
                    <div key={rotIndex} className="timeline-item">
                      <h4 className="text-lg font-semibold text-foreground mb-3">{rotation.name}</h4>
                      <ul className="space-y-2">
                        {rotation.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;
