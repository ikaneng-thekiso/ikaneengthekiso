import { GraduationCap, Award, BookOpen, Lightbulb } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-title">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            My Background
          </h2>

          {/* Degrees */}
          <div className="space-y-6 mb-12">
            <div className="border border-border rounded-lg p-6 card-hover bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">BSc Honours Applied Mathematics</h3>
                  <p className="text-primary font-mono text-sm">University of Stellenbosch</p>
                  <p className="text-muted-foreground text-sm mt-1">Graduated: 2023</p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 card-hover bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">BSc Applied Mathematics & Operations Research</h3>
                  <p className="text-primary font-mono text-sm">University of Stellenbosch</p>
                  <p className="text-muted-foreground text-sm mt-1">Graduated: 2022</p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 card-hover bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">National Senior Certificate</h3>
                  <p className="text-primary font-mono text-sm">Boksburg High School</p>
                  <p className="text-muted-foreground text-sm mt-1">Graduated: 2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Projects */}
          <p className="section-title">Side Projects</p>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Continuous Learning
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Lightbulb, title: 'n8n Presentation', desc: 'Presented to Quant community on no-code AI automation' },
              { icon: BookOpen, title: 'Physics-Informed Neural Networks', desc: 'Short course by Dr. Mohammad Samara (University of Tokyo)' },
              { icon: Award, title: 'Python Dashboards', desc: 'Built interactive dashboards with Streamlit' },
              { icon: GraduationCap, title: 'Community Tutoring', desc: 'Tutored underprivileged children in mathematics' },
            ].map((project, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-4 card-hover bg-card flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <project.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
