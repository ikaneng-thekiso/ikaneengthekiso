import { GraduationCap, Award, Trophy, Star } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-title">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            My Background
          </h2>

          {/* Degree */}
          <div className="border border-border rounded-lg p-6 mb-12 card-hover bg-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Bachelor's Degree</h3>
                <p className="text-primary font-mono text-sm">Computer Science / Software Engineering</p>
                <p className="text-muted-foreground text-sm mt-1">Graduated: 2024</p>
                <p className="text-muted-foreground mt-4 italic border-l-2 border-primary pl-4">
                  Focused on software development, algorithms, and modern web technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <p className="section-title">Achievements</p>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Highlights
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Award, title: 'Academic Excellence', desc: 'Graduated with distinction' },
              { icon: Trophy, title: 'Competition Participant', desc: 'Hackathon competitor' },
              { icon: Star, title: 'Dean\'s List', desc: 'Multiple semesters' },
              { icon: Award, title: 'Certifications', desc: 'Professional certifications' },
            ].map((achievement, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-4 card-hover bg-card flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.desc}</p>
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
