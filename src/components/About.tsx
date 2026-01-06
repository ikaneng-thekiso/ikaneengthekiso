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
              I'm a passionate developer with a strong foundation in software engineering, 
              eager to keep learning and growing in the tech industry.
            </p>
            <p>
              My experience spans full-stack development and creating user-centric applications. 
              I enjoy working with modern technologies and frameworks, and I love collaborating 
              with teams to build impactful solutions.
            </p>
            <p>
              Currently, I'm focused on expanding my skill set while taking on new challenges 
              and contributing to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
