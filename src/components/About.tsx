const About = () => {
  return (
    <section id="about" className="py-20 matrix-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-title">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Who I Am
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I am a highly motivated Applied Mathematics and Operations Research graduate 
              with a strong passion for solving complex problems. I am eager to work in a 
              data-focused role where I can apply computational and analytical techniques 
              to deliver meaningful solutions.
            </p>
            <p>
              My specialisation in applied mathematics has provided me with a solid foundation 
              in optimisation methods and quantitative analysis, skills that are valuable across 
              many industries. I have extensive experience in credit risk, financial markets, 
              and liquidity risk analysis.
            </p>
            <p>
              Currently working as a Quantitative Analyst at Investec, I've gained exposure 
              across multiple units including Treasury, Derivative Pricing, IFRS 9, and the 
              Private Bank Data team, developing both technical expertise and valuable 
              business perspective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
